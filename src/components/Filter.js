import React from "react";

const Filter = (props) => {
  return (
    <section>
      <h3>Filter by sex:</h3>
      <label className="container">All</label>
      <input
        type="radio"
        defaultChecked="checked"
        name="radio"
        value="all"
        onChange={props.filterSex}
      ></input>
      <label className="container">Female</label>
      <input
        type="radio"
        name="radio"
        value="female"
        onChange={props.filterSex}
      ></input>
      <label className="container">Male</label>
      <input
        type="radio"
        name="radio"
        value="male"
        onChange={props.filterSex}
      ></input>
    </section>
  );
};

export default Filter;
