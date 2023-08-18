import React, { useState } from "react";
const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

const App = () => {
  const [itemArray, setItemArray] = useState(items);
  const deleteItem = (id) => {
    console.log(id);
    const updatedArray = itemArray.filter((ele) => ele.id != id);
    setItemArray(updatedArray);
  };
  return (
    <>
      <div>Hii</div>
      {itemArray.map((ele) => {
        return (
          <div key={ele.id}>
            <div>{ele.name}</div>
            <button onClick={() => deleteItem(ele.id)}> Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default App;
