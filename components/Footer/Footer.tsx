import Link from 'next/link';
import React from 'react';
import foot from '../../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className= {foot.wrapper}>
            <button className='button-style'><Link href='/'><a>Action</a></Link></button>
            <button className='button-style'><Link href='/'><a>Action</a></Link></button>
            <button className='large'><Link href='/'><a>Action</a></Link></button>
        </div>  
    );
}
export default Footer;