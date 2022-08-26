import Link from 'next/link';
import Image from 'next/image';
import UofTHacksLogo from '../../assets/uofthacks-logo.svg';

const Navbar = () => {
    return (
        <div className="nav-bar">
            <Image src={UofTHacksLogo} width="100" height="100" layout="fixed" alt=""/>
            <Link href='/'><a>Action</a></Link>
            <Link href='/'><a>Action</a></Link>
            <Link href='/'><a>Action</a></Link>
            <Link href='/'><a>Action</a></Link>
        </div>
    );
}

export default Navbar;