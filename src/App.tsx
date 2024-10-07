import React, { useState, useEffect } from "react";
import ItemInput from "./components/ItemInput";
import PeopleInput from "./components/PeopleInput";
import CalculationResult from "./components/CalculationResult";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, Container, Stack, TextField } from "@mui/material";
import { styled } from "@glitz/react";

interface Item {
  name: string;
  amountPerPerson: number;
  id: string;
}

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: "1", name: "Bröd", amountPerPerson: 1.5 },
    { id: "2", name: "Salami", amountPerPerson: 0.1 },
    { id: "3", name: "Skinka", amountPerPerson: 0.1 },
    { id: "4", name: "Juice", amountPerPerson: 0.2 },
  ]);
  const [peopleCount, setPeopleCount] = useState<number>(15);
  const [newProduct, setNewProduct] = useState<string>("");
  const [itemId, setItemId] = useState<number>(items.length + 1);
  const [inutError, setInputError] = useState<boolean>(false);

  useEffect(() => {
    // setItemId(itemId + 1);
    if (newProduct !== " " && newProduct.length !== 0) setInputError(false);
  }, [items, newProduct, itemId]);

  const updatePeopleCount = (count: number) => {
    setPeopleCount(count);
  };
  const addProductTolist = () => {
    if (newProduct.trim().length === 0) {
      setInputError(true);
    } else {
      const newItem = {
        id: `${itemId}`,
        name: `${newProduct}`,
        amountPerPerson: 1,
      };
      setItems((prevItems) => [...prevItems, newItem]);
      setNewProduct("");
    }
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    console.log("removed item with id: ", id);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addProductTolist();
    }
  };

  const Wrapper = styled.div({
    display: "flex",
    alignItems: "center",
  });

  const SubHeader = styled.h3({
    marginTop: "18px",
    marginBottom: "18px",
  });

  const ButtonWrapper = styled.div({
    marginLeft: "8px",
  });

  return (
    <Container fixed>
      <h1>Frukostkalkylator</h1>
      <PeopleInput
        peopleCount={peopleCount}
        updatePeopleCount={updatePeopleCount}
      />
      <Stack direction="column" spacing={1}>
        <ItemInput
          items={items}
          setItems={setItems}
          removeItem={(id) => {
            removeItem(id);
          }}
        />
        <SubHeader>Lägg till fler produkter</SubHeader>
        <Wrapper>
          <TextField
            label={"Lägg till vara"}
            helperText={inutError && "Rutan får inte vara tom"}
            error={inutError}
            variant={"outlined"}
            value={newProduct}
            onChange={(e) => setNewProduct(e.target.value)}
            // onKeyUp={handleKeyPress}
          />
          <ButtonWrapper>
            <IconButton onClick={addProductTolist}>
              <AddIcon />
            </IconButton>
          </ButtonWrapper>
        </Wrapper>
      </Stack>
      <CalculationResult items={items} peopleCount={peopleCount} />
    </Container>
  );
};

export default App;
