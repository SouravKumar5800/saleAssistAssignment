import {Component} from "react"
import "../src/App.css"
import axios from 'axios'
import ProductReview  from "./productReview/index"


class Ecommerce extends Component{
  state = {
    customerReviews : []
  }

  componentDidMount(){
    this.getProduct()
  }

  getProduct = async() => {
      const response = await axios.get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
      const data = response.data.data
      const filteredData = data.map(eachReview => ({
            reviewId : eachReview.ID,
            customerName :eachReview.Name,
            customerReview:eachReview.Reviews,
  }))
  this.setState({customerReviews:filteredData})
  }


  render(){
    const{customerReviews} = this.state
    return(
    <div className = "bg-container">
        <nav>
            <img src = "/pageLogos/TANN TRIM.png" alt = "pagelogo"/>
            <img src = "/pageLogos/navbar options.png" alt = "options"/>
        </nav>
        <ul>
            <button><li>Bags</li></button>
            <button><li>Travel</li></button>
            <button><li>Accesories</li></button>
            <button><li>Gifting</li></button>
            <button><li>Jewelery</li></button>    
        </ul> 
        <div className = "category-menu-conatiner">
            <img src = "/pageLogos/category.png" alt = "category-img"/>
        </div>
        <div className="product-container">
            <div className = "filter-section">
              <p className = "font-style">Bags . Bagpacks</p>
              <div>
                <p className = "font-style">13 products</p>
                <img src = "/pageLogos/sendtoCart.png" alt = "sendToCart"/>
              </div>
            </div>
            <div className = "product">
              <img src = "/pageLogos/product1.png" alt = "products"/>
              <img src = "/pageLogos/product2.png" alt = "products"/>
            </div>
        </div> 
        <div>
          <h1 className = "font-heading">What Our Customers Say</h1>
          <ul className = "review-container">
                
            {customerReviews.map(eachReview => (
                <ProductReview eachReview = {eachReview} key = {eachReview.reviewId}/>
            ))  
            }
        </ul>
        </div>
            
    </div>
  )}
}

export default Ecommerce;
