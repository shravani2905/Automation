import "./Item1.css";
function Item1(prop) {
  // State to track whether the item is added to the cart

  return (
    <div className="card head">
      <img src={prop.appData.image} alt="" width="140px" />
      <div className="card-body">
        <p className="info">
          {prop.appData.title}
          <br></br>
          <span className="Heading"> Price:</span>
          {prop.appData.price}
          <br></br>
          <span className="Heading">Rating:</span>
          {prop.appData.rating.rate}
          <div>
        
          </div>
        </p>
      </div>
    </div>
  );
}
export default Item1;
