import React from "react";

const RenderList = (props) => {
  const deleteItem = (ids) => {
    props.ondeletepass(ids);
  };

  return (
    <>
      List
      {props.onPassData.map((ele) => {
        return (
          <div key={ele.id}>
            <div>
              {ele.name}-{ele.surName}--{ele.salary}
              <button onClick={() => deleteItem(ele.id)}>Deelte</button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default RenderList;
