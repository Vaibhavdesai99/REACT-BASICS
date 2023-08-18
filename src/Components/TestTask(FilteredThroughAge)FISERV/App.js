import "./styles.css";
import UserData from "./UserData";
import React, { useEffect, useState } from "react";

const data = [
  { id: 2, name: "vaibhav", age: 8 },
  { id: 3, name: "saurabh", age: 25 },
  { id: 4, name: "yash", age: 88 },
  { id: 5, name: "swati", age: 34 },
];

export default function App() {
  const [arrayData, setArrayData] = useState(data);
  const [filteredDataChild, setFilteredDataChild] = useState([]);
  const [filteredDataAdult, setFilteredDataAdult] = useState([]);
  const [filteredDataOldAge, setFilteredDataOldAge] = useState([]);

  useEffect(() => {
    setFilteredDataChild(arrayData.filter((ele) => ele.age < 10));
    setFilteredDataAdult(
      arrayData.filter((ele) => ele.age >= 10 && ele.age < 50)
    );
    setFilteredDataOldAge(arrayData.filter((ele) => ele.age >= 50));
  }, [arrayData]);

  return (
    <div className="App">
      <div>Children</div>
      <UserData incomingData={filteredDataChild} />
      <div>Adult</div>
      <UserData incomingData={filteredDataAdult} />
      <div>Old Age </div>
      <UserData incomingData={filteredDataOldAge} />
    </div>
  );
}
