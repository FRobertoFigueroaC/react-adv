import { ProductCard } from "../components";
import { ProductImage,ProductTitle,ProductButtons } from "../components/product";
import '../styles/custom-styles.css'
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
        <ProductCard
          className="bg-dark text-white"
          product={product}>
          <ProductCard.Image className="custom-image"/>
          <ProductCard.Title className="text-bold"/>
          <ProductCard.Buttons className="custom-buttons"/>
        </ProductCard>

        <ProductCard
          className="bg-dark text-white"
          product={product}>
          <ProductImage className="custom-image"/>
          <ProductTitle className="text-bold"/>
          <ProductButtons className="custom-buttons"/>
        </ProductCard>

        <ProductCard
          style={{
            backgroundColor: '#70D1F8'
          }}
          product={product}>
          <ProductImage 
            style={{
              padding: '10px',
              borderRadius: '20px',
              width: 'calc(100% - 20px)'
            }}/>
          <ProductTitle 
            style={{
              fontWeight: 'bold',
            }}/>
          <ProductButtons 
            style={{
              color: 'white',
              justifyContent: 'end'
            }}/>
        </ProductCard>
      </div>
    </div>
  )
}
