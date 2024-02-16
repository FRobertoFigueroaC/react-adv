import { useEffect, useState } from "react";
import { Product, onChageArgs } from "../interfaces/product.interface";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChageArgs)=> void;
  value?: number;
}

export const useProduct = ({onChange, product, value = 0}: useProductArgs) => {

  const [counter, setCounter] = useState(value);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0)
    setCounter(newValue)
    onChange && onChange({ count: newValue, product});
  }

  useEffect(() => {
    setCounter(value)
  },[value])

  return {
    counter, increaseBy, 
  }
}
