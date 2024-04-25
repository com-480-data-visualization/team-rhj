import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Box } from '@mui/material';

const Vizualisation_1 = () => {
  const ref = useRef();

  useEffect(() => {
    const data = [12, 36, 56, 30, 22]; // Données simples pour les barres
    const svg = d3.select(ref.current)
                  .attr('width', 400)
                  .attr('height', 300);

    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", d => 300 - 10 * d)
      .attr("width", 65)
      .attr("height", d => d * 10)
      .attr("fill", "blue");
  }, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <svg ref={ref}></svg>
    </Box>
  );
};

export default Vizualisation_1;
