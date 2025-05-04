import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y, Autoplay } from 'swiper/modules' // Removed Navigation
import 'swiper/css'
import 'swiper/css/pagination'
import img1 from '../assets/fresh_fruits_image.png'
import img2 from '../assets/Dummy_pic.png'
import img3 from '../assets/fresh_fruits_image.png'
import { FaWhatsapp } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'

const images = [img1, img2, img3]

export default function GoldPlan() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 mt-24">
      <h1 className="text-3xl font-bold mb-6 text-center">Gold Plan</h1>

      {/* Image Slider without navigation buttons */}
      <Swiper
        modules={[Pagination, A11y, Autoplay]} // Removed Navigation
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="mb-6"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`Gold ${i + 1}`}
              className="w-full max-h-[400px] object-contain rounded-xl shadow-md mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Description */}
      <p className="text-lg text-gray-700 mb-4">
        Unlock premium features and dedicated support with our Gold Plan. Ideal for professionals seeking top-tier service.
      </p>

      {/* Bullet Points */}
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Priority customer support 24/7</li>
        <li>Exclusive access to premium content</li>
        <li>Monthly performance reports</li>
        <li>Discounts on additional services</li>
      </ul>

    
      <div className="flex flex-row flex-wrap items-center gap-4">
  {/* WhatsApp Button */}
  <a
    href="https://wa.me/919113998915"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full shadow hover:bg-green-600 transition"
  >
    <FaWhatsapp className="text-xl" />
    Contact Us
  </a>

  {/* Call Us Button */}
  <a
    href="tel:+919113998915"
    className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full shadow hover:bg-blue-700 transition"
  >
    <FaPhoneAlt className="text-xl" />
    Call Us
  </a>
</div>


    </div>
  )
}
