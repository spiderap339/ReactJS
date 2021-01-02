import React, {useState, useEffect} from 'react'
import "./productDesc.css"

const ProductDesc = ({productArray, prodId}) => {

    const [prodDisplay, setProdDisplay] = useState({})    
    
    useEffect(() => {
        
        
            productArray.map((product) => {
                prodId === product.id ? (
                    
                            //console.log("object initialized")
                            setProdDisplay(product)    
                    
                ) : 
                (
                    console.log("not ok")
                )
            })
        }
    , [])

    
    
    return (
        <div className="productDesc">
            {/* <h1>Now Description is here...</h1> */}
            {/* <h1>{prodId}</h1> */}

            {console.log(prodDisplay)}
            
            
            {/* <div>{prodDisplay.name} </div> */}

            <div className="productDesc__image">
                <img 
                    src={prodDisplay.image}
                    alt="Image not found"
                />
            </div>
            
            <div className="productDesc__info">
                <h1>{prodDisplay.name}</h1>

                <p>{prodDisplay.description}</p>

                <h3><strong>{prodDisplay.price}</strong></h3>
            </div>

                
                
        </div>
    )
}
export default ProductDesc;