import Nav from "../Nav/Nav"
import Productsimg  from "../Productsimg/Productsimg";
import {useState} from "react"
import "./StudentPage.css"
function StudentPage(){
    const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

    return (

        <div>
<Nav cartItems={cartItems} />
      <Productsimg addToCart={addToCart} />
      
        </div>
    )
}
export default StudentPage;
