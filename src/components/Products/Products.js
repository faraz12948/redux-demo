import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Product/Product';
import {setProducts} from '../../redux/actions/productAction'
const Products = () => {
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>dispatch(setProducts(data)));

    },{})
    return (
        <div>
            <Product></Product>
           
            
        </div>
    );
};

export default Products;