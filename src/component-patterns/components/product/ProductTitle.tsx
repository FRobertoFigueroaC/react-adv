import { useContext } from "react";
import { productContext } from "../ProductCard";
import styles from "../../styles/styles.module.css";

export interface Props {
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductTitle = ({ title = '', className= '', style } : Props ) => {
  const { product } = useContext(productContext);
  const titleToShow: string =  (title) ? title : product.title;
  return (
    <span 
      style={ style }
      className={`${styles.productDescription} ${className}`}>
      {titleToShow}
    </span>
  )
}