import React from "react";

interface Item {
  name: string;
  amountPerPerson: number;
}

interface CalculationResultProps {
  items: Item[];
  peopleCount: number;
}

const CalculationResult: React.FC<CalculationResultProps> = ({
  items,
  peopleCount,
}) => {
  const calculateTotal = (item: Item): number => {
    return item.amountPerPerson * peopleCount;
  };

  return (
    <div>
      <h3>Totala mängder</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}: {calculateTotal(item)} stycken
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalculationResult;
