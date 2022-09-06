import { styled } from "@stitches/react";

const HeroSubTitle = styled('p', {
    position: 'absolute',
    width: '707px',
    height: '93px',
    left: 'calc(50% - 707px/2 - 361.5px)',
    top: '217px',

    fontStyle: 'normal',
    fontWeight: '450',
    fontSize: '25px',
    lineHeight: '37px',
    display: 'flex',
    alignItems: 'flex-end',
    color: '#fff',
    '& span': {
        color: '#DF7D7D',
        marginLeft: '1em'
    },
});

const HeroDisplay = styled('div', {
    position: 'absolute',
    width: '562px',
    height: '92px',
    left: 'calc(50% - 562px/2 - 434px)',
    top: '326px',

    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '76.29px',
    lineHeight: '96px',
    display: 'flex',
    alignItems: 'flex-end',
    backgroundImage: 'linear-gradient(91.6deg, #DF7D7D 6.77%, #B487EE 57.81%, #5EA7D5 88.54%)',
    backgroundClip: 'text',
    color: 'transparent'
});


const HeroSponsorText = styled('p', {
    position: 'absolute',
    width: '418px',
    height: '94px',
    left: '245.23px',
    top: '438px',

    fontStyle: 'normal',
    fontWeight: '350',
    fontSize: '20px',
    lineHeight: '29px',
    color: '#fff',
    textDecorationLine: 'underline',
    fontStretch: '100',
});

const Hero = () => {
    return (
        <>
            <HeroSubTitle>January 20-23, 2023 | <span>Toronto, ON.</span></HeroSubTitle>
            <HeroDisplay>UofTHacks X</HeroDisplay>
            <HeroSponsorText>Interested in sponsoring?</HeroSponsorText>
        </>
    );
}

export default Hero;