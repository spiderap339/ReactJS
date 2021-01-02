import React, {useState,useEffect} from 'react'
import "./product.css";
function Product({image, name, price}) {

    const [productImage, setProductImage] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice]=useState("");
 
    

    return (
        <div className="product">
            
            {/* Image */}
            <img
                className="product__image" 
                src={image}
                alt="product_image"
            />

            {/* name */}
            <h3> {name} </h3>

            {/* price */}
            <h3>{price}</h3> 

        </div>
        
    )
}

export default Product;