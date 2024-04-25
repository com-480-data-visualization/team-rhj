import React, { createContext, useState, useContext } from 'react';

const DashContext = createContext();

export function useDash() {
  return useContext(DashContext);
}

export const DashProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedStateNames, setSelectedStateNames] = useState([]);

  const selectCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <DashContext.Provider value={{ activeCategory, selectCategory,
    selectedStateNames,setSelectedStateNames }}>
      {children}
    </DashContext.Provider>
  );
};
