import "./index.css"

const ProductCard = props => {
    const {eachProduct} = props
    const{productName,productImg} = eachProduct
    

    return(
        <li >
            <div className="customer-review-container">
                <img src = {productImg} alt = "product" className = "product-img-property"/>
                <p className = "font-style">{productName}</p>
                <div className = "price-section">
                    <img src = "pageLogos/price.png" alt = "price" className="img-mobile-view"/>
                    <img src = "pageLogos/bag.png" alt = "bag" className="img-mobile-view"/>
                </div>    
            </div>
        </li>   
    )
}


export default ProductCard