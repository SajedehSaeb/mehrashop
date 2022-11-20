import React from 'react';
//style
import './Chosse.css';
//images
import Gr14 from './img/Group 14.png';
import Gr17 from './img/Group 17.png';
import Gr16 from './img/Group 16.png';
import Gr15 from './img/Group 15.jpg';

const Chosse = () => {
    return (
        <div className='row chosse-m'>
            <div className='col-3'>
                <div className='row'>
                    <div className='w-50'>
                        <h3 className='chosse-font'>ضمانت اصالت کالا</h3>
                        <p className='chosse-fontP'>مهراشاپ اصالت کالا را برای شما عزیزان تضمین می کند</p>
                    </div>
                    <img  src={Gr17} alt='gr14' className='imge-size'/>
                </div>  
            </div>
            <div className='col-3'>
                <div className='row'>
                    <div className='w-50'>
                        <h3 className='chosse-font'>تضمین بازگشت پول</h3>
                        <p className='chosse-fontP'>در صورت وجود مشکل در کالا،فوری بازگشت پول انجام خواهد شد.</p>
                    </div>
                    <img  src={Gr16} alt='gr14' className='imge-size'/>
                </div>  
            </div>
            <div className='col-3'>
                <div className='row'>
                    <div className='w-div'>
                        <h3 className='chosse-fonth'>نخستین مرکز فروشگاههای گیاهی</h3>
                        <p className='chosse-fontP'>مهراشاپ؛ یک فروشگاه سبز، ارگانیک و بدون ستم است.</p>
                    </div>
                    <img  src={Gr15} alt='gr14' className='imge-size ms-3'/>
                </div>  
            </div>
            <div className='col-3'>
                <div className='row'>
                    <div className='w-div'>
                        <h3 className='chosse-font'>خرید از سراسر دنیا</h3>
                        <p className='chosse-fontP'>خرید  محصولات پاک از فروشگاههای معتبر دنیا را در مهراشاپ تجربه کنید.</p>
                    </div>
                    <img  src={Gr14} alt='gr14' className='imge-size'/>
                </div>  
            </div>
        </div>
    );
};

export default Chosse;