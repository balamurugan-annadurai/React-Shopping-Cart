import React from 'react'
import Card from './Card'
//Importing product images to pass to Card Component
import product1 from '../assets/product.png'
import product2 from "../assets/product2.jpg"
import product3 from "../assets/product3.jpg"
import product4 from "../assets/product4.jpg"
import product5 from "../assets/product5.jpg"
import product6 from "../assets/product6.jpg"
///////////////////////////////////////////////////

//ProductsContainer Component
const ProductsContainer = ({setProductCount}) => {
  return (
        <div className="row product-container g-0 d-flex justify-content-center">
            
            <Card setProductCount = {setProductCount} img = {product1} title={'Apple watch'} price={'$450'}/>
            <Card  setProductCount = {setProductCount} img = {product2} title={'Samsung watch'} price={'$350'}/>
            <Card setProductCount = {setProductCount} img = {product5} title={'Apple watch'} price={'$500'}/>
            <Card setProductCount = {setProductCount} img = {product4} title={'Apple watch'} price={'$250'}/>
            <Card  setProductCount = {setProductCount} img = {product3} title={'Samsung watch'} price={'$600'}/>
            <Card setProductCount = {setProductCount} img = {product6} title={'Apple watch'} price={'$450'}/>
            
        </div>
  )
}

export default ProductsContainer