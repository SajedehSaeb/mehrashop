import React from 'react';

//style
import './Categori.css';

//image
import laptop from './img/image 33.jpg';
import room from './img/image 32.png';
import cloth from './img/image 331.jpg';
import salad from './img/salad.png';


const Categori = () => {
    return (
        <>
            <div className='div-1 row'>
                <div className='col text-decoration-underline'>
                    <p>مشاهده همه</p>
                </div>
                <div className='col cat-align'>
                    <p className='me-3'>دوست داشتنی ترین دسته بندی ها</p>
                </div>
            </div>
            
            <div className='div-size row'>
                    <div className='div-cat border p-2 margin rounded position-relative'>
                        <img src={salad} alt='laptop' className='img-1'/>
                        <div className='cat-ul h-100 position-absolute end-0 top-0 pt-4'>
                            <h className='pe-4'>خوراکهای گیاهی</h>
                            <ul className='li-cat'>
                                <li >دسر و کیک</li>
                                <li> ساندویچ </li>
                                <li>پیتزا</li>
                                <li>سالادها</li>
                                <li>چلو و خورش ها</li>
                                <li>نوشیدنی ها</li>
                            </ul>
                            <a href='#a' className='pe-4 cat-a'>مشاهده همه</a>
                        </div>
                    </div>            
                    <div className='div-cat border p-2 margin rounded position-relative'>
                        <img src={cloth} alt='laptop' className='img-1'/>
                        <div className='cat-ul h-100 position-absolute end-0 top-0 pt-4'>
                            <h className='pe-4'>مد و پوشاک</h>
                            <ul className='li-cat'>
                                <li >لباس زنانه</li>
                                <li> اکسسوری زنانه  </li>
                                <li>لباس مردانه</li>
                                <li>زیورآلات زنانه </li>
                                <li>پوشاک کودک </li>
                                <li>عینک آفتابی</li>
                            </ul>
                            <a href='#a' className='pe-4 cat-a'>مشاهده همه</a>
                        </div>
                    </div>            
                    <div className='div-cat border p-2 margin rounded position-relative'>
                        <img src={room} alt='laptop' className='img-1'/>
                        <div className='cat-ul h-100 position-absolute end-0 top-0 pt-4'>
                            <h className='pe-4'>خانه و آشپزخانه</h>
                            <ul className='li-cat'>
                                <li >صوتی و تصویری</li>
                                <li> دکوراسیون   </li>
                                <li>نور و روشنایی </li>
                                <li>آشپزخانه </li>
                                <li>حیوانات خانگی</li>
                                <li>فرش و دستبافت</li>
                            </ul>
                            <a href='#a' className='pe-4 cat-a'>مشاهده همه</a>
                        </div>  
                    </div>            
                    <div className='div-cat border p-2 rounded position-relative'>
                        <img src={laptop} alt='laptop' className='img-1'/>
                        <div className='cat-ul h-100 position-absolute end-0 top-0 pt-4'>
                            <h className='pe-4'>الکترونیک</h>
                            <ul className='li-cat'>
                                <li >کامپیوتر رو میزی </li>
                                <li> لپ تاپ  </li>
                                <li>تبلت</li>
                                <li>موبایل </li>
                                <li>هارد و مموری </li>
                                <li>لوازم جانبی</li>
                            </ul>
                            <a href='#a' className='pe-4 cat-a'>مشاهده همه</a>
                        </div>
                    </div>      
            </div>
        </>
    );
};

export default Categori;