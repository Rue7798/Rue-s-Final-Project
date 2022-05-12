import axios from 'axios';
import { useEffect, useState } from 'react';
import './Shop.css';
import { BiShekel } from "react-icons/bi"

// productId	productImg	productType	productName	productPrice	


export function Shop() {
    const [products, setproducts] = useState([{
        productId: "",
        productImg: "",
        productType: "",
        productName: "",
        productPrice: "",
    }]);





    // use get request to post the products from the DB(get request)
    useEffect(() => {
        axios.get('http://localhost:3001/getallproducts')
            .then(products => {
                setproducts(products.data);
                console.log(products);
            });

    }, []);

    return (
        <div className='products'>
            {products && <div>
                {products.map((curr, i) => {
                    console.log(curr);
                    return <Productscard key={i}{...curr}></Productscard>;


                })}

            </div>}
        </div>
    );
}



const Productscard = (props: {

    productId: string,
    productImg: string,
    productType: string,
    productName: string,
    productPrice: string,

}) => {


    return (
        <div className='productscard'>
            <ul>
                <li style={{ fontWeight: "bold" }} className='productName'>  {props.productName} </li>
                <li> <img src={props.productImg} alt={props.productName} /></li>
                <li style={{ fontWeight: "bold" }} className='productPrice'> <BiShekel></BiShekel>{props.productPrice}</li>


                <input id={'p-' + props.productId} className='quantityinput' type="number" min="1" defaultValue="1" placeholder="Quantity" />
                <button id={props.productId} className="submitproductbtn" type="button" onClick={async (e) => {

                    console.log("Running");
                    await axios.get('http://localhost:3001/getallproducts')
                        .then(products => {

                            for (let i = 0; i < products.data.length; i++) {

                                if (parseInt((e.target as Element).id) === parseInt(products.data[i].productId)) {

                                    let data = {
                                        productId: products.data[i].productId,
                                        productImg: products.data[i].productImg,
                                        productPrice: products.data[i].productPrice,
                                        productType: products.data[i].productType,
                                        productQuantity: (document.getElementById('p-' + products.data[i].productId) as HTMLInputElement).value
                                    }

                                    console.log(data);
                                    alert("Product Added to Cart\n Product ID :" + data.productId + "\nProduct Name :" + products.data[i].productName + "\n" + "Product Quantity :" + data.productQuantity + "\n" + "Product Price :" + data.productPrice);



                                }

                            }

                        });








                }}> Add to Cart </button>

            </ul>
        </div>
    )
}


