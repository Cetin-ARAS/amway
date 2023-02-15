import React from 'react';
import * as go from 'gojs';

const Diagram = ({ cards }) => {
  const diagramRef = React.useRef(null);

  React.useEffect(() => {
    const $ = go.GraphObject.make;

    const diagram = diagramRef.current;

    if (!diagram) {
      const newDiagram = $(go.Diagram, diagramRef.current, {
        layout: $(go.LayeredDigraphLayout),
        'undoManager.isEnabled': true,
      });

      const nodeTemplate = $(
        go.Node,
        'Auto',
        $(
          go.Shape,
          'RoundedRectangle',
          { fill: '#F8F8F8', strokeWidth: 0 },
          new go.Binding('fill', 'color')
        ),
        $(
          go.TextBlock,
          { margin: 8, maxSize: new go.Size(160, NaN), wrap: go.TextBlock.WrapFit },
          new go.Binding('text', 'text')
        ),
        {
          click: (e, node) => {
            const data = node.data;
            console.log(`Clicked node ${data.key}: ${data.text}`);
          },
        }
      );

      newDiagram.nodeTemplate = nodeTemplate;

      const linkTemplate = $(
        go.Link,
        { routing: go.Link.Orthogonal, corner: 5 },
        $(
          go.Shape,
          { strokeWidth: 2 },
          new go.Binding('stroke', 'color')
        ),
        $(
          go.TextBlock,
          new go.Binding('text', 'text')
        )
      );

      newDiagram.linkTemplate = linkTemplate;

      diagramRef.current = newDiagram;
    }

    const diagramm= diagramRef.current;

    const nodeDataArray = cards.map((card, i) => {
      return { key: i, text: card, color: '#F8F8F8' };
    });

    const linkDataArray = [];
    for (let i = 0; i < nodeDataArray.length - 1; i++) {
      linkDataArray.push({ from: i, to: i + 1, text: 'Link', color: '#CCCCCC' });
    }

    diagramm.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);

  }, [cards]);

  return <div ref={diagramRef} style={{ height: '500px' }}></div>;
};

export default Diagram;
