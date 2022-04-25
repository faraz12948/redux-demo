import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Product = () => {
    const products = useSelector((state)=>state.allProducts.products);
    const renderProducts = products.map(product=>{
        const {id,name} = product;
        return (
            
                
                <div style={{margin:'2px solid black'}}>
                <Link to={`productDetail/${id}`}>
                <h2>{name}</h2>
               
               </Link>
                
                
                
                </div>
            

        );
    })  
    console.log(renderProducts)  
    return (
        <div>
            {renderProducts}
            
            
        </div>
    );
};

export default Product;