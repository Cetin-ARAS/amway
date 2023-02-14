import React from "react";
import * as d3 from "d3";

const Tree = ({ data, cards, card2, links }) => {
const svgRef = React.useRef();

React.useEffect(() => {
const svg = d3.select(svgRef.current);
svg
  .selectAll("line")
  .data(links)
  .join("line")
  .attr("stroke", "black")
  .attr("x1", d => d.source.x)
  .attr("y1", d => d.source.y)
  .attr("x2", d => d.target.x)
  .attr("y2", d => d.target.y);
}, [links]);

return <svg ref={svgRef} />;
};

export default Tree;