import React from "react";

//create your first component
const Card = (props) => {
  let secondCardStyles = {
    margin: "auto",
    marginTop: "-15px",
    width: "34.5rem",
    height: "20px",
    zIndex: "-1",
    border: "1px solid rgba(0, 0, 0, 0.175)",
    background: "white",
    borderRadius: "0",
    boxShadow: "0px 0px 5px 1px #cbcbcb",
  };

  let thirdCardStyles = {
    margin: "auto",
    marginTop: "-15.5px",
    width: "34rem",
    height: "20px",
    zIndex: "-2",
    border: "1px solid rgba(0, 0, 0, 0.175)",
    background: "white",
    borderRadius: "0",
    boxShadow: "0px 0px 5px 1px #cbcbcb",
  };

  return (
    <>
      <div className="card" style={props.cardStyle}>
        <ul
          className="list-group list-group-flush"
          style={{ color: "#797979" }}
        >
          <li className="list-group-item" style={{ color: "#797979" }}>
            An item
          </li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-footer">Card footer</div>
      </div>
      <div className="card" style={secondCardStyles}></div>
      <div className="card" style={thirdCardStyles}></div>
    </>
  );
};

export default Card;
