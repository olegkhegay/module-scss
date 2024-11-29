import React from 'react'
import Hero from '../components/Hero/Hero'
import Brands from '../components/Brands/Brands'
import Arrivels from '../components/Arrivels/Arrivels'
import Browse from '../components/Browse/Browse'
import Swiper from '../components/Swiper/Swiper'
import Footer from '../components/Footer/Footer'
import Category from '../components/Category/Category'

const Home = () => {
  return (
    <>
        <Hero/>
        <Brands/>
        <Category/>
        <Arrivels/>
        <Browse/>
        <Swiper/>
        <Footer/>
    </>
  )
}

export default Home