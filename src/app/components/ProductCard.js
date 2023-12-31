'use client'
import { useMemo } from 'react'
import AffirmLogo from '../images/icon-affirm.svg'
import ProductBtn from '../components/ProductCardBtn'

const ProductCard = ({ product }) => {
    const discount = useMemo(() => product.originalPrice - product.salePrice, [product.originalPrice, product.salePrice])
    const getProductTypeTagClass = (type) => {
        let result = ''
        if (type === 'Prebuilt PC') {
            result = 'border border-blue-500 text-blue-500'
        } else {
            result = 'border border-pink-500 text-pink-500'
        }
        return result
    }
    return (
        <div className="container rounded-xl shadow-xl">
            <div className="bg-white p-6" style={{ minHeight: '635px' }}>
              <div className={`w-fit font-semibold py-1 px-3 rounded-full text-sm mr-2 mb-2 ${getProductTypeTagClass(product.type)}`}>
                {product.type}
              </div>
              <div className='flex flex-col justify-center'>
                <img src={product.image} alt={product.name} />
                <div className='flex justify-center mt-4'>
                  <p className="text-xl font-semibold">{product.name}</p>
                </div>
                <div className="flex text-md text-gray-700 justify-center mt-4">
                  <ul className='list-disc px-4'>
                    <li>{product.cpu}</li>
                    <li>{product.os}</li>
                    <li>{product.memory}</li>
                    <li>{product.gpu}</li>
                    <li>{product.storage}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-product-card-gray p-6 flex flex-col">             
                <div className="w-fit bg-product-btn-red text-white font-semibold py-1 px-3 rounded-full text-sm mr-2 mb-2">
                    SAVE ${discount.toLocaleString()}
                </div>          
                <div className='flex items-baseline'>
                  <span className='text-3xl font-bold'>${product.salePrice.toLocaleString()}</span>
                  <span className='text-gray-500 line-through ml-4'>${product.originalPrice.toLocaleString()}</span>
                </div>
              <div className='flex pt-1 items-center'>
                <span>Starting at ${product.affirmMonthlyPay.toLocaleString()}/mo with</span>
                <img width='55' height='20' src={AffirmLogo.src}/>
              </div>
              <div className='flex justify-between mt-6'>
                <div className='flex flex-col'>
                  <p className='font-bold'>Free Shipping</p>
                  <p>Estimate Ship By</p>
                  <p className='text-gray-600'>01/16/2024</p>
                </div>
                <div className='flex items-center'>
                  <ProductBtn key={product.id} product={product} />
                </div>
              </div>
            </div>
        </div>
    )
  }

  export default ProductCard