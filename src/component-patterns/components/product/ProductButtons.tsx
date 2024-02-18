import { useContext, useCallback } from "react";
import { productContext } from "../ProductCard";
import styles from "../../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}
export const ProductButtons = ({className = '', style}: Props) => {

  //todo extraer nueva prop maxcount 

  const {increaseBy, counter, maxCount} = useContext(productContext);

  let isMaxReached = useCallback(
    () => (!!maxCount && counter == maxCount),
    [maxCount, counter],
  )
  

  return (
    <div
        style={ style } 
        className={`${styles.buttonsContainer} ${className}`}>
        <button className={styles.buttonMinus}
          onClick={() => increaseBy(-1)}>
          -
        </button>

        <div className={styles.countLabel}>{counter}</div>

        <button className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
          onClick={() => increaseBy(1)}>
          +
        </button>
    </div>
  )
}