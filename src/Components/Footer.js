import React from 'react';
//style
import './Footer.css';
//images
import Email from './img/email.png';
import enamad from './img/enamad.png';
import sazman from './img/sazman.png';
import phone from './img/phone.png';
import logoF from './img/logoF.png';
import youtube from './img/youtube.png';
import insta from './img/insta.png';
import face from './img/face.png';

const Footer = () => {
    return (
        <div className='footer-img'>
            <footer className='footer-bg d-flex flex-column justify-content-center align-items-center'>
                <div className= 'footer-align first-div pb-4'>
                    <div className='flex-center-vertically'>
                        <img src={Email} alt='email' className='footer-icon pb-4'/>
                        <h2 className='text-white'>در خبرنامه مهراشاپ عضو شوید</h2>
                        <p className='text-white'>ایمیل خود را ثبت کنید تا از آخرین تخفیف ها و محصولات حراجی در مهراشاپ با خبر شوید</p>
                        <div className='w-100 bg-white rounded p-4 position-relative'>
                            <p className='footer-input border-0 position-absolute end-0 px-2 pt-2 text-dark'>... ایمیل خود را وارد کنید</p>
                            <button className='footer-btn btn btn-success position-absolute start-0 px-5 py-2'>عضویت</button>
                        </div>
                    </div>
                </div>

                <div className='w-100 h-50 pt-5 row text-white' dir="rtl">
                    <div className='col-2 firstF'>
                        <img src={logoF} alt='logo' className='ms-4'/>
                        <p>مهراشاپ یک فروشگاه اینترنتی ارگانیک و سلامت محور</p>
                        <a href='#more' className='text-white'>بیشتر بدانید...</a>
                        <div className='mt-3'>
                            <img src={youtube} alt='youtube' className='ms-4'/>
                            <img src={insta} alt='insta' className='ms-4'/>
                            <img src={face} alt='face' />
                        </div>
                    </div>
                    <div className='col-2 '>
                        <h3 className='mb-3'>ارتباط با ما</h3>
                        <div className='flex-center-vertically'>
                            <img src={phone} alt='phone' className='footer-phone'/>
                            <p>0930 499 4959</p>
                        </div>
                        <div className='flex-center-vertically'>
                            <img src={phone} alt='phone' className='footer-phone'/>
                            <p>شنبه تا چهارشنبه: 7 صبح تا 5 عصر<br /> پنجشنبه: 8 صبح تا 2 بعدازظهر</p>
                        </div>
                        <div className='flex-center-vertically'>
                            <img src={phone} alt='phone' className='footer-phone'/>
                            <p>info@mehrashop.com</p>
                        </div>
                        
                    </div>
                    <div className='col-2'>
                        <h3 className='mb-4'>قوانین مهراشاپ</h3>
                        <p>قوانین ارسال و تحویل</p>
                        <p>بازگشت محصول</p>
                        <p>خرابی محصولات</p>
                        <p>قوانین محصولات خوراکی</p>
                        <p>لغو خرید</p>
                        <p>عضویت در مهراشاپ</p>
                    </div>
                    <div className='col'>
                        <h3 className='mb-4'>فروشندگان</h3>
                        <p>قوانین ثبت نام</p>
                        <p>ثبت فروشگاه</p>
                        <p>قوانین محصولات </p>
                        <p>حمل و نقل کالا </p>
                        <p>روابط عمومی فروشندگان </p>
                        <p>تماس با مدیریت</p>
                        
                    </div>
                    <div className='col'>
                        <h3 className='mb-4'>درباره مهراشاپ</h3>
                        <p>ارزشهای مهراشاپ</p>
                        <p>محصولات ما</p>
                        <p>همکاری با مهراشاپ</p>
                        <p>استخدام</p>
                        <p>نتقادات و پیشنهادات</p>
                        <p>پرسشهای رایج</p>
                    </div>
                    <div className='col-2'>
                        <img src={sazman} alt='enamad'/>
                        <img src={enamad} alt='enamad'/>
                    </div>
                </div>

                <div className='row border-top w-100 text-white mt-3'>
                    <div className='col-6 pt-4 mt-2 footer-p1'>
                        <p>© 2022 MehraShop. with love and service.</p>
                    </div>
                    <div className='col-6 pt-4 footer-p mt-2'>
                        <p>تمامی حقوق برای شرکت مادیار مهر مانا محفوظ می باشد</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;