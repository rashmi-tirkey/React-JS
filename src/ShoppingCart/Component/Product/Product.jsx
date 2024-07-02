import "./Product.css";

const Product = 
({
    product,
    incrementQuantity, 
    decrementQuantity, 
    index, 
    addToCart, 
    removeCart
}) => {
    
    return ( 
        <div className="product-box">
            <div className="product-content">
                <h2 className="product-name">{product.name}</h2>
                <img src={product.image} alt="mobile" className="product-img"/>
                <span className="product-cart">
                    <p>{product.price}</p> 
                    <button className="btn-plus" onClick={()=>decrementQuantity(index)}>-</button>
                    <p>{product.quantity}</p> 
                    <button className="btn-minus" onClick={()=>incrementQuantity(index)}>+</button>
                    <p>{product.quantity*product.price}</p> 
                </span>
            </div>
            <span className="product-cart-btn">
                <button className="btn-cart cart" onClick={()=>addToCart(index)}>Add to cart</button> 
                <button className="btn-cart remove" onClick={()=>removeCart(index)}>Remove</button>
            </span>
        </div> 
    )
}

export default Product