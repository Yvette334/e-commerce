import {useState} from "react";
function Productpro(props){
    const addtocart = () =>{
        alert (`${props.productname} was added to cart!`);
    }
    return(
        <div className="border p-4 rounded-lg shadow-md">
            <img src={props.productimage} alt={props.productname} className="w-full h-48 object-cover mb-4 rounded"/>
            <h3 className="text-lg font-semibold mb-2">{props.productname}</h3>
            <p className="text-gray-700 mb-4">${props.productprice}</p>
            <button onClick={addtocart} className="bg-black w-full text-white px-4 py-2 rounded hover:bg-blue-600">🛒Add to Cart</button>
        </div>
    )
}

function Product(){
    const pro = [
        {
             id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
  },
  {
    id: 3,
    name: "Leather Backpack",
    price: 89.99,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
  },
  {
    id: 4,
    name: "Sunglasses",
    price: 49.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 129.99,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
  },
  {
    id: 6,
    name: "Camera",
    price: 599.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
  },
  {
    id: 7,
    name: "Denim Jacket",
    price: 69.99,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: 59.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
  },
  {
    id: 9,
    name: "Laptop Stand",
    price: 39.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
  },
  {
    id: 10,
    name: "Mechanical Keyboard",
    price: 149.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
  },
  {
    id: 11,
    name: "Wallet",
    price: 34.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
  },
  {
    id: 12,
    name: "Sneakers",
    price: 99.99,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&q=80",
  },
];
    return(
        <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {pro.map(product=>{
                return <Productpro key={product.id} productimage={product.image} productname={product.name} productprice={product.price} />
            })}
            </div>
        </div>
    )}
export default Product