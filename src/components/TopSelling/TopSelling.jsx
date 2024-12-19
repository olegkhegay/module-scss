import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import s from "./TopSelling.module.scss";

const TopSelling = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className={s.top}>
        <h2 className={s.title}>TOP SELLING</h2>

        <div className={s.cards}>
          <div className={s.card} data-aos="fade-up" data-aos-delay="100">
            <img src="/Frame8.png" alt="" />
            <p>T-SHIRT WITH TAPE DETAILS</p>
            <div className={s.marks}>
              <img src="/Frame6.svg" alt="" />
              <p>4.5/5</p>
            </div>
            <div className={s.price}>
              <h4>$212</h4>
              <s>$232</s>
              <p>-20%</p>
            </div>
          </div>
          <div className={s.card} data-aos="fade-up" data-aos-delay="200">
            <img src="/Frame9.png" alt="" />
            <p>SKINNY FIT JEANS</p>
            <div className={s.marks}>
              <img src="/Frame7.svg" alt="" />
              <p>3.5/5</p>
            </div>
            <h4>$145</h4>
          </div>
          <div className={s.card} data-aos="fade-up" data-aos-delay="300">
            <img src="/Frame10.png" alt="" />
            <p>CHECKERED SHIRT</p>
            <div className={s.marks}>
              <img src="/Frame5.svg" alt="" />
              <p>4.5/5</p>
            </div>
            <h4>$80</h4>
          </div>
          <div className={s.card} data-aos="fade-up" data-aos-delay="400">
            <img src="/Frame11.png" alt="" />
            <p>SLEEVE STRIPED T-SHIRT</p>
            <div className={s.marks}>
              <img src="/Frame6.svg" alt="" />
              <p>4.5/5</p>
            </div>
            <h4>$80</h4>
          </div>
        </div>

        <div className={s.btn}>
          <button className={s.button}>View All</button>
        </div>
      </div>
    </>
  );
};

export default TopSelling;
