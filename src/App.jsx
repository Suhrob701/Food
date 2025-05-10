import React from 'react';

const App = () => {
  return (
    <header className="bg-white py-3">
      <div className="mt-2 mb-36 ml-6 mx-auto px-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="./src/assets/group 20.png" alt="Logo" className="h-8" />
        </div>

        <ul className="flex items-center gap-8 text-sm font-medium">
          <li className="flex text-lg items-center text-black gap-1 hover:text-green-500 transition-all duration-500 ease-in-out">Home</li>

          <li className="relative group">
            <div className="flex text-lg items-center text-black gap-1 hover:text-green-500 transition-all duration-500 ease-in-out">
              Menu
              <span className="text-green-500">▼</span>
            </div>
            <ul className="absolute top-6 left-0 bg-white shadow rounded hidden group-hover:block">
              <li className="px-4 py-2">Pizza</li>
              <li className="px-4 py-2">Drinks</li>
            </ul>
          </li>

          <li className="relative group cursor-pointer">
            <div className="flex text-lg items-center text-black gap-1 hover:text-green-500 transition-all duration-500 ease-in-out">
              Services
              <span className="text-green-500">▼</span>
            </div>
            <ul className="absolute top-6 left-0 bg-white shadow rounded hidden group-hover:block w-32 text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100">Delivery</li>
              <li className="px-4 py-2 hover:bg-gray-100">Pickup</li>
            </ul>
          </li>

          <li className="flex items-center text-black gap-1 hover:text-green-500 transition-all duration-500 ease-in-out text-lg">Offers</li>
        </ul>

        <div className="flex items-center gap-6">
          <img src="./src/assets/icon.png" alt="Search" className="w-8 h-8 cursor-pointer" />

          <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
            <img src="./src/assets/phone.png" alt="Phone" className="w-6 h-6" />
            Contact
          </button>
        </div>
      </div>

      <div className="header-content">
        <div className="px-20 flex items-center justify-between">
          <div className="text">
            <h1 className="w-[596px] h-[180px] font-inter text-6xl font-extrabold mt-20 hover:text-green-500 transition-all duration-500">
              Dive into Delights Of Delectable <span className="text-green-500">Food</span>
            </h1>

            <p className="w-[500px] h-[88px] font-inter font-medium text-2xl text-gray-600">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
            </p>

            <div className="gap-[20px] flex items-center">
              <button className="w-[200px] h-[70px] bg-green-500 rounded-4xl shadow-[2px_22px_38px_0px_#8EFF9A80] text-white font-inter text-2xl font-semibold">
                Order now
              </button>
              <p className="w-[160px] h-[31px] font-inter font-semibold text-2xl text-gray-600">Watch video</p>
              <img className="rounded-4xl w-[10%] shadow-[6px_27px_34px_0px_#0000001A]" src="./src/assets/btn.png" alt="Play Video" />
            </div>
          </div>

          <div className="img-first">
            <img className="w-[80%]" src="./src/assets/spice.png" alt="Spice" />
          </div>
        </div>
      </div>

      <section className='mt-50'>
        <div className="text-center my-12">
          <p className="text-red-400 text-1xl font-bold font-semibold tracking-widest">CUSTOMER FAVORITES</p>
          <h2 className="text-4xl font-bold mt-2 mb-10">Popular Categories</h2>

          <div className="flex flex-wrap justify-center gap-20">
            <div className="w-[250px] bg-white rounded-2xl shadow-lg p-5 text-center">
              <div className="bg-green-100 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
                <img src="./src/assets/burger.png" alt="Main Dish" className="w-12 h-12" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Main Dish</h3>
              <p className="text-gray-500">(86 dishes)</p>
            </div>

            <div className="w-[250px] bg-white rounded-2xl shadow-lg p-5 text-center">
              <div className="bg-green-100 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
                <img src="./src/assets/toast.png" alt="Break Fast" className="w-12 h-12" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Break Fast</h3>
              <p className="text-gray-500">(12 break fast)</p>
            </div>

            <div className="w-[250px] bg-white rounded-2xl shadow-lg p-5 text-center">
              <div className="bg-green-100 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
                <img src="./src/assets/dessert.png" alt="Dessert" className="w-12 h-12" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Dessert</h3>
              <p className="text-gray-500">(48 dessert)</p>
            </div>

            <div className="w-[250px] bg-white rounded-2xl shadow-lg p-5 text-center">
              <div className="bg-green-100 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
                <img src="./src/assets/juice.png" alt="Browse All" className="w-12 h-12" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Browse All</h3>
              <p className="text-gray-500">(255 Items)</p>
            </div>
          </div>
        </div>

        <section className="py-10 max-w-6xl mx-auto px-4">

          <div className="flex sm:justify-between mb-8">
            <div>
              <p className="text-sm text-red-400 uppercase font-semibold mb-2">Special Dishes</p>
              <h2 className="text-4xl sm:text-5xl font-bold leading-snug font-inter">
                Standout Dishes <br /> From Our Menu
              </h2>
            </div>

            <div className="flex items-center gap-3 mt-4 sm:mt-0">
              <button className="w-15 h-15 rounded-full bg-gray-100 text-xl text-gray-500 flex items-center justify-center hover:bg-green-500 hover:text-white hover:shadow-md transition-colors duration-300">
                ←



              </button>
              <button className="w-15 h-15 rounded-full bg-green-500 text-white text-xl flex items-center justify-center shadow-md hover:bg-gray-100 hover:text-gray-500 transition-colors duration-300">
                →
              </button>
            </div>
          </div>


          <div className="flex flex-wrap gap-15">
            <div className="w-[330px] h-[350px] bg-white p-4 rounded-4xl shadow-md w-72 relative">
              <div className="absolute top-0 right-0 bg-green-500 text-white rounded-bl-2xl p-4">❤️</div>
              <img src="./src/assets/Fattoush.png" alt="Fattoush salad" className="w-47 h-48 object-cover mx-auto rounded-full" />
              <h3 className="pl-[20px] text-lg font-semibold mt-4">Fattoush salad</h3>
              <p className="pl-[20px] pt-[16px] text-gray-500 text-sm">Description of the item</p>
              <div className="flex items-center justify-between mt-6 px-2">
                <p className="text-red-500 font-semibold text-md">$24.00</p>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <span className="text-yellow-400">⭐</span> 4.9
                </div>
              </div>
            </div>

            <div className="w-[330px] h-[350px] bg-white p-4 rounded-4xl shadow-md w-72 relative">
              <div className="absolute top-0 right-0 bg-green-500 text-white rounded-bl-2xl p-4">❤️</div>
              <img src="./src/assets/salad.png" alt="Fattoush salad" className="w-47 h-48 object-cover mx-auto rounded-full" />
              <h3 className="pl-[20px] text-lg font-semibold mt-4">Vegetable salad</h3>
              <p className="pl-[20px] pt-[16px] text-gray-500 text-sm">Description of the item</p>
              <div className="flex items-center justify-between mt-6 px-2">
                <p className="text-red-500 font-semibold text-md">$26.00</p>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <span className="text-yellow-400">⭐</span> 4.6
                </div>
              </div>
            </div>


            <div className="w-[330px] h-[350px] bg-white p-4 rounded-4xl shadow-md w-72 relative">
              <div className="absolute top-0 right-0 bg-green-500 text-white rounded-bl-2xl p-4">❤️</div>
              <img src="./src/assets/egg.png" alt="Fattoush salad" className="w-47 h-48 object-cover mx-auto rounded-full" />
              <h3 className="pl-[20px] text-lg font-semibold mt-4">Egg vegi salad</h3>
              <p className="pl-[20px] pt-[16px] text-gray-500 text-sm">Description of the item</p>
              <div className="flex items-center justify-between mt-6 px-2">
                <p className="text-red-500 font-semibold text-md">$23.00</p>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <span className="text-yellow-400">⭐</span> 4.5
                </div>
              </div>
            </div>
          </div>
        </section>

      </section>

      <section className="py-20 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-50">

        <div className="relative w-[340px] h-[430px]">
          <div className="absolute bottom-0 w-full h-[300px] rounded-[100px] z-0"></div>
          <img
            src="./src/assets/group (2).png"
            alt="Chef"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] z-10 object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-red-400 font-semibold uppercase tracking-wider">Testimonials</p>
          <h2 className="text-4xl font-bold leading-snug">
            What Our Customers <br /> Say About Us
          </h2>
          <p className="text-gray-500 text-lg">
            “I had the pleasure of dining at Foodi last night, and I'm still raving about the experience!
            The attention to detail in presentation and service was impeccable”
          </p>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex -space-x-3">
              <img src="./src/assets/mask group.png" alt="user1" className="w-14 h-14 rounded-full border-2 border-white" />
              <img src="./src/assets/mask group-1.png" alt="user2" className="w-14 h-14 rounded-full border-2 border-white" />
              <img src="./src/assets/mask group-2.png" alt="user3" className="w-14 h-14 rounded-full border-2 border-white" />
            </div>

            <div>
              <p className="font-semibold text-gray-800">Customer Feedback</p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-yellow-400 text-base">★</span> 4.9 <span>(18.6k Reviews)</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 md:px-0 flex gap-12 items-center">
        <div className="md:w-1/2">
          <p className="text-xl font-bold text-red-400 uppercase mb-2">Our Story & Services</p>
          <h2 className="text-6xl md:text-5xl font-bold font-inter mb-6 leading-snug">
            Our Culinary Journey <br /> And Services
          </h2>
          <p className="w-[370px] h-[126px]text-gray-500 mb-6">
            Rooted in passion, we curate unforgettable dining experiences and offer exceptional services,
            blending culinary artistry with warm hospitality.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full">
            Explore
          </button>
        </div>

        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <img className='m-auto mb-5' src="./src/assets/fi.png" alt="" />
            <h4 className="text-green-500 font-semibold mb-1">CATERING</h4>
            <p className="text-gray-500 text-sm">Delight your guests with our flavors and presentation</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
             <img className='m-auto mb-5' src="./src/assets/time.png" alt="" />
            <h4 className="text-green-500 font-semibold mb-1">FAST DELIVERY</h4>
            <p className="text-gray-500 text-sm">We deliver your order promptly to your door</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
             <img className='m-auto mb-5' src="./src/assets/shop.png" alt="" />
            <h4 className="text-green-500 font-semibold mb-1">ONLINE ORDERING</h4>
            <p className="text-gray-500 text-sm">Explore menu & order with ease using our Online Ordering</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
               <img className='m-auto mb-5' src="./src/assets/gift.png" alt="" />
            <h4 className="text-green-500 font-semibold mb-1">GIFT CARDS</h4>
            <p className="text-gray-500 text-sm">Give the gift of exceptional dining with Foodi Gift Cards</p>
          </div>
        </div>
        
      </section>
  
 <footer className="bg-white text-gray-700 px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <img className='text-2xl font-bold text-green-600 mb-2' src="./src/assets/Group 20.png" alt="" />
          <p>Savor the artistry where <br /> every dish is a culinary masterpiece</p>
          <div className="flex gap-5 mt-4 bg-green-100 p-2 rounded-full transition duration-300 hover:bg-green-500">
            <span className="bg-green-100 text-green-600 p-2 rounded-full">
              <img src="./src/assets/facebook.png" alt="" />
            </span>
            <span className="bg-green-100 text-green-600 p-2 rounded-full">
              <img src="./src/assets/instagram.png" alt="" />
            </span>
            <span className="bg-green-100 text-green-600 p-2 rounded-full">
              <img src="./src/assets/twitter.png" alt="" />
            </span>
            <span className="bg-green-100 text-green-600 p-2 rounded-full">
              <img src="./src/assets/youtube.png" alt="" />
            </span>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-3">Useful links</h3>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Events</li>
            <li>Blogs</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Main Menu */}
        <div>
          <h3 className="font-semibold mb-3">Main Menu</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Offers</li>
            <li>Menus</li>
            <li>Reservation</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>example@email.com</li>
            <li>+64 958 248 966</li>
            <li>Social media</li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-sm text-gray-500">
        Copyright © 2023 Dscode | All rights reserved
      </div>
    </footer>
  
       
    </header>

    
  );
};

export default App;
