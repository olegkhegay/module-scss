import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import s from './Hero.module.scss'

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
        <section className={s.hero}>
          <div className={s.container}>
            <div className={s.wrap__hero}>
              <div className={s.title} data-aos="fade-right">
                <h1 data-aos="fade-right">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p data-aos="fade-right">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <button data-aos="fade-right">Shop Now</button>

                <div className={s.box} data-aos="fade-right">
                  <div className={s.brands} data-aos="fade-right">
                    <h3>200+</h3>
                    <p>International Brands</p>
                  </div>

                  <div className={s.products} data-aos="fade-right">
                    <h3>2,000+</h3>
                    <p>High-Quality Products</p>
                  </div>

                  <div className={s.customers} data-aos="fade-right">
                    <h3>30,000+</h3>
                    <p>Happy Customers</p>
                  </div>
                </div>
              </div>
              <img className={s.hero__img} src="hero-img.png" alt="" data-aos="fade-left" />
            </div>
          </div>
        </section>
    </>
  )
}

export default Hero