
import "./Item.css";

function Item(prop) {
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
            <button
              className="btn cart btn-primary display-5"
            >Add to Cart
            </button>
          </div>
        </p>
      </div>
    </div>
  );
}
export default Item;
