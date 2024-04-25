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

The objective of our project is to conduct a comprehensive analysis of shopping and consumption patterns among consumers in the United States. Our dataset is rich with diverse metrics, encompassing detailed information about consumer demographics, the variety of products purchased, and the geographic distribution of these purchases. Through this analysis, we aim to uncover trends and insights into consumer behavior, product preferences, and regional variations in consumption. This will enable us to better understand the factors that influence purchasing decisions and to identify potential areas for market growth or strategic intervention

### Visualisations

Our website will feature a series of dynamic visualizations to explore consumer behavior across the United States. The central feature of our project is an interactive map that displays in a color-coded way insightful informations such as the average number of orders per state, providing a visual representation of consumption patterns across the country. 

In addition to the map, we will include a series of supplementary visualizations that offer deeper insights into consumer behavior. These will include bar graphs, pie charts, and scatter plots that visualize data on variables such as spending power, product preference diversity, and seasonal buying trends. These visualizations will be interactive, allowing users to filter data by state, demographic variables, product categories, and other relevant metrics. This will enable users to focus on specific segments of the data and extract more targeted insights.

The structure of our website will be as follows:


- **Map** : The map will be the central feature of the homepage, displaying relevant informations in a color-coded way such as the average spending per order, the top purchased categories, and the distribution of payment methods. . Users can also interact with the map in two ways:
  
  - **Hover Interaction:** As users hover their mouse over any state on the map, a tooltip will appear. This tooltip will provide succinct insights into the state’s specific consumption patterns, offering a snapshot of key data such as average spending per order and top purchased categories.

  - **Click Interaction:** Clicking on a state will redirect the user to a dedicated page on our website. This page will host a deeper analytical dive into the specific characteristics of consumption in that state. It will include detailed breakdowns of consumer demographics, preferred product types, and purchasing trends, alongside comparisons with national averages.

<!-- ![map](images/map.png) -->

- **Graphs section** : Below the map, we will include supplementary visualizations that facilitate understanding of regional buying trends. These will include bar graphs, pie charts, and scatter plots that visualize data on variables such as spending power, product preference diversity, and seasonal buying trends. We plan to include specifically the following graphs (non-exhaustive list):
    - A pie chart showing the distribution of spending power across genders.
    - A bar chart displaying the distribution of product categories purchased.
    - A pie chart displaying the distribution of payment methods used.
    - A scatter plot showing the relationship between age and average spending per order.
    - A line chart showing seasonal buying trends.
    - A pie chart showing the distribution of ratings.
    - A bar chart showing the distribution of spending power across categories.
    - Many other graphs that will be added as we explore the data further.
- **Filters bar** : To enhance user experience, we will include a filter bar on the left of the graph section that allow users to customize the data displayed on the graphs. Users can filter data by state, demographic variables, product categories, time periods, and other relevant metrics. This will enable users to focus on specific segments of the data and extract more targeted insights.
  
<!-- ![filters](images/filters.jpg) -->
- **Comparison toggle** : On top right of the graphs section, we will include a toggle button that allows users to compare data between states. Toggling this feature on will split the graphs section into two columns, each displaying data for a different state. 
This will enable users to easily compare consumption patterns and identify regional differences or similarities. When toggled off, the graphs section will revert to displaying data for a single state in a more compact way than the column layout.

<!-- ![compact](images/compact.jpg) -->
<!-- ![compare](images/compare.jpg) -->

## Milestone 3 (31st May, 5pm)

**80% of the final grade**


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

