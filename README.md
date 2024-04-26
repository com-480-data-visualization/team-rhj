# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Birling Romain | 310054|
| Christophe Hugues | 311252|
| Jeanne Allocio | 311844 |

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 (29th March, 5pm)

**10% of the final grade**

### Dataset

Our project utilizes the **Consumer Behavior and Shopping Habits Dataset** available [here](https://www.kaggle.com/datasets/zeesolver/consumer-behavior-and-shopping-habits-dataset), comprising 3900 orders from customers in the USA.
Considering the preprocessing, the dataset is very clean and doesn’t need so much advanced preprocessing. You will find more about the preprocessing in the Exploratory Data Analysis part. 

### Problematic

Our visualization project seeks to demystify the complex trends in consumer shopping behavior, highlighting how demographics, locations, and other factors influence purchasing habits. We focus on uncovering shifts in consumer preferences across different groups and locations, analyzing how seasonal changes affect shopping behavior, and evaluating the impact of promotional strategies on buying decisions. 

This effort is crucial in today's digital age, where a vast amount of consumer data exists but harnessing it for insightful business decisions remains challenging. We aim to transform raw data into a dynamic storytelling tool through interactive visualizations, providing retailers, marketers, and strategists with real-time insights into consumer behavior. 

This can inform product development, marketing, and customer engagement strategies. Our primary audience includes retailers, e-commerce platforms looking to refine sales strategies, marketing professionals crafting targeted campaigns, business analysts seeking deeper market insights, and academics researching consumer behavior. By offering both broad and detailed insights through engaging visualizations, our project serves as a versatile tool for those interested in the nuances of consumer dynamics, equipping them with the knowledge to make informed decisions.

### Exploratory Data Analysis

Please refer to [this notebook](dataviz.ipynb) for our exploratory data analysis.

Our analysis delves into consumer data, revealing insights crucial for refining business strategies. With an average purchase amount of $59.76 and a broad standard deviation, we see diverse spending habits, emphasizing the need for tailored marketing. The customer base, averaging 44 years in age, spans from young adults to seniors, suggesting strategies should vary by age group to maximize engagement.

Satisfaction levels, with an average rating of 3.75 out of 5, indicate room for improvement in product or service offerings. Additionally, the mix of geographical locations and preferences for product categories and payment methods, notably PayPal, points to a consumer base comfortable with e-commerce.

Strategically, these findings advocate for segmented marketing to cater to the diverse consumer segments and spending behaviors. Optimizing product lines and promotions to align with demographic trends and satisfaction insights is vital. Enhancing the online shopping experience and offering flexible payment options are key to fulfilling customer expectations, driving satisfaction, and ultimately, promoting sales growth.

### Related work

Several [analyses](https://www.kaggle.com/datasets/zeesolver/consumer-behavior-and-shopping-habits-dataset/code) have already been conducted on this dataset, providing initial insights into consumer behavior and shopping habits. However, these analyses tend to be somewhat basic, focusing on surface-level interpretations without delving deeply into the data. Our approach aims to take this a step further by conducting a more thorough and interesting analysis. We plan to make our analysis more interactive, engaging, and insightful by highlighting more correlations and connections between features. This approach will not only provide a deeper understanding of the dataset but also uncover valuable insights that previous analyses may have overlooked.

Our project transforms consumer behavior analysis by focusing on interactive data exploration, a leap from traditional static visualizations that depict trends in gender, geography, and age. We're developing a web application to make data dynamically engaging, inspired by Shopify's real-time business insight dashboards. This platform will feature interactive charts, diagrams, and filters, enabling users to delve into specific segments, from age-specific purchasing patterns to seasonal shopping impacts.

By adopting elements from digital leaders like Shopify, our application aims to simplify complex data analysis, offering a more intuitive and immersive experience.

Our goal is to revolutionize how consumer behavior data is viewed and interacted with, enhancing the decision-making process for businesses and individuals. This initiative represents a significant shift towards active, user-driven data exploration, opening new avenues for real-time discovery and insights in consumer dynamics.

## Milestone 2 (26th April, 5pm)

**10% of the final grade**

### Project goal 

The objective of our project is to conduct a comprehensive analysis of shopping and consumption patterns among consumers in the United States. Our dataset is rich with diverse metrics, encompassing detailed information about consumer demographics, the variety of products purchased, and the geographic distribution of these purchases. Through this analysis, we aim to uncover trends and insights into consumer behavior, product preferences, and regional variations in consumption. This will enable us to better understand the factors that influence purchasing decisions and to identify potential areas for market growth or strategic intervention. 

### Visualisations

Our website will feature a series of dynamic visualizations to explore consumer behavior across the United States. The central feature of our project is an interactive map that displays in a color-coded way insightful informations providing a visual representation of consumption patterns across the country. 

In addition to the map, we will include a series of supplementary visualizations that offer deeper insights into consumer behavior and product preferences. These will include bar graphs, pie charts, and scatter plots that visualize data on variables such as spending power, product preference diversity, and seasonal buying trends. These visualizations will be interactive, allowing users to filter data by state, demographic variables, product categories, and other relevant metrics. This will enable users to focus on specific segments of the data and extract more targeted insights.

The structure of our website will be as follows:


- **Map** : The map will be the central feature of the homepage. It will displayy in a color-coded way the average number of orders per state. Users can also interact with the map in two ways:
  
  - **Hover Interaction:** As users hover their mouse over any state on the map, a tooltip will appear. This tooltip will provide succinct insights into the state’s specific consumption patterns: the average nuber of orders, the average amount spent and the most ordered category of item. 

  - **Click Interaction:** Clicking on a state will redirect the user to a dedicated page on our website. This page will host a deeper analytical dive into the specific characteristics of consumption in that state. It will include detailed breakdowns of consumer demographics, preferred product types, and purchasing trends, alongside comparisons with national averages.

<!-- ![map](images/map.png) -->

- **Deepdive page** : Once you have clicked on a map state, you will be taken to this page for further analysis. This page will take the form of a dashboard with several graphs. You can filter to display 2 different dashboards: 
  - Customer type analysis: this dashboard will include: 
    - A pie chart displayin the male and female distribution. 
    -	A diagram displaying the age distribution.
    -	A bar chart displaying the subscription status.
    -	A pie chart displaying the distribution of payment methods used. 
    -	A bar chart displaying the shipping type distribution.
      
    ![Customer type](image/customer%20type.png)
    *Figure 1* : Customer type analysis dashboard

  - Product preference analysis: this dashboard will include: 
    - A chart showing the distribution of spending power across categories.
    - A bar chart displaying the distribution of product categories purchased.
    - A scatter plot showing the relationship between age and average spending per order.
    - A line chart showing seasonal buying trends.
    - A donut char diplaying the item category distribution.
    - A pie chart showing the ordered item size distribution 
    
    ![Product preference](image/product%20preference.png)
    *Figure 2* : Product preference analysis dashboard

- **Filters bar** : To enhance user experience, we will include a filter bar on the left of the dashboard that allow users to customize the data displayed on the graphs. Users will be able to filter data by several metrics: gender, age, item category, season, subscritpion status, shipping method and payment method. This will enable users to focus on specific segments of the data and extract more targeted insights.
  
<!-- ![filters](images/filters.jpg) -->
- **Comparison part** : At the bottom of the page, you'll also find a section for comparing states. It's interesting to be able to study a report in detail, but it's also very interesting to be able to compare customer types and product preferences between reports. Here is an example of how the visualisation will be for the state comparison: 

  ![Comparison](image/state%20comparison.png)
  *Figure 3* : State comparison dashboard

<!-- ![compact](images/compact.jpg) -->
<!-- ![compare](images/compare.jpg) -->

### Tools 

Here are the tools we used and we will use for our data and for the visualization. 

**Data Analysis**: 
  - Python 

**Visualizations**: 
  - React
  - React simple map
  - d3.js
  - Nextjs 

### Extra ideas

If time permits, we have some ideas of visualizations that could elevate the project experience: 

  - **Network visualizations**: we will show the relationships between different product categories or between demographics and product preferences using network graphs. We can use a library like D3.js to create force-directed graphs or network diagrams that illustrate the connections and strength of relationships based on the dataset.

  - **Sankey diagram**: we can use Sankey diagrams to visualize the flow of consumer spending across different states or to trace the path from demographic characteristics to specific purchasing behaviors. We can use D3.js to create interactive Sankey diagrams that are visually engaging and informative. These diagrams would add a novel visualization format that can enhance understanding of data flows and transitions, though they are supplementary to more traditional charts.

  - **Multi-layered map**: we can incorporate multiple layers in our interactive map that users can toggle. These layers could show different aspects like demographic distribution, spending power, and product popularity. We can use advanced mapping libraries such as Leaflet.js with layer control features to allow users to customize what data they see on the map. 

### Skeleton website

Here is the link of our website: https://data-viz-dusky.vercel.app/


## Milestone 3 (31st May, 5pm)

**80% of the final grade**


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

