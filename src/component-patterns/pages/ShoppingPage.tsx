import { ProductCard } from "../components";
import { ProductImage,ProductTitle,ProductButtons } from "../components/product";
import '../styles/custom-styles.css'
import { products } from '../data/products'
import { useShoppingCart } from "../hooks";

const product = products[0]

export const ShoppingPage = () => {


  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        {/* <ProductCard
          className="bg-dark text-white"
          product={product1}>
          <ProductCard.Image className="custom-image"/>
          <ProductCard.Title className="text-bold"/>
          <ProductCard.Buttons className="custom-buttons"/>
        </ProductCard> */}

        
          <ProductCard key={product.id}
            className="bg-dark text-white"
            product={product}
            initialValues={{
              count: 4,
              maxCount: 10
            }}
            >
            {
              ({reset, count, increaseBy, isMaxCountReached}) => (
                <>
                  <ProductImage className="custom-image"/>
                  <ProductTitle className="text-bold"/>
                  <ProductButtons className="custom-buttons"/>

                  <button onClick={reset}>Reset</button>
                  <button onClick={() => increaseBy(-2)}>-2</button>
                  {
                    !isMaxCountReached && <button onClick={() => increaseBy(2)}>+ 2</button>
                  }
                  <br />
                  <span>{count}</span>
                </>
              )
            }
          </ProductCard>

      </div>

    </div>
  )
}
