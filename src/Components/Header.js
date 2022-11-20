import React from 'react';
import './Header.css';

//image
import hotsale from './img/hot-sale.png';
import bill from './img/bill.png';
import discount from './img/discount.png';
import harvest from './img/fruit.png';
import vegetable from './img/vegetable.png';
import plasticbottle from './img/plastic-bottle.png';
import bread from './img/bread.png';
import boiledegg from './img/boiled-egg.png';
import milk from './img/milk.png';
import meat from './img/meat.png';
import fish from './img/fish.png';
import menu from './img/nav_icon.png';
import ChevronRight from './img/Chevron Right 1.png';
import Location from './img/Location.png';

const Header = () => {
    return (
        <>
            <div className='ms-2 me-2 mt-2 row'>
                <div className='col-2 ps-5 pt-3'>
                    <div className='row'>
                        <p className='col'>انتخاب استان و شهر</p>
                        <img src={Location} alt='location' className='location-img'/>
                    </div>
                </div>
                <div className='col pt-4'>
                    <ul className='nav Header_m'>
                        <li className='nav-item b'>
                            <a className='li-a pt-4' href="#home">ارتباط با ما</a>
                        </li>
                        <li className='nav-item b'>
                            <a className='li-a pt-4' href="#home">درباره مهراشاپ</a>
                        </li>
                        <li className='nav-item b'>
                            <a className='li-a pt-4' href="#home">پرسشهای رایج</a>
                        </li>
                        <li className='nav-item b'>
                            <a className='li-a pt-4' href="#home">بلاگ</a>
                        </li>
                        <li className='nav-item b'>
                            <a className='li-a pt-4' href="#home">تخفیف ها و پیشنهادها</a>
                        </li>
                        <li className='nav-item b'>
                            <a className='li-a pt-4' href="#home">محصولات استوک</a>
                        </li>
                        <li className='nav-item b'>
                            <a className='li-a pt-4 ms-3' href="#home">ثبت نام فروشنده</a>
                        </li>
                    </ul>
                </div>
                <div className='col-3'>
                    <button className='btn rounded-0 btn-cat header-button'>
                        <img src={ChevronRight} alt='menu' className='ChevronRight'/>
                        دسته بندی ها
                        <img src={menu} alt='menu' className='ps-3'/>
                    </button>
                </div>
            </div>
            <div className='m-3 row'>
                <div className='baner border p-2 col-6 position-relative'>
                    <div className='baner-text position-absolute end-0'>
                        <p className='h-p'>بشقاب مهربانی</p>
                        <h2 className='h-h2'>خوراک تازه گیاهی</h2>
                        <h3 className='h-h3'>هر روز با مواد اولیه سالم</h3>
                        <p className='h-p'>خوراکهای ایرانی و بین المللی گیاهی، خام گیاهی و وگن با مواد اولیه<br />سالم و ارگانیک هر روز درب منزل شما. اکنون در شیراز</p>
                        <button className='btn header-btn ps-4 pe-4 py-3'>اکنون خرید کنید</button>                 
                    </div>
                </div>
                <div className='col-3'>
                    <ul className='ul'>
                        <li className='li'>

                            <a className='li-a' href="#home">
                            سوپرمارکت 
                                <img src={hotsale} alt='hotsale' className='li-img ms-3' />
                            </a>
                        </li>
                        <li className='li'>
                            <a className='li-a' href="#home">
                            خوراکهای گیاهی
                                <img src={bill} alt='hotsale' className='li-img ms-3' />
                            </a>
                        </li>       
                        <li className='li'>
                            <a className='li-a' href="#home">
                            هدیه و صنایع دستی
                                <img src={discount} alt='hotsale' className='li-img ms-3' />
                            </a>
                        </li>      
                        <li className='li'>
                            <a className='li-a' href="#home">
                            مد و پوشاک
                                <img src={harvest} alt='hotsale' className='li-img ms-3' />
                            </a>
                        </li>       
                        <li className='li'>
                            <a className='li-a' href="#home">
                            ورزش و سفر
                                <img src={vegetable} alt='hotsale' className='li-img ms-3' />
                            </a>
                        </li>       
                        <li className='li'>
                            <a className='li-a' href="#home">
                            کالای الکترونیک
                                <img src={plasticbottle} alt='hotsale' className='li-img ms-3' />
                            </a>
                        </li>
                        <li className='li'>
                            <a className='li-a' href="#home">
                                مادر و کودک
                                <img src={bread} alt='hotsale' className='li-img ms-3' />
                            </a>
                        </li>
                        <li className='li'>
                            <a className='li-a' href="#home">
                            خانه و آشپزخانه
                                <img src={boiledegg} alt='hotsale' className='li-img ms-3' />
                            </a>
                        </li>
                        <li className='li'>
                            <a className='li-a' href="#home">
                            کتاب و لوازم التحریر
                                <img src={milk} alt='hotsale' className='li-img ms-3' />
                            </a>
                        </li>
                        <li className='li'>
                            <a className='li-a' href="#home">
                            سلامت و زیبایی
                                <img src={meat} alt='hotsale' className='li-img ms-3' />
                            </a>
                        </li>
                        <li className='li'>
                            <a className='li-a' href="#home">
                            همه ی دسته بندی ها
                                <img src={fish} alt='hotsale' className='li-img ms-3' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>  
        </>
    );
};

export default Header;