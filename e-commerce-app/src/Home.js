import React,{useState,useEffect} from 'react'
import ReactModal from 'react-modal'
import Product from './Product';
import ProductDesc from "./ProductDesc"
import "./home.css"

function Home() {

    const [productArray, setProductArray] = useState([]);
    const [openModal,setOpenModal]=useState(false);
    const [prodId, setProdId] = useState(null);
    
    useEffect(()=>setProductArray([
        {
            id:0,
            image: "https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SX679_.jpg",
            name: "iPhone",
            price: "$650",
            description: "this is description of Iphone"
        },
        {
            id:1,
            image: "https://images-na.ssl-images-amazon.com/images/I/71n6gXQn79L._SL1500_.jpg",
            name: "Peanut Butter",
            price: "7$",
            description: "This is the description of Peanut Butter"
        },
        {
            id:2,
            image: "https://images-na.ssl-images-amazon.com/images/I/51RXzjrUmkL._SL1000_.jpg",
            name: "Mug",
            price: "65$",
            description: "This is the description of Mug"
        },
        {
            id:3,
            image: "https://images-na.ssl-images-amazon.com/images/I/416dD5gUvOL.jpg",
            name: "Specs",
            price: "45$",
            description: "This is the description of Specs"
        },
        {
            id:4,
            image: "https://images-na.ssl-images-amazon.com/images/I/61RyEv5mnNL._SL1100_.jpg",
            name: "Echo dot",
            price: "88$",
            description: "This is the description of EchoDot"
        }
        
    ]),[]
    );
    // console.log(productArray);

    return (
        <div className="home">
            {/* <h2> Home </h2> */}

            <div className="home__banner">
                <img 
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Jewellery/GW/unrec2/PC-BUnk-1500-600._CB415511219_.jpg" 
                    alt="banner"
                    width="100%"
                />
            </div>
            <div className="home__product" >
                {
                    productArray.map(product=>{
                        return (
                            <div className="home__productSpecific" onClick={()=>{
                                setOpenModal(true)
                                setProdId(product.id)
                            }}>
                            <Product
                                image={product.image}
                                name={product.name}
                                price={product.price}
                            />
                             
                            </div>
                        )
                        }
                         
                        )
                }
            </div>
            
            
                <ReactModal
                    isOpen={openModal}
                    onRequestClose={()=>setOpenModal(false)}
                    onAfterClose={()=>setOpenModal(false)}
                    shouldCloseOnOverlayClick={true}
                >
                    <div className="home__productModal">
                        <ProductDesc productArray={productArray} prodId={prodId}/>
                        <button onClick={()=>setOpenModal(false)}>CLOSE</button>
                    </div>
                    
                </ReactModal>
                
            
            
        </div>
        
    )
}
export default Home;