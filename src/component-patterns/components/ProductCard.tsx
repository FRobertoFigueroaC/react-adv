
import { createContext, ReactElement } from "react";

import { useProduct } from "../hooks";

import { Product,ProductContextProps } from '../interfaces/product.interface'
import styles from "../styles/styles.module.css";

export const productContext = createContext({} as ProductContextProps);

const {Provider} = productContext;

export interface Props {
  product: Product;
  children?:ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}

export const ProductCard = ({children, product, className, style}: Props) => {

  const {counter, increaseBy} = useProduct();

  return (
    <Provider value={{
      counter, increaseBy, product
    }}>
      <div 
        style={ style }
        className={ `${styles.productCard} ${className}` }>
        {children}
      </div>
    </Provider>
  )
}
