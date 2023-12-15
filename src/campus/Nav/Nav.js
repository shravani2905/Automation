import "./Nav.css"
import { Link } from "react-router-dom";
import { useState } from "react";
function Nav(){
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
    return (
<div class="navbar">
<img src="https://png.pngtree.com/element_our/png_detail/20181227/users-vector-icon-png_295010.jpg" width="50px" alt=""  />
<h3 className=" heading">Online stationary</h3>
<div class="search">
<input
          placeholder="Search Products"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
        />
            </div>
<ul class="List">
    <li><button className="btn button">Home</button></li>
    <Link to="/print"><li><button className="btn button">PRINT</button></li></Link>
    <Link to="/cart"><li><button className="btn button">CART</button></li></Link>
    <li><button className="btn button">Logout</button></li>
</ul>
</div>
    );
}
export default Nav;

