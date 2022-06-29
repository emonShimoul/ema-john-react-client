import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = products => {
    const [cart, setCart] = useState([]);
    // console.log(cart);
    useEffect(() => {
        if(products.length){
            const savedCart = getStoredCart();
            // console.log("Saved Cart: ",savedCart);
            const storedCart = [];
            for(const key in savedCart){
                const addedProduct = products.find(product => product.key == key);
                // console.log(addedProduct);
                if(addedProduct){
                    // set quantity
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                    // console.log(storedCart);
                }
            }
            setCart(storedCart);
        }
    }, [products]);
    return [cart, setCart];
}

export default useCart;