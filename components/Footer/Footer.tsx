import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className= "wrapper">
            <button className='button-style'><Link href='/'><a>Action</a></Link></button>
            <button className='button-style'><Link href='/'><a>Action</a></Link></button>
            <button className='button-style'><Link href='/'><a>Action</a></Link></button>
        </div>  
    );
}
export default Footer;