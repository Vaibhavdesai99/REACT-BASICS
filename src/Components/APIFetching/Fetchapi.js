import React, { useEffect, useState } from "react";

const Fetchapi = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  //API fetching :-
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const enteredData = await response.json();
      console.log(enteredData);
      setData(enteredData);
    };
    fetchData();
  }, []);

  const searchBar = (e) => {
    setSearch(e.target.value);
  };

  //   added search bar : -
  const FilterdArray = data.filter((ele) => {
    return ele.title.toLowerCase().includes(search.toLocaleLowerCase());
  });

  const deleteItem = (id) => {
    const filter = data.filter((item) => item.id !== id);
    setData(filter);
  };
  return (
    <>
      <div>Fetchapi</div>
      <input type="text" onChange={searchBar} />
      {FilterdArray.slice(0, 10).map((ele) => {
        return (
          <div key={ele.id}>
            <div>{ele.title}</div>
            <button onClick={() => deleteItem(ele.id)}>Delete Item </button>
          </div>
        );
      })}
    </>
  );
};

export default Fetchapi;
