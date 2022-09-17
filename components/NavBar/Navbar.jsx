import Link from 'next/link';
import Image from 'next/image';
import { styled } from '../../stitches.config.ts';
import UofTHacksLogo from '../../assets/UofTHacks_Logo.svg';

const NavBar = styled('div', {
    display: 'none',
    height: '10vh',
    color: '#fff'
});

const LinkWrapper = styled('span', {
    fontSize: '1vw',
    margin: '5vh 5vw 0 5vw'
});

const NavLogoWrapper = styled('span', {
    pointerEvents: 'none'
});

const NavLink = (props) => {
    return (
        <LinkWrapper>
            <Link href={props.href}>
                <a>{props.children}</a>
            </Link>
        </LinkWrapper>
    );
}

const NavLogo = (props) => {
    return (
        <NavLogoWrapper>
            <Image src={props.src} width={props.width} height={props.height} layout="fixed" alt=""/>
        </NavLogoWrapper>
    );
}

const Navbar = () => {
    return (
        <NavBar>
            <NavLogo src={UofTHacksLogo} width="100" height="100" />
            <NavLink href='/'>Action</NavLink>
            <NavLink href='/'>Action</NavLink>
            <NavLink href='/'>Action</NavLink>
            <NavLink href='/'>Action</NavLink>
        </NavBar>
    );
}

export default Navbar;