import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import ProductCard from './ProductCard'
import PaginationBtn from './PaginationBtn'
import { useRef } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const Slider = ({ productList, isMobile}) => {
  const slidesPerView = isMobile ? 1 : 4
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  return (
    <div>
      {!isMobile && (
          <PaginationBtn prevRef={prevRef} nextRef={nextRef}/>
      )}
      <Swiper 
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView= {slidesPerView}
        pagination={{ clickable: true }}
        
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
      >
        {productList.map((product) => (
          <SwiperSlide key={product.id}>
            <div>
              <ProductCard product={product} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider