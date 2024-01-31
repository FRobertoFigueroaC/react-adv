import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductTitle,ProductImage,ProductButtons } from "./product";
import { ProductCardHOCProps } from "../interfaces/product.interface";
// export * from './ProductCard'

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons
})

export default ProductCard;