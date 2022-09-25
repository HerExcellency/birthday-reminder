const List = ({ id, name, age, image }) => {
    //console.log(id);
    return (
      <article className="d-flex py-3 listArticle">
        <img src={image} className="img-fluid img-style-1" alt={name} />
        <div className="ms-3 mt-1">
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </article>
    );
  };
  
  export default List;
  