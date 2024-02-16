import { useState } from "react";

import { Product } from "../interfaces/product.interface";

interface CartItem extends Product  {
  count: number
}

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{[key:string]: CartItem}>({});

  const onProductCountChange = ({count, product}: {count: number, product: Product}) => {
    
    setShoppingCart(oldShoppingCart => {
       const productInCart: CartItem = oldShoppingCart[product.id] || {...product, count: 0}
       if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart, [productInCart.id]: productInCart
        }
       }
       // delete product
       const {[product.id]: toDelete, ...rest} = oldShoppingCart
       return {...rest}
    });
    
  }


  return {
    shoppingCart,
    onProductCountChange
  }
}
