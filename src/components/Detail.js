const Detail = (props) => {
  if (!props.modal) {
    return null;
  }
  return (
    <article className="modal">
      <h3>Id: {props.animal._id_legal}</h3>
      <h3>Name: {props.animal.name}</h3>
      <h3>Birth: {props.animal.date_birth}</h3>
      <h3>Age: {props.animal.age.value}</h3>
      <h3>Genus: {props.animal.genus}</h3>
      <h3>Sex: {props.animal.sex}</h3>
      <h4>Created: {props.animal.createdAt}</h4>
      <h4>Updated: {props.animal.updatedAt}</h4>
      <div className="close" onClick={props.closeDetail}>
        X
      </div>
    </article>
  );
};

export default Detail;
