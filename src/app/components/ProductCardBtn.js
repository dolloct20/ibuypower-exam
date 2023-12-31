import React from 'react'

const ProductCardBtn = ({product}) => {
  const buttonText = product.type === 'Prebuilt PC' ? 'Buy Now' : 'Customized'
  
  return (
    <div className="border border-product-btn-red hover:bg-product-btn-red hover:text-white text-product-btn-red font-normal py-1 px-4 rounded-full">
        {buttonText}
    </div>
  )
}

export default ProductCardBtn