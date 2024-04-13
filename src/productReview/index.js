import "./index.css"

const ProductReview = props => {
    const {eachReview} = props
    const{customerName,customerReview} = eachReview

    return(
        <li >
            <div className="customer-review-container">
                <img src = "/pageLogos/quote.png" alt = "quote" className = "quote-img"/>
            <p className = "font-style">"{customerReview}"</p>
            <div className = "customer-name-section">
                <img src = "/pageLogos/personicon.png" alt = "personIcon" className = "person-icon"/>
                <div >
                    <h2 className = "font-style">{customerName}</h2>
                    <img src = "/pageLogos/pngfind.com-rating-png-transparent-6687141.png" alt = "rating" className="rating-img"/>
                </div>
                    
            </div>
            </div>
        </li>   
    )
}

export default ProductReview