import Product from "../Product/Product";
import './Productlist.css';

const Prodcutlist = ({productlist, incrementQuantity, decrementQuantity, addToCart, removeCart}) => {
  return (
    <div className="shop-section">
        { productlist.map((product, i) => { 
            return <Product 
                        key={i} 
                        product={product} 
                        incrementQuantity={incrementQuantity}
                        decrementQuantity={decrementQuantity} 
                        index={i}
                        addToCart={addToCart}
                        removeCart={removeCart}
                    />
         })
        }
    </div>
  );
}

export default Prodcutlist;