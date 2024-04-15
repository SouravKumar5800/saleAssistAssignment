import {Component} from "react"
import "../src/App.css"
import axios from 'axios'
import ProductCard  from "./productReview/index"


class Ecommerce extends Component{
  state = {
    allProducts : []
  }

  componentDidMount(){
    this.getProduct()
  }


  getProduct = async() => {
      const response = await axios.get("https://fakestoreapi.com/products")
      const data = response.data
      const filteredData = data.map(eachProduct => ({
            productId : eachProduct.id,
            productName :eachProduct.title,
            productImg:eachProduct.image,
  }))
  this.setState({allProducts:filteredData})
  }


  render(){
    const{allProducts} = this.state
    return(
    <div className = "bg-container">
        <nav>
            <img src = "/pageLogos/TANN TRIM.png" alt = "pagelogo" className = "logo-mobile-view"/>
            <img src = "/pageLogos/navbar options.png" alt = "options" className="nav-option-mobile-view"/>
        </nav>
        <ul>
            <button><li>Bags</li></button>
            <button><li>Travel</li></button>
            <button><li>Accesories</li></button>
            <button><li>Gifting</li></button>
            <button><li>Jewelery</li></button>    
        </ul> 
        <div className = "category-menu-conatiner">
            <img src = "/pageLogos/category.png" alt = "category-img" className = "category-mobile-view"/>
        </div>
        <div>
            <div className = "filter-section">
              <p className = "font-style">Bags . Bagpacks</p>
              <div>
                <p className = "font-style">13 products</p>
                <img src = "/pageLogos/sendtoCart.png" alt = "sendToCart"/>
              </div>
            </div>
            <ul className = "product-container">
            {allProducts.map(eachProduct => (
                <ProductCard eachProduct = {eachProduct} key = {eachProduct.productId}/>
            ))  
            }
            </ul>
        </div> 
            
    </div>
  )}
}

export default Ecommerce;
