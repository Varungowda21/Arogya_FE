import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'
// import NewsLetter from '../components/NewsLetter'
import SocialMediaHandles from '../components/SocialMediaHandles'
import MonthlyPlans from '../components/MonthlyPlans'


const Home = () => {
  return (
    <div className='mt-24'>
      <MainBanner />
      <SocialMediaHandles/>
      <Categories />
      <MonthlyPlans/>
      <BestSeller />
      <BottomBanner/>
      {/* <NewsLetter /> */}
    </div>
  )
}

export default Home
