import React,{ useState } from 'react';
import Navbar from './ShoppingCart/Component/Navbar/Navbar';
import Prodcutlist from './ShoppingCart/Component/ProductList/Productlist';
import  productlist  from './ShoppingCart/Constant/constant.json';
import Footer from './ShoppingCart/Component/Footer/Footer';

function App() {
  const [quantity, setQuantity] = useState(productlist);
  const [cart, setCart] = useState(0);

  const incrementQuantity = (index) => {
    const newQuantity = [...quantity];
    
    newQuantity[index].quantity ++;
    setQuantity(newQuantity);
  }

  const decrementQuantity = (index) => {
    const newQuantity = [...quantity]

    if(newQuantity[index].quantity > 0){
      newQuantity[index].quantity --;
    }else{
      newQuantity[index].quantity = 0;
    }
    setQuantity(newQuantity);
  }

 const addToCart = (name, price) => {
  const newQuantity = [...quantity];
      newQuantity.push({
        price: price,
        name: name,
        quantity: 0
      });
    setQuantity(newQuantity);
    setCart(cart + 1);
 }

  const removeCart = (index) => {
    const newQuantity = [...quantity];
    newQuantity.splice(index, 1);
    setQuantity(newQuantity);
    setCart(cart - 1);
  }

  return (
    <div className="App">
      <Navbar cart={cart}/>
      <Prodcutlist 
        productlist={productlist} 
        incrementQuantity={incrementQuantity} 
        decrementQuantity={decrementQuantity}
        addToCart={addToCart}
        removeCart={removeCart}
      />
      <Footer />
    </div>
  );
}

export default App;
