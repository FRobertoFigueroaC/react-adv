import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChageArgs } from "../interfaces/product.interface";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChageArgs)=> void;
  value?: number;
  initialValues?: InitialValues
}

export const useProduct = ({onChange, product, value = 0, initialValues}: useProductArgs) => {

  const [counter, setCounter] = useState(initialValues?.count || value);

  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0)
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount)
    }
    setCounter(newValue)
    onChange && onChange({ count: newValue, product});
  }

  useEffect(() => {
    if (isMounted.current) {
      setCounter(value)
    } return 
  },[value]);

  useEffect(() => {
    isMounted.current = true
  }, [])

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  return {
    counter,
    increaseBy,
    isMaxCountReached: (!!initialValues?.maxCount && counter == initialValues.maxCount),
    maxCount: initialValues?.maxCount,
    reset
  }
}
