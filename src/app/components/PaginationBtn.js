import React from 'react'

const PaginationBtn = ({ prevRef, nextRef }) => {
  return (
    <div className="flex justify-center my-4">
      <div className="mx-2 p-2 rounded-sm bg-gray-300 hover:bg-gray-200">
        <button ref={prevRef}>Prev</button>
      </div>
      <div className="mx-2 p-2 rounded-sm bg-gray-300 hover:bg-gray-200">
        <button ref={nextRef}>Next</button>
      </div>
    </div>
  )
}

export default PaginationBtn