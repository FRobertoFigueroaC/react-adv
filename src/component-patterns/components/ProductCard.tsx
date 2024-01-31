
import { createContext } from "react";
import { useProduct } from "../hooks";
import {ProductCardProps,ProductContextProps} from '../interfaces/product.interface'
import styles from "../styles/styles.module.css";

export const productContext = createContext({} as ProductContextProps);

const {Provider} = productContext;

export const ProductCard = ({children, product}: ProductCardProps) => {

  const {counter, increaseBy} = useProduct();

  return (
    <Provider value={{
      counter, increaseBy, product
    }}>
      <div className={styles.productCard}>
        {children}
      </div>
    </Provider>
  )
}
