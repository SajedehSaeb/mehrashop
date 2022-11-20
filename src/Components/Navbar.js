import React from 'react';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//image
import ShCart from './img/shopping-cart.png';
import Heart from './img/heart.png';
import User from './img/user 1.png';
import Search from './img/Search22.png';
import Logo from './img/mehrashop-logo.png'

//Style
import './NavbarStyle.css';


const Navbar = () => {
    return (
        <>
            <header className='border-bottom p-3 row'>
                <div className='col-4 icon-m'>
                    <span className='span-style rounded-circle ps-2 pe-2'>2</span>
                    <img src={ShCart} alt='shopingCart' className='icon'/>
                    <span className='span-style rounded-circle ps-2 pe-2'  style={{zIndex : 1}}>2</span>
                    <img src={Heart} alt='shopingCart' className='icon' />
                    <img src={User} alt='shopingCart' className='icon'/>
                </div>
                <div className="input-group m-3 col-6 input-width">
                    <div className="input-group-prepend Search">
                        <div className='px-3 pt-1'>
                            <img src={Search} alt='search'/>
                        </div>
                    </div>
                    <input type="text" className="form-control inp-s" placeholder="کالای مورد نظر خود را جستجو کنید" />
                    <div className="input-group-prepend">
                        <button className="button-N bg-white border px-4" type="button">همه دسته بندی ها</button>
                    </div>
                </div>
                <div className='col-1 logo-style'>
                    <img src={Logo} alt='logo' className='logo'/>
                </div>
            </header>
        </>
    );
};

export default Navbar;