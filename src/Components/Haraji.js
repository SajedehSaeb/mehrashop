import React from 'react';

//style
import './Haraji.css';

//img
import candy from './img/candy.png';
import avacado from './img/avacado.png';
import img4 from './img/image 4.png';
import flower from './img/flower.png';
import rojh from './img/rojh.png';
import kaktose from './img/kaktose.png';
import star from './img/star.png';
import save from './img/save.png';

const Haraji = () => {
    return (
        <>
            <div className='haraji'>
                <div className='haraji-div row p-4 '>
                <div className='Haraji-top row'>
                    <div className='haraji-time col mt-3'></div>
                    <p className='col mt-3 text-end'>حراجی روز</p>
                </div>
                    <div className='col h-100'>
                        <img src={candy} alt='candy' />
                        <img src={save} alt='candy'className='save'/>
                        <div className='text-center mt-3'>
                            <h5>آب نبات بدون شکر</h5>
                            <img src={star} alt='star'/>
                            <p>آب نبات بدون<br /> شکرتهیه شده از عسل</p>
                            <p dir='rtl' className='price mb-4'>15,000 تومان</p>
                        </div>
                        <div className='nemodar'>
                            <div className='nemodar-c' dir='rtl'></div>
                        </div>
                        <div className='row mt-2' dir='rtl'>
                            <p className='col me-2'>فروخته رفته: 20</p>
                            <p className='col-4 text-start'>مانده: 10</p>
                        </div>
                    </div>
                    <div className='col h-100 p-2'>
                        <img src={avacado} alt='avacado' />
                        <img src={save} alt='candy'className='save'/>
                        <div className='text-center mt-3'>
                            <h5>آواکادو ارگانیک</h5>
                            <img src={star} alt='star'/>
                            <p>آواکادو های رسیده و ارگانیک <br />میوه سرای شیراز</p>
                            <p dir='rtl' className='price'>15,000 تومان</p>
                        </div>
                        <div className='nemodar'>
                            <div className='nemodar-c' dir='rtl'></div>
                        </div>
                        <div className='row mt-2' dir='rtl'>
                            <p className='col me-2'>فروخته رفته: 20</p>
                            <p className='col-4 text-start'>مانده: 10</p>
                        </div>
                    </div>
                    <div className='col h-100 p-2'>
                        <img src={img4} alt='img4' /> 
                        <img src={save} alt='candy'className='save'/>
                        <div className='text-center mt-3'>
                            <h5>چهارپایه چوبی</h5>
                            <img src={star} alt='star'/>
                            <p>چهارپایه چوبی با چوب گردو<br /> رنگ طبیعی خود چوب حفظ شده</p>
                            <p dir='rtl' className='price'>15,000 تومان</p>
                        </div>
                        <div className='nemodar'>
                            <div className='nemodar-c' dir='rtl'></div>
                        </div>
                        <div className='row mt-2' dir='rtl'>
                            <p className='col me-2'>فروخته رفته: 20</p>
                            <p className='col-4 text-start'>مانده: 10</p>
                        </div>
                    </div>
                    <div className='col h-100 p-2'> 
                        <img src={flower} alt='flower' />
                        <img src={save} alt='candy'className='save'/>
                        <div className='text-center mt-3'>
                            <h5>سبد گل طبیعی</h5>
                            <img src={star} alt='star'/>
                            <p dir='rtl' className='flower-p'>یک سبد گل طبیعی به سلیقه شما به ارزش
2،000،000 میلیون با تخفیف ویژه فقط امروز</p>
                            <p dir='rtl' className='price'>1,200,000  تومان</p>
                        </div>
                        <div className='nemodar'>
                            <div className='nemodar-c' dir='rtl'></div>
                        </div>
                        <div className='row mt-2' dir='rtl'>
                            <p className='col me-2'>فروخته رفته: 20</p>
                            <p className='col-4 text-start'>مانده: 10</p>
                        </div>
                    </div>
                    <div className='col h-100 p-2'>
                        <img src={rojh} alt='rojh' />
                        <img src={save} alt='candy'className='save'/>
                        <div className='text-center mt-3'>
                            <h5>رژلب گیاه</h5>
                            <img src={star} alt='star'/>
                            <p>رژلبهای گیاهی کاملا ارگانیک <br />از برند پاک سیما</p>
                            <p dir='rtl' className='price'>35,000  تومان</p>
                        </div>
                        <div className='nemodar'>
                            <div className='nemodar-c' dir='rtl'></div>
                        </div>
                        <div className='row mt-2' dir='rtl'>
                            <p className='col me-2'>فروخته رفته: 20</p>
                            <p className='col-4 text-start'>مانده: 10</p>
                        </div>
                    </div>
                    <div className='col h-100 p-2'>
                        <img src={kaktose} alt='kaktose' />
                        <img src={save} alt='candy'className='save'/>
                        <div className='text-center mt-3'>
                            <h5>کاکتوس با گلدان سنگی</h5>
                            <img src={star} alt='star'/>
                            <p>کاکتوس همراه با گلدان سنگی <br />از مجموعه مهرآکاکتوس</p>
                            <p dir='rtl' className='price'>1,200,000 تومان</p>
                        </div>
                        <div className='nemodar'>
                            <div className='nemodar-c' dir='rtl'></div>
                        </div>
                        <div className='row mt-2' dir='rtl'>
                            <p className='col me-2'>فروخته رفته: 20</p>
                            <p className='col-4 text-start'>مانده: 10</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Haraji;