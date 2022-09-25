import { styled } from "@stitches/react";

const HeroSubTitle = styled('p', {
    position: 'absolute',
    height: '93px',
    left: '10%',
    top: '217px',

    fontStyle: 'normal',
    fontWeight: '450',
    fontSize: 'min(4vw, 1.5rem)',
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
    height: '92px',
    left: '10%',
    top: '326px',

    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 'min(11vw, 5rem)',
    lineHeight: '96px',
    display: 'flex',
    alignItems: 'flex-end',
    backgroundImage: 'linear-gradient(91.6deg, #DF7D7D 6.77%, #B487EE 57.81%, #5EA7D5 88.54%)',
    backgroundClip: 'text',
    color: 'transparent'
});


const HeroSponsorText = styled('p', {
    position: 'absolute',
    height: '94px',
    left: '12%',
    top: '438px',

    fontStyle: 'normal',
    fontWeight: '350',
    fontSize: 'min(4vw, 1.5rem)',
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