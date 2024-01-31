import { ProductCard } from "../components";
import { ProductImage,ProductTitle,ProductButtons } from "../components/product";

const product = {
  id: '1',
  title: 'Coffe Mug',
  img: './coffee-mug.png'
}

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
        <ProductCard product={product}>
          <ProductCard.Image/>
          <ProductCard.Title/>
          <ProductCard.Buttons/>
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage/>
          <ProductTitle/>
          <ProductButtons/>
        </ProductCard>
      </div>
    </div>
  )
}
