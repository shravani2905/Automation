import Item from "../Item/Item"
import "./Productsimg.css"
function Productsimg(){
    let appData = [
        {
          id: 1,
          title: "Notebook - Set of 3",
          price: 12.99,
          description: "High-quality notebooks for all your writing needs.",
          category: "stationary",
          image: "https://images.meesho.com/images/products/85009678/acimt_512.webp",
          rating: {
            rate: 4.5,
            count: 80,
          },
        },
        {
          id: 2,
          title: "Pen Set - Pack of 10",
          price: 8.99,
          description: "Premium pens for a smooth writing experience.",
          category: "stationary",
          image: "https://www.tvmkart.com/wp-content/uploads/2020/07/Cello-Techno-Tip-Ball-Pen-Blue-10-Pens-Pack.jpg",
          rating: {
            rate: 4.8,
            count: 120,
          },
        },
        {
          id: 3,
          title: "Desk Organizer",
          price: 29.99,
          description: "Keep your desk tidy with this stylish organizer.",
          category: "stationary",
          image: "https://paperit.in/cdn/shop/products/deskstorageboxset2.jpg?v=1644304225&width=2048",
          rating: {
            rate: 4.2,
            count: 150,
          },
        },
        {
          id: 4,
          title: "Sticky Notes - Pack of 100",
          price: 5.99,
          description: "Colorful sticky notes for reminders and notes.",
          category: "stationary",
          image: "https://4.imimg.com/data4/PP/SB/MY-197076/sticky-notes-500x500.jpg",
          rating: {
            rate: 4.6,
            count: 200,
          },
        },
        {
          id: 5,
          title: "Markers - Set of 12",
          price: 14.99,
          description: "Vibrant markers for creative projects and highlighting.",
          category: "stationary",
          image: "https://m.media-amazon.com/images/I/81qZpWvz8pL._AC_UF350,350_QL80_.jpg",
          rating: {
            rate: 4.3,
            count: 100,
          },
        },
        {
          id: 6,
          title: "Paper Clips - Assorted Colors",
          price: 3.49,
          description: "Fun and functional paper clips to organize your documents.",
          category: "stationary",
          image: "https://5.imimg.com/data5/UH/JG/MY-4558736/1.jpg",
          rating: {
            rate: 4.0,
            count: 90,
          },
        },
        {
          id: 7,
          title: "Calculator - Scientific",
          price: 19.99,
          description: "A reliable scientific calculator for math and science tasks.",
          category: "stationary",
          image: "https://www.casio.com/content/dam/casio/product-info/locales/us/en/calc/product/scientific/F/FX/FX2/FX-260SOLARII/us-assets/FX-260SOLARII.png.transform/main-visual-sp/image.png",
          rating: {
            rate: 4.7,
            count: 120,
          },
        },
        {
          id: 8,
          title: "Drawing Pad - A4 Size",
          price: 7.99,
          description: "Perfect for sketching, doodling, and artistic creations.",
          category: "stationary",
          image: "https://m.media-amazon.com/images/I/71lDJVc9gpL._AC_UF1000,1000_QL80_.jpg",
          rating: {
            rate: 4.5,
            count: 80,
          },
        },
      ];
      
    
return(
<div className="container">
<div className="row1">
    <div className="col-3">
<Item appData={appData[0]}/>
    </div>
    <div className="col-3">
    <Item appData={appData[1]}/>
    </div>
    <div className="col-3">
    <Item appData={appData[2]}/>
    </div>
    <div className="col-3 ">
    <Item appData={appData[3]}/>
    </div>
</div>
<div className="row2">
<div className="col-3 ">
    <Item appData={appData[4]}/>
    </div>
    <div className="col-3 ">
    <Item appData={appData[5]}/>
    </div>
    <div className="col-3 ">
    <Item appData={appData[6]}/>
    </div>
    <div className="col-3 ">
    <Item appData={appData[7]}/>
    </div>

</div>
</div>

)
}
export default Productsimg;


