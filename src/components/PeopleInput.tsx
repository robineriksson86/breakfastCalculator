import React from "react";
import { TextField } from "@mui/material";

interface PeopleInputProps {
  peopleCount: number;
  updatePeopleCount: (count: number) => void;
}

const PeopleInput: React.FC<PeopleInputProps> = ({
  peopleCount,
  updatePeopleCount,
}) => {
  return (
    <TextField
      id="peopleCount"
      label="Antal personer:"
      variant="outlined"
      value={peopleCount}
      type="number"
      onChange={(e) => updatePeopleCount(Number(e.target.value))}
    />
  );
};

export default PeopleInput;
