import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  const incentives = [
    {
      name: 'Free Shipping',
      description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
    },
    {
      name: '24/7 Customer Support',
      description: 'Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
    },
    {
      name: 'Fast Shopping Cart',
      description: "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg',
    },
  ]
  const categories = [
    {
      name: 'Smartphones',
      href: '/products/smartphones',
      imageSrc: 'https://m-cdn.phonearena.com/images/article/64576-wide-two_1200/The-Best-Phones-to-buy-in-2023---our-top-10-list.jpg',
    },
    {
      name: 'Smartwatches',
      href: '/products/smartwatches',
      imageSrc: 'https://img.europapress.es/fotoweb/fotonoticia_20230923105140_640.jpg',
    },
    {
      name: 'Earphones',
      href: 'products/earphones',
      imageSrc: 'https://thumb.pccomponentes.com/w-530-530/articles/35/357782/1676-myway-wireless-pro-mwhph0028-auriculares-bluetooth-blancos.jpg',
    },
    {
      name: 'Computers',
      href: '/products/computers',
      imageSrc: 'https://i.rtings.com/assets/pages/6S2WXjTl/best-laptop-medium.jpg',
    },
    { name: 'Tablets', 
    href: '/products/Tablets', 
    imageSrc: 'https://i.blogs.es/27028b/oppo-pad-2-review-xataka-analisis-portada/500_333.jpeg' },
  ]
  return (
    <div className="bg-white">
      <div className="relative bg-gray-900">
        
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1565995487495-e2a23f3af2ee?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBob25lJTIwbGFwdG9wfGVufDB8fDB8fHww"
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

        <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">New arrivals are here</h1>
          <p className="mt-4 text-xl text-white">
            The new arrivals have, well, newly arrived. Check out the latest options from our Winter small-batch release
            while they're still in stock.
          </p>
          <Link to={"/products"}>
          <a
            href="#"
            className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Shop All Products
          </a>
          </Link>
        </div>
      </div>
      
    <br/>
    
    <div className="bg-white">
      <div className="py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8">
        <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Shop by Category</h2>
          <a href="/products" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            Browse all Products <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
              <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                {categories.map((category) => (
                  <Link to={category.href}>
                  <a key={category.name}
                    className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <img src={category.imageSrc} alt="" className="w-full h-full object-center object-cover" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    />
                    <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                  </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4 sm:hidden">
          <a href="/products" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Browse all Products<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
    <br></br>
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-3">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
              <div className="sm:flex-shrink-0">
                <div className="flow-root">
                  <img className="w-28 h-24 mx-auto" src={incentive.imageSrc} alt="" />
                </div>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    

    
  )
}

export default HomePage