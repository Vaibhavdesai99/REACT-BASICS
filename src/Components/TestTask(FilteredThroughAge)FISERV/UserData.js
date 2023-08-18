import React from "react";

const UserData = (props) => {
  return (
    <div>
      {props.incomingData.map((ele) => {
        return (
          <div key={ele.id}>
            <span>{ele.name}</span>
            <span>{ele.age}</span>
          </div>
        );
      })}
    </div>
  );
};

export default UserData;
