"use client"
import ProductCard from './ProductCard'

export default function Home() {
  const productList = [
      {
          id: '000001',
          type: 'Prebuilt PC',
          name: 'Creator RDY Y40BG201',
          cpu: 'Intel® Core™ i9-13900KF CPU',
          os: 'Windows 11 Pro',
          memory: '32GB DDR5-6000MHz RGB RAM',
          gpu: 'GeForce RTX 4090 - 24GB',
          storage: '2TB M.2 NVMe GEN4 SSD',
          image: ['https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/26779/gaming-pc-01-SLMBG221-KBM-400.png?v=822a5a78181bcb5d049c8632416573af863cdf60'],
          affirmMonthlyPay: 160,
          originalPrice: 3799,
          salePrice: 3299
      },
      {
          id: '000002',
          type: 'Prebuilt PC',
          name: 'Gaming RDY SLMBG221',
          cpu: 'Intel® Core™ i7-13700F CPU',
          os: 'Windows 11 Home',
          memory: '16GB DDR5-5200MHz RAM',
          gpu: 'GeForce RTX 4060 Ti - 8GB',
          storage: '1TB M.2 NVMe SSD',
          image: ['https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/26779/gaming-pc-01-SLMBG221-KBM-400.png?v=822a5a78181bcb5d049c8632416573af863cdf60'],
          affirmMonthlyPay: 81,
          originalPrice: 1599,
          salePrice: 1299
      },
      {
          id: '000003',
          type: 'Custom PC',
          name: 'AMD Gaming PC Configurator 4 ',
          cpu: 'AMD Ryzen™ 9 7900X CPU',
          os: 'Windows 11 Home',
          memory: '32GB DDR5-5200MHz RAM',
          gpu: 'NVIDIA GeForce RTX 4070 Ti - 12GB',
          storage: '1TB WD M.2 NVMe SSD',
          image: ['https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/25756/gaming-pc-01-H7-Flow-white-main-400.png?v=822a5a78181bcb5d049c8632416573af863cdf60'],
          affirmMonthlyPay: 111,
          originalPrice: 2589,
          salePrice: 2289
      },
      {
          id: '000004',
          type: 'Custom PC',
          name: 'AMD Gaming PC Configurator 3',
          cpu: 'AMD Ryzen™ 7 7700X CPU',
          os: 'Windows 11 Home',
          memory: '32GB DDR5-5600MHz TEAMGROUP RAM',
          gpu: 'NVIDIA GeForce RTX 4070 - 12GB',
          storage: '1TB WD M.2 NVMe SSD',
          image: ['https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/26900/gaming-pc-01-Lancool-216-white-main-400,,,.png?v=64cb5f559abaf27f57b17b6087ecfb9547b6fae5'],
          affirmMonthlyPay: 86,
          originalPrice: 1969,
          salePrice: 1769
      },
      {
          id: '000005',
          type: 'Custom PC',
          name: 'Intel Core 14th Gen Extreme Gaming PC',
          cpu: 'Intel® Core™ i9-14900KF CPU',
          os: 'Windows 11 Home',
          memory: '32GB DDR5-6000MHz TEAMGROUP RAM',
          gpu: 'NVIDIA GeForce RTX 4090 - 24GB',
          storage: '2TB WD M.2 NVMe SSD',
          image: ['https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/26936/gaming-pc-01-Lancool-216-black-main-400.png?v=822a5a78181bcb5d049c8632416573af863cdf60'],
          affirmMonthlyPay: 177,
          originalPrice: 3949,
          salePrice: 3649
      },
      {
          id: '000006',
          type: 'Prebuilt PC',
          name: 'RDY Fractal BG001',
          cpu: 'Intel® Core™ i7-13700KF CPU',
          os: 'Windows 11 Home',
          memory: '32GB DDR5-6000MHz RAM',
          gpu: 'GeForce RTX 4070 - 12GB',
          storage: '2TB M.2 NVMe SSD',
          image: ['https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/26934/gaming-pc-01-FractalBG001-main-400.png?v=64cb5f559abaf27f57b17b6087ecfb9547b6fae5'],
          affirmMonthlyPay: 87,
          originalPrice: 2149,
          salePrice: 1799
      },
      {
          id: '000007',
          type: 'Custom PC',
          name: 'Intel Gaming PC Configurator 2',
          cpu: 'Intel® Core™ i5-13600KF CPU',
          os: 'Windows 11 Home',
          memory: '32GB DDR5-6000MHz TEAMGROUP RAM',
          gpu: 'NVIDIA GeForce RTX 4060 Ti - 8GB',
          storage: '1TB WD M.2 NVMe SSD',
          image: ['https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/25756/gaming-pc-01-H7-Flow-white-main-400.png?v=822a5a78181bcb5d049c8632416573af863cdf60'],
          affirmMonthlyPay: 97,
          originalPrice: 1709,
          salePrice: 1559
      },
      {
          id: '000008',
          type: 'Custom PC',
          name: 'Intel Gaming PC Configurator 4',
          cpu: 'Intel® Core™ i9-13900KF CPU',
          os: 'Windows 11 Home',
          memory: '32GB DDR5-6000MHz TEAMGROUP RAM',
          gpu: 'NVIDIA GeForce RTX 4070 Ti - 12GB',
          storage: '1TB WD M.2 NVMe SSD',
          image: ['https://content.ibuypower.com/cdn-cgi/image/width=640,format=auto,quality=75/https://content.ibuypower.com/Images/Components/25755/gaming-pc-01-H7-Flow-Black-main-400.png?v=64cb5f559abaf27f57b17b6087ecfb9547b6fae5'],
          affirmMonthlyPay: 114,
          originalPrice: 2649,
          salePrice: 2349
      }
  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-gray-900">
      <div className="container flex flex-col items-center justify-center">
          <p className="text-3xl font-bold mb-2">Best Seller Gaming PC</p>
          <p className="text-xl font-semibold mb-2">Prebuild & Customs</p>
      </div>
      <div className="container mx-auto mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {productList.map(product => (
                  <ProductCard key={product.id} product={product} />
              ))}
          </div>
      </div>
    </main>
  )
}
