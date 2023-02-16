import './Tree.css';

const Tree = ({ cards }) => {
  const lines = [];

  // cards içindeki her elemanın bir önceki elemana bağlanması için line ekliyoruz
  for (let i = 1; i < cards.length; i++) {
    const x1 = i * 180 + 90;
    const y1 = 150;
    const x2 = (i - 1) * 180 + 90;
    const y2 = 450;

    lines.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="black"
        strokeWidth="3"
      />
    );
  }

  return (
    <svg className="tree">
      {lines}
    </svg>
  );
};

export default Tree;
