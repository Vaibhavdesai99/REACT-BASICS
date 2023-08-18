import "./styles.css";
import React, { useEffect, useState } from "react";
export default function App() {
  const [data, setData] = useState([]);

  const getDataFromApi = async () => {
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/todos");
    const Incomingdata = await fetchData.json();
    setData(Incomingdata);
    console.log(Incomingdata);
  };

  useEffect(() => {
    getDataFromApi();
  }, []);
  // console.log("data :", data);

  const deleteItem = (id) => {
    const filteredArray = data.filter((ele) => ele.id != id);
    setData(filteredArray);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data.slice(0, 10).map((ele) => {
        return (
          <div key={ele.id}>
            <div>{ele.title}</div>
            <button onClick={() => deleteItem(ele.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
