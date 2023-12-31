'use client'
import React from 'react'
import { useState, useEffect } from 'react'

const paginationBtn = ({productList, updateProductList}) => {
    const productListLength = productList.length
    const [startIndex, setStartIndex] = useState(0)
    const MAX_ITEMS = 4
  
    const goToPreviousPage = () => {
      if (startIndex > 0) {
        setStartIndex(startIndex - MAX_ITEMS)
      }
    }
  
    const goToNextPage = () => {
      if (startIndex + MAX_ITEMS < productListLength) {
        setStartIndex(startIndex + MAX_ITEMS)
      }
    }

    useEffect(() => {
        const displayedProducts = productList.slice(startIndex, startIndex + MAX_ITEMS)
        updateProductList(displayedProducts)
      }, [startIndex])
  
  return (
    <div className='flex justify-center my-4'>
        <div className="mx-2 p-2 rounded-sm bg-gray-300 hover:bg-gray-200"><button onClick={goToPreviousPage} disabled={startIndex === 0}>Prev</button></div>
        <div className="mx-2 p-2 rounded-sm bg-gray-300 hover:bg-gray-200"><button  onClick={goToNextPage} disabled={startIndex + MAX_ITEMS >= productListLength}>Next</button></div>
    </div>
  )
}

export default paginationBtn