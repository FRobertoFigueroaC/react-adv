import { ProductCard } from "../components";
import { ProductImage,ProductTitle,ProductButtons } from "../components/product";
import '../styles/custom-styles.css'
import { products } from '../data/products'
import { useShoppingCart } from "../hooks";


export const ShoppingPage = () => {

  const {shoppingCart, onProductCountChange} = useShoppingCart();

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

        {
          products.map(product => (
          <ProductCard key={product.id}
            className="bg-dark text-white"
            product={product}
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
            >
            <ProductImage className="custom-image"/>
            <ProductTitle className="text-bold"/>
            <ProductButtons className="custom-buttons"/>
          </ProductCard>
          ))
        }

      </div>

      <div className="shopping-cart">
        {
          Object.values(shoppingCart).map(cartItem => (
          <ProductCard key={cartItem.id}
              className="bg-dark text-white"
              style={{
                width: '100px'
              }}
              value={cartItem.count}
              product={cartItem}
              onChange={onProductCountChange}>
              <ProductImage className="custom-image"/>
              <ProductTitle className="text-small"/>
              <hr />
              <ProductButtons className="custom-buttons"/>
            </ProductCard>
          ))
        }
      </div>
    </div>
  )
}
