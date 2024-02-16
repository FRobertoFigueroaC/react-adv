
import { createContext, ReactElement } from "react";

import { useProduct } from "../hooks";

import { onChageArgs, Product,ProductContextProps } from '../interfaces/product.interface'
import styles from "../styles/styles.module.css";

export const productContext = createContext({} as ProductContextProps);

const {Provider} = productContext;

export interface Props {
  product: Product;
  children?:ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChageArgs) => void;
  value?: number;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value
}: Props) => {

  const {counter, increaseBy} = useProduct({ onChange, product, value } );

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
