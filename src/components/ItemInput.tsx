import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextField, Stack, IconButton } from "@mui/material";
import { styled } from "@glitz/react";

interface Item {
  id: string;
  name: string;
  amountPerPerson: number;
}

interface ItemInputProps {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  removeItem: (id: string) => void;
}
const Wrapper = styled.div({
  display: "flex",
  alignItems: "center",
});

const ButtonWrapper = styled.div({
  marginLeft: "8px",
});

const ItemInput: React.FC<ItemInputProps> = ({
  items,
  setItems,
  removeItem,
}) => {
  const updateAmount = (index: number, amount: number) => {
    const newItems = [...items];
    newItems[index].amountPerPerson = amount;
    setItems(newItems);
  };

  return (
    <div>
      <h3>Artiklar</h3>
      <Stack direction="column" spacing={1}>
        {items.map((item, index) => (
          <Wrapper key={index}>
            <TextField
              id={item.id}
              label={item.name}
              variant="outlined"
              value={item.amountPerPerson}
              type="number"
              onChange={(e) => updateAmount(index, Number(e.target.value))}
            />
            <ButtonWrapper>
              <IconButton
                aria-label="delete"
                onClick={() => {
                  removeItem(item.id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </ButtonWrapper>
          </Wrapper>
        ))}
      </Stack>
    </div>
  );
};

export default ItemInput;
