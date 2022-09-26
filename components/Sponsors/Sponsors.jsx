import { styled } from "@stitches/react";
import Image from "next/image";
import SponsorsImage from '../../assets/Sponsors_List.svg';

const SponsorsWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '5vw',
    '@media screen and (min-width: 1000px)': {
        alignItems: 'center',
    },
});

const SponsorsTitle = styled('p', {
    fontStyle: 'normal',
    fontWeight: '450',
    fontSize: 'min(8vw, 3rem)',
    color: "#EB9C5C",
});

const SponsorsBackground = styled('div', {
    background: 'linear-gradient(101.99deg, rgba(249, 249, 249, 0.5) 5.49%, rgba(249, 249, 249, 0.3) 100%)',
    width: '50rem',
    maxWidth: '50%',
    pointerEvents: 'none'
});


const Sponsors = () => {
    return (
        <SponsorsWrapper>
            <SponsorsTitle>Previous Sponsors</SponsorsTitle>
            <SponsorsBackground><Image src={SponsorsImage} layout='responsive'/></SponsorsBackground>
        </SponsorsWrapper>
    );
}

export default Sponsors;