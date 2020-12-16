import React from "react";
import Filter from "./Filter";

const Main = (props) => {
  const isModal = props.modal === true ? "background-opacity" : "";
  const items = props.animals.map((animal, index) => {
    const classItem = index === 0 || index % 2 === 0 ? "item" : "itemOdd";
    return (
      <tr
        id={animal._id_legal}
        onClick={props.toggle}
        className={classItem}
        key={animal._id_legal}
      >
        <th>{animal._id_legal}</th>
        <td>{animal.name}</td>
        <td>{animal.date_birth}</td>
        <td>{animal.age.value}</td>
        <td>{animal.genus}</td>
        <td>{animal.sex}</td>
        <td>{animal.createdAt}</td>
        <td>{animal.updatedAt}</td>
      </tr>
    );
  });
  return (
    <>
      <div className={isModal}></div>
      <Filter filterSex={props.filterSex} />
      <table summary="Animals">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Date Birth</th>
            <th>Age</th>
            <th>Genus</th>
            <th>Sex</th>
            <th>Created</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
    </>
  );
};

export default Main;
