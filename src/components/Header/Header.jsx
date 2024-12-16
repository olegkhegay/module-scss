import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации (в миллисекундах)
      offset: 50,     // Смещение (в пикселях) для начала анимации
      easing: 'ease-in-out', // Плавность анимации
      once: true,     // Анимация срабатывает только один раз
    });
  }, []);

  return (
    <>
      <header className={s.header} data-aos="fade-down">
        <div className="container">
          <nav className={s.nav}>
            {/* Логотип */}
            <Link to={'/'} className={s.logo} data-aos="fade-down" data-aos-delay="100">
              SHOP.CO
            </Link>

            {/* Меню */}
            <div className={s.menu}>
              <Link data-aos="fade-down" data-aos-delay="200">Shop</Link>
              <Link data-aos="fade-down" data-aos-delay="300">On Sale</Link>
              <Link data-aos="fade-down" data-aos-delay="400">New Arrivals</Link>
              <Link data-aos="fade-down" data-aos-delay="500">Brands</Link>
            </div>

            {/* Поле поиска */}
            <input
              type="text"
              className={s.search}
              placeholder="Search for products..."
              data-aos="fade-down"
              data-aos-delay="600"
            />

            {/* Иконки */}
            <div className={s.box}>
              <img src="/icon-1.svg" alt="Icon 1" data-aos="fade-down" data-aos-delay="700" />
              <img src="/icon-2.svg" alt="Icon 2" data-aos="fade-down" data-aos-delay="800" />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
