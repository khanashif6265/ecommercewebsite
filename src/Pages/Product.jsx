import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import {useParams} from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DesriptionBox from '../Components/DescriptionBox/DesriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
     <Breadcrum product={product}/>
     <ProductDisplay product={product}/>
     <DesriptionBox/>
     <RelatedProducts/>
    </div>
  )
}

export default Product