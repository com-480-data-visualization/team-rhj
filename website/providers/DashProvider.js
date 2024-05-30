import React, { createContext, useState, useContext, useEffect } from 'react';
import Papa from 'papaparse';

// Path to the CSV file
const csvFilePath = 'data/shopping_behavior_updated.csv';

const DashContext = createContext();

export function useDash() {
  return useContext(DashContext);
}

const stateAbbrToId = {
  "AL": "01", "AK": "02", "AS": "60", "AZ": "04", "AR": "05",
  "CA": "06", "CO": "08", "CT": "09", "DE": "10", "DC": "11",
  "FL": "12", "FM": "64", "GA": "13", "GU": "66", "HI": "15",
  "ID": "16", "IL": "17", "IN": "18", "IA": "19", "KS": "20",
  "KY": "21", "LA": "22", "ME": "23", "MH": "68", "MD": "24",
  "MA": "25", "MI": "26", "MN": "27", "MS": "28", "MO": "29",
  "MT": "30", "NE": "31", "NV": "32", "NH": "33", "NJ": "34",
  "NM": "35", "NY": "36", "NC": "37", "ND": "38", "MP": "69",
  "OH": "39", "OK": "40", "OR": "41", "PW": "70", "PA": "42",
  "PR": "72", "RI": "44", "SC": "45", "SD": "46", "TN": "47",
  "TX": "48", "UM": "74", "UT": "49", "VT": "50", "VA": "51",
  "VI": "78", "WA": "53", "WV": "54", "WI": "55", "WY": "56"
};

const stateIdToName = {
  "01": "Alabama", "02": "Alaska", "60": "American Samoa", "04": "Arizona", "05": "Arkansas",
  "06": "California", "08": "Colorado", "09": "Connecticut", "10": "Delaware", "11": "District of Columbia",
  "12": "Florida", "64": "Federated States of Micronesia", "13": "Georgia", "66": "Guam", "15": "Hawaii",
  "16": "Idaho", "17": "Illinois", "18": "Indiana", "19": "Iowa", "20": "Kansas",
  "21": "Kentucky", "22": "Louisiana", "23": "Maine", "68": "Marshall Islands", "24": "Maryland",
  "25": "Massachusetts", "26": "Michigan", "27": "Minnesota", "28": "Mississippi", "29": "Missouri",
  "30": "Montana", "31": "Nebraska", "32": "Nevada", "33": "New Hampshire", "34": "New Jersey",
  "35": "New Mexico", "36": "New York", "37": "North Carolina", "38": "North Dakota", "69": "Northern Mariana Islands",
  "39": "Ohio", "40": "Oklahoma", "41": "Oregon", "70": "Palau", "42": "Pennsylvania",
  "72": "Puerto Rico", "44": "Rhode Island", "45": "South Carolina", "46": "South Dakota", "47": "Tennessee",
  "48": "Texas", "74": "United States Minor Outlying Islands", "49": "Utah", "50": "Vermont", "51": "Virginia",
  "78": "Virgin Islands", "53": "Washington", "54": "West Virginia", "55": "Wisconsin", "56": "Wyoming"
};


// Reverse lookup to get state name from abbreviation
const stateNameToAbbr = Object.fromEntries(
  Object.entries(stateIdToName).map(([id, name]) => [name, Object.keys(stateAbbrToId).find(abbr => stateAbbrToId[abbr] === id)])
);

export const DashProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState({});
  const [selectedStateNames, setSelectedStateNames] = useState([]);
  const [ageRange, setAgeRange] = useState([20, 50]);
  const [visualisation, setVisualisation] = useState('CustomerTypeAnalysis'); // Default to 'CustomerTypeAnalysis'
  const [gender, setGender] = useState('All');
  const [categories, setCategories] = useState({
    Clothing: true,
    Footwear: true,
    Accessories: true,
    Outerwear: true,
  });
  const [seasons, setSeasons] = useState({
    Winter: true,
    Spring: true,
    Summer: true,
    Fall: true,
  });
  const [sizes, setSizes] = useState({
    S: true,
    M: true,
    L: true,
    XL: true,
  });
  const [mapShownProperty, setMapShownProperty] = useState('Number of Sales');
  const [selectedStateNamesRegion1, setSelectedStateNamesRegion1] = useState([]);
  const [selectedStateNamesRegion2, setSelectedStateNamesRegion2] = useState([]);
  const [dataRegion1, setDataRegion1] = useState({});
  const [dataRegion2, setDataRegion2] = useState({});


  // valid state names present in the dataset
  const [validStateNames, setValidStateNames] = useState([]);
  useEffect(() => {
    const validStateNames = [...new Set(data.map(item => item.Location))];
    setValidStateNames(validStateNames);
  }, [data]);

  useEffect(() => {
    // Fetch and parse CSV data
    const fetchData = async () => {
      try {
        const response = await fetch(csvFilePath);
        if (!response.ok) {
          throw new Error(`Failed to fetch CSV file: ${response.statusText}`);
        }
        const csvText = await response.text();
        Papa.parse(csvText, {
          header: true,
          complete: (result) => {
            setData(result.data);
          },
          error: (error) => {
            console.error('Error parsing CSV:', error);
          }
        });
      } catch (error) {
        console.error('Failed to fetch CSV file:', error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const prepare = (data, selectedStateNamesRegion) => {
      let filtered = data;
      const stateFullNames = selectedStateNamesRegion.map(abbr => stateIdToName[stateAbbrToId[abbr]]);
      filtered = filtered.filter((item) => stateFullNames.includes(item.Location));

      const dataCategorySpending = filtered.reduce((acc, item) => {
        acc[item.Category] = (acc[item.Category] || 0) + parseFloat(item['Purchase Amount (USD)']);
        return acc;
      }, {});
      // add missing categories
      dataCategorySpending['Clothing'] = dataCategorySpending['Clothing'] || 0
      dataCategorySpending['Footwear'] = dataCategorySpending['Footwear'] || 0
      dataCategorySpending['Accessories'] = dataCategorySpending['Accessories'] || 0
      dataCategorySpending['Outerwear'] = dataCategorySpending['Outerwear'] || 0

      const dataGender = filtered.reduce((acc, item) => {
        acc[item.Gender] = (acc[item.Gender] || 0) + 1;
        return acc;
      }, {});
      // add missing genders 
      dataGender['Female'] = dataGender['Female'] || 0
      dataGender['Male'] = dataGender['Male'] || 0
      

      // age groups 
      let n = 3
      const ageGroups = {}
      for (let i = 18; i < 70; i += n) {
        ageGroups[`${i}-${i + n - 1}`] = 0
      }
      const dataAge = filtered.reduce((acc, item) => {
        const ageGroup = `${Math.floor(item.Age / n) * n}-${Math.floor(item.Age / n) * n + n - 1}`;
        acc[ageGroup] = (acc[ageGroup] || 0) + 1;
        return acc;
      }, {});
      // add missing age groups
      for (const ageGroup in ageGroups) {
        if (!dataAge[ageGroup]) {
          dataAge[ageGroup] = 0
        }
      }


      const format = x => Object.entries(x).map(([label, value]) => ({ label, value })).sort((a, b) => a.label.localeCompare(b.label));
      return {
        dataCategorySpending: format(dataCategorySpending),
        dataGender: format(dataGender),
        dataAge: format(dataAge),
      };

    }
    setDataRegion1(prepare(data, selectedStateNamesRegion1));
    setDataRegion2(prepare(data, selectedStateNamesRegion2));
  }, [data, selectedStateNamesRegion1, selectedStateNamesRegion2]);


  useEffect(() => {
    // Filter data based on selected states, age range, and category
    let filtered = data;

    if (selectedStateNames.length > 0) {
      const stateFullNames = selectedStateNames.map(abbr => stateIdToName[stateAbbrToId[abbr]]);
      filtered = filtered.filter((item) => stateFullNames.includes(item.Location));
    }

    if (ageRange.length === 2) {
      filtered = filtered.filter((item) => item.Age >= ageRange[0] && item.Age <= ageRange[1]);
    }

    if (gender !== 'All') {
      filtered = filtered.filter((item) => item.Gender === gender);
    }


    // filter category
    filtered = filtered.filter((item) => categories[item.Category]);
    // filter size
    filtered = filtered.filter((item) => sizes[item.Size]);
    // filter seasons
    filtered = filtered.filter((item) => seasons[item.Season]);

    let dataMap = null
    switch (mapShownProperty) {
      case 'Number of Sales':
        dataMap = data.reduce((acc, item) => {
          acc[item.Location] = (acc[item.Location] || 0) + 1;
          return acc;
        }, {});
        break;
      case 'Total Purchase Amount (USD)':
        dataMap = data.reduce((acc, item) => {
          acc[item.Location] = (acc[item.Location] || 0) + parseFloat(item['Purchase Amount (USD)']);
          return acc;
        }, {});
        break;
      case 'Average Purchase Amount (USD)': {
        const counts = data.reduce((acc, item) => {
          acc[item.Location] = (acc[item.Location] || 0) + 1;
          return acc;
        }, {});
        dataMap = data.reduce((acc, item) => {
          acc[item.Location] = (acc[item.Location] || 0) + parseFloat(item['Purchase Amount (USD)']);
          return acc;
        }, {});
        for (const state in dataMap) {
          dataMap[state] = dataMap[state] / counts[state];
        }
      }

    }
    dataMap = Object.fromEntries(
      Object.entries(dataMap).map(([stateName, sales]) => [stateAbbrToId[stateNameToAbbr[stateName]], sales | 0])
    );

    const createDatasets = (data) => {


      const dataCategorySpending = data.reduce((acc, item) => {
        acc[item.Category] = (acc[item.Category] || 0) + parseFloat(item['Purchase Amount (USD)']);
        return acc;
      }, {});

      const dataProductCategoriesPurchased = data.reduce((acc, item) => {
        acc[item.Category] = (acc[item.Category] || 0) + 1;
        return acc;
      }, {});

      const dataAgeSpending = data.reduce((acc, item) => {
        acc[item.Age] = (acc[item.Age] || 0) + parseFloat(item['Purchase Amount (USD)']);
        return acc;
      }, {});

      let dataSeasonalTrends = data.reduce((acc, item) => {
        acc[item.Season] = (acc[item.Season] || 0) + parseFloat(item['Purchase Amount (USD)']);
        return acc;
      }, {});

      const dataItemCategoryDistribution = data.reduce((acc, item) => {
        acc[item.Category] = (acc[item.Category] || 0) + 1;
        return acc;
      }, {});

      const dataItemSizeDistribution = data.reduce((acc, item) => {
        acc[item.Size] = (acc[item.Size] || 0) + 1;
        return acc;
      }, {});

      const dataGender = data.reduce((acc, item) => {
        acc[item.Gender] = (acc[item.Gender] || 0) + 1;
        return acc;
      }, {});

      const dataPaymentMethods = data.reduce((acc, item) => {
        acc[item['Payment Method']] = (acc[item['Payment Method']] || 0) + 1;
        return acc;
      }, {});

      const dataAge = data.reduce((acc, item) => {
        let n = 3
        const ageGroup = `${Math.floor(item.Age / n) * n}-${Math.floor(item.Age / n) * n + n - 1}`;
        acc[ageGroup] = (acc[ageGroup] || 0) + 1;
        return acc;
      }, {});

      const dataSubscription = data.reduce((acc, item) => {
        acc[item['Subscription Status']] = (acc[item['Subscription Status']] || 0) + 1;
        return acc;
      }, {});

      const dataShippingType = data.reduce((acc, item) => {
        acc[item['Shipping Type']] = (acc[item['Shipping Type']] || 0) + 1;
        return acc;
      }, {});

      const format = x => Object.entries(x).map(([label, value]) => ({ label, value })).sort((a, b) => a.label.localeCompare(b.label));
      const formatx = x => Object.entries(x).map(([label, value]) => ({ x: label, y: value })).sort((a, b) => a.x.localeCompare(b.x));

      const seasons_order = ['Winter', 'Spring', 'Summer', 'Fall']
      dataSeasonalTrends = formatx(dataSeasonalTrends).sort((a, b) => seasons_order.indexOf(a.x) - seasons_order.indexOf(b.x));

      return {
        dataCategorySpending: format(dataCategorySpending),
        dataProductCategoriesPurchased: format(dataProductCategoriesPurchased),
        dataAgeSpending: formatx(dataAgeSpending),
        dataSeasonalTrends: dataSeasonalTrends,
        dataItemCategoryDistribution: format(dataItemCategoryDistribution),
        dataItemSizeDistribution: format(dataItemSizeDistribution),
        dataGender: format(dataGender),
        dataPaymentMethods: format(dataPaymentMethods),
        dataAge: format(dataAge),
        dataSubscription: format(dataSubscription),
        dataShippingType: format(dataShippingType),
        dataMap: dataMap
      };
    };

    setFilteredData(createDatasets(filtered));
  }, [data, selectedStateNames, ageRange, categories, gender, seasons, sizes, mapShownProperty]);

  return (
    <DashContext.Provider
      value={{
        selectedStateNames,
        setSelectedStateNames,
        setAgeRange,
        filteredData,
        setVisualisation,
        setCategories,
        visualisation,
        gender,
        setGender,
        seasons,
        setSeasons,
        sizes,
        setSizes,
        mapShownProperty,
        setMapShownProperty,
        dataRegion1,
        dataRegion2,
        selectedStateNamesRegion1,
        setSelectedStateNamesRegion1,
        selectedStateNamesRegion2,
        setSelectedStateNamesRegion2,
        validStateNames        
      }}>
      {children}
    </DashContext.Provider>
  );
};