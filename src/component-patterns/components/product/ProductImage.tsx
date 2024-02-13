import { useContext } from "react";
import { productContext } from "../ProductCard";
import styles from "../../styles/styles.module.css";
import noImage from "../../assets/no-image.jpg";
export interface Props {
  img? : string;
  className?: string;
  style?: React.CSSProperties;
}
export const ProductImage = ({img = '', className= '', style}: Props) => {
  const { product } = useContext(productContext);
  const imgToShow: string =  (img) ? img : (product.img || '');
  return (
    <img
      style={ style }
      className={`${styles.productImg} ${className}`} src={imgToShow ? imgToShow : noImage}
      alt="Product" />
  )
}
