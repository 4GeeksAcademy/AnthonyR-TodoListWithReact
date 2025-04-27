import React from "react";

//create your first component
const Title = (props) => {
  let titleStyle = {
    fontSize: "120px",
    fontWeight: "100",
    color: "#e8dedf",
  };

  return (
    <>
      <h1 className="text-center" style={titleStyle}>
        {props.title}
      </h1>
    </>
  );
};

export default Title;
