
import { useDispatch } from 'react-redux'
import Button from 'components/ui/Button'
import './styles.scss'

import { addProduct, reduceProduct } from 'features/Product/productSlice/productSlice'

const ProductCard = ({ product,setProductBuy,productBuy,selectProducts }) => {

  const dispatch = useDispatch()

  return (
    <div className='product-card'>
        <div className='product-card__top'>
             <img src={product?.image_url} alt='chimp' />
        </div>
        <div className='product-card__texts'>
           <h3>{product?.title}</h3>
           <p>{product?.description}</p>
        </div>
        <div className='product-card__bottom'>
            <span>цена: {selectProducts[product?.id]?.selectProductCost ? selectProducts[product?.id]?.selectProductCost : product?.price}</span>
            {!productBuy?.includes(product?.id) ? <Button className='button-buy' onClick={() => setProductBuy([...productBuy,product?.id])}>купить</Button>
           :  <div className='product-card__bottom-buy'>
                <Button
                 className='button-minus'
                 onClick={()=> dispatch(reduceProduct(selectProducts[product?.id]?.selectProductCost ?
                  {productId:product?.id,productPrice:product?.price} : {}))}
                 >-</Button>
                <span>{selectProducts[product?.id]?.selectProductCost ? selectProducts[product?.id]?.selectProductCost /  product?.price : 0}</span>
                <Button 
                className='button-plus' 
                onClick={()=> dispatch(addProduct({productId:product?.id,productPrice:product?.price}))}
                >+</Button>
            </div>
            }
        </div>
    </div>
  )
}

export default ProductCard