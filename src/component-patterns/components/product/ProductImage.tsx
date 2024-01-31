import { useContext } from "react";
import { productContext } from "../ProductCard";
import styles from "../../styles/styles.module.css";
import noImage from "../../assets/no-image.jpg";

export const ProductImage = ({img = ''}) => {
  const { product } = useContext(productContext);
  const imgToShow: string =  (img) ? img : (product.img || '');
  return (
    <img className={styles.productImg} src={imgToShow ? imgToShow : noImage} alt="Product" />
  )
}
