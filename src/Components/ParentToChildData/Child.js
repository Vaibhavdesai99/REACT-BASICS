import React from "react";

const Child = (props) => {
  console.log(props);
  return (
    <>
      <div className="Child"> I am Child : -{props.name} </div>
      <button
        onClick={() =>
          props.setName(props.name === "Vibe" ? "vaibhav" : "Vibe")
        }
      >
        Toggle Child Name
      </button>
    </>
  );
};

export default Child;
