import React, { useState } from "react";
import RenderList from "./RenderList";

let Data = [
  { id: 1, name: "Akash", surName: "desai", salary: 100000 },
  { id: 2, name: "Balu", surName: "patil", salary: 200 },
  { id: 3, name: "Chandu", surName: "Mulik", salary: 30000 },
];
const Salary = () => {
  const [userData, setuserData] = useState(Data);

  const sortedData = userData.sort((a, b) => b.salary - a.salary);

  const filterDataonDelete = (incomingId) => {
    const deleteFilter = userData.filter((item) => item.id !== incomingId);

    setuserData(deleteFilter);
  };

  return (
    <>
      <RenderList onPassData={sortedData} ondeletepass={filterDataonDelete} />
    </>
  );
};

export default Salary;
