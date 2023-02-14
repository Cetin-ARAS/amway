// import React, { useRef, useEffect } from 'react';
// import { GraphObject, Diagram } from 'gojs';
// import go from 'gojs';


// const GoJSGraph = () => {
//   const diagramRef = useRef(null);

//   useEffect(() => {
//     const $ = go.GraphObject.make;
//     const diagram = new Diagram();
//     diagram.nodeTemplate = $(
//       go.Node,
//       "Auto",
//       $(go.Shape, "RoundedRectangle", { strokeWidth: 0 },
//         new go.Binding("fill", "color")),
//       $(go.TextBlock,
//         { margin: 8 },
//         new go.Binding("text", "key"))
//     );
//     diagram.model = new go.GraphLinksModel(
//       [
//         { key: "Alpha", color: "lightblue" },
//         { key: "Beta", color: "orange" },
//         { key: "Gamma", color: "lightgreen" },
//         { key: "Delta", color: "pink" }
//       ],
//       [
//         { from: "Alpha", to: "Beta" },
//         { from: "Alpha", to: "Gamma" },
//         { from: "Beta", to: "Beta" },
//         { from: "Gamma", to: "Delta" },
//         { from: "Delta", to: "Alpha" }
//       ]
//     );
//     diagram.init(diagramRef.current);
//   }, []);

//   return <div ref={diagramRef} className="diagram-component" />;
// };

// export default GoJSGraph;
