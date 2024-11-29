import React from 'react'
import s from './Footer.module.scss'

const Footer = () => {
  return (
    <>
        <footer className={s.footer}>
            <div className="container">
                <div className={s.wrap}>
                    <div className={s.input}>
                        <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>

                        <div className={s.box}>
                            <input type="text" placeholder='Enter your email address' className={s.gmail} />

                            <button>Subscribe to Newsletter</button>
                        </div>
                    </div>

                    <div className={s.information}>
                        <div className={s.card_1}>
                            <h3>SHOP.CO</h3>
                            <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                            <img src="/Social.png" alt="" />
                        </div>

                        <div className={s.card_2}>
                            <h4>Company</h4>
                            <p>About</p>
                            <p>Features</p>
                            <p>Works</p>
                            <p>Career</p>
                        </div>

                        <div className={s.card_3}>
                            <h4>Help</h4>
                            <p>Customer Support</p>
                            <p>Delivery Details</p>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                        </div>

                        <div className={s.card_4}>
                            <h4>FAQ</h4>
                            <p>Account</p>
                            <p>Manage Deliveries</p>
                            <p>Orders</p>
                            <p>Payments</p>
                        </div>

                        <div className={s.card_5}>
                            <h4>Resources</h4>
                            <p>Free eBooks</p>
                            <p>Development Tutorial</p>
                            <p>How to - Blog</p>
                            <p>Youtube Playlist</p>
                        </div>
                    </div>

                    <div className={s.payment}>
                        <p>Shop.co © 2000-2023, All Rights Reserved</p>

                        <img src="/cards.png" alt="" />
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer