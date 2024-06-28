import React, { useState } from 'react'
import Header from './Components/Header'
import "./App.css"
import Banner from './Components/Banner'
import ProductsContainer from './Components/ProductsContainer'

//App Component that contains all components
const App = () => {
  // Initialize 'productCount' state variable to 0 and provide 'setProductCount' function to update it.
  const [productCount,setProductCount] = useState(0);
  return (
    <div className='container'>
      <Header productCount = {productCount}/>  
      <Banner/>
      <ProductsContainer setProductCount = {setProductCount}/>
    </div>
  )
}

export default App