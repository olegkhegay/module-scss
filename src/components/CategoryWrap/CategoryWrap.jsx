import React from 'react'
import s from './CategoryWrap.module.scss'
import PriceRangeSlider from '../PriceSwiper/PriceRangeSlider'

const CategoryWrap = () => {
  return (

    
    <>
      <section className={s.categorywrap}>
        <div className="container">
          <div className={s.wrap}>
            <div className={s.filter}>
              <div className={s.header}>
                <h3>Filters</h3>
                <img src="" alt="" />
              </div>

              <div className={s.clothes}>
                  <h4>T-shirts <img src="/more.svg" alt="" /> </h4>
                  <h4>Shorts <img src="/more.svg" alt="" /> </h4>
                  <h4>Shirts<img src="/more.svg" alt="" /> </h4>
                  <h4>Hoodie<img src="/more.svg" alt="" /> </h4>
                  <h4>Jeans<img src="/more.svg" alt="" /> </h4>
              </div>

              <PriceRangeSlider/>

              <div className={s.colors}>
                <h3>Colors <img src="/more.svg" alt="" /></h3>

                <div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>

              <div className={s.size}>
              <h3>Size <img src="/more.svg" alt="" /></h3>

                <div className={s.btns}>
                  <button>XX-Small</button>
                  <button>X-Small</button>
                  <button>Small</button>
                  <button>X-Large</button>
                  <button>XX-Large</button>
                  <button>X-Large</button>
                  <button>Large</button>
                  <button>3X-Large</button>
                  <button>4X-Large</button>

                </div>

              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CategoryWrap