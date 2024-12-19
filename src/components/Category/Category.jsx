import React, { useEffect, useState } from 'react';
import s from './Category.module.scss';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

const Category = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <>
      <section className={s.category}>
        <div className="container">
          <div className={s.wrapper}>
            {products.slice(0, 4).map(card => (
              <Link key={card.id} to={`/product/${card.id}`} className={s.link}>
                <Card image={card.image} name={card.name} price={card.price} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;