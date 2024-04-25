import React from 'react';
import { useDash } from '../providers/DashProvider';
import Vizualisation_1 from './DashboardElem/Vizualisation_1';
import Vizualisation_2 from './DashboardElem/Vizualisation_2';

const CategoryComponent = {
  "Vizualisation_1": Vizualisation_1,
  "Vizualisation_2": Vizualisation_2,
  "Vizualisation_3": Vizualisation_1,
  "Vizualisation_4": Vizualisation_1,
  "Vizualisation_5": Vizualisation_1
};

export default function Dashboardd() {
  const { activeCategory } = useDash();
  const ComponentToRender = CategoryComponent[activeCategory] || Vizualisation_1;

  return (
    <div style={{ width: '80%', height: '100vh' }}>
      <ComponentToRender/>
    </div>
  );
}
