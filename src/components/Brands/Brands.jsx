import React from 'react'
import s from './Brands.module.scss'

const Brands = () => {
  return (
    <>
        <section className={s.brands}>
            <img src="Group.svg" alt="" data-aos="fade-up" data-aos-delay="100" />
            <img src="zara-logo.svg" alt="" data-aos="fade-up" data-aos-delay="200" />
            <img src="gucci-logo.svg" alt="" data-aos="fade-up" data-aos-delay="300" />
            <img src="prada-logo.svg" alt="" data-aos="fade-up" data-aos-delay="400" />
            <img src="CalvinKlein.svg" alt="" data-aos="fade-up" data-aos-delay="500" />
        </section>
    </>
  )
}

export default Brands