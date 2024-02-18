
import { Props as ProductCardProps } from '../components/ProductCard'
import { Props as PropsTitle} from '../components/product/ProductTitle';
import { Props as PropsImage} from "../components/product/ProductImage";
import { Props as PropsButtons} from "../components/product/ProductButtons";

export interface Product {
  id:string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  product: Product,
  increaseBy: (value:number) => void;
  counter: number;
  maxCount?: number
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props:PropsTitle) => JSX.Element;
  Image: (Props: PropsImage) => JSX.Element;
  Buttons: (Props: PropsButtons) => JSX.Element;
}

export interface onChageArgs {
  product: Product;
  count: number
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCartHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}
