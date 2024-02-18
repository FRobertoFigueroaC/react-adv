
import { createContext, ReactElement } from "react";

import { useProduct } from "../hooks";

import { InitialValues, onChageArgs, Product,ProductCartHandlers,ProductContextProps } from '../interfaces/product.interface'
import styles from "../styles/styles.module.css";

export const productContext = createContext({} as ProductContextProps);

const {Provider} = productContext;

export interface Props {
  product: Product;
  children:(args: ProductCartHandlers) => JSX.Element;
  // children?:ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChageArgs) => void;
  value?: number;
  initialValues?: InitialValues
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value, 
  initialValues
}: Props) => {

  const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProduct({ onChange, product, value, initialValues } );

  return (
    <Provider value={{
      counter, increaseBy, product, maxCount
    }}>
      <div 
        style={ style }
        className={ `${styles.productCard} ${className}` }>
        { 
          children ({
            count: counter,
            isMaxCountReached,
            maxCount: initialValues?.maxCount,
            reset,
            product,
            increaseBy
          })
        }
      </div>
    </Provider>
  )
}
