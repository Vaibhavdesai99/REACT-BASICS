import React, { useEffect, useState } from "react";

const ApiTrial = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const getData = await fetch("https://jsonplaceholder.typicode.com/todos");

    const apidata = await getData.json();
    setData(apidata);
    console.log(apidata);
  };

  useEffect(() => {
    console.log("mounting 2");
  });
  useEffect(() => {
    getData();
    console.log("component mounting ");
  }, []);
  return (
    <>
      hello there
      {data.map((ele) => {
        return (
          <div key={ele.id}>
            title : <div>{ele.title}</div>
          </div>
        );
      })}
    </>
  );
};

export default ApiTrial;
