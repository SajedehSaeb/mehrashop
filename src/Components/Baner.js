import React from 'react';
import './Baner.css';

const Baner = () => {
    return (
        <div>
            <div className='row m-2'>
                <div className='border p-2 baner-1 position-relative'>
                    <div className='position-absolute end-0 w-50 me-4 mt-4'>
                        <p className='baner-p1'> کاکتوس های<br/> ست شده و زیبا</p>
                        <a href='#h' className='baner-a'>خرید کنید</a>
                    </div>
                </div>
                
                <div className='border p-2 baner-2 position-relative'>
                    <div className='position-absolute end-0 w-50 me-4 mt-4'>
                        <p className='baner-p20'> انواع میوه های فصل</p>
                        <p className='baner-p21'> تا 50% تخفیف</p>
                        <p className='baner-p22'> ارگانیک و تازه</p>
                        <a href='#h' className='baner-a'>خرید کنید</a>
                    </div>
                </div>
                <div className='border p-2 baner-3 position-relative'>
                    <div className='position-absolute end-0 w-50 me-4 mt-4'>
                        <p className='baner-p3'>از سراسر دنیا خرید کنید</p>
                        <p className='baner-p31'>کالاهای دیجیتال اصل<br />در فروشگاه مهراشاپ</p>
                        <a href='#h' className='baner-a baner-a3'>خرید کنید</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Baner;