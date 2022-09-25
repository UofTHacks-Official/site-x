import { styled } from "@stitches/react";

const HeroWrapper = styled('div', {
    display: 'grid',
    marginLeft: '5vw',
});

const HeroSubTitle = styled('p', {
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
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 'min(11vw, 5rem)',
    '& span': {
        backgroundImage: 'linear-gradient(91.6deg, #DF7D7D 6.77%, #B487EE 57.81%, #5EA7D5 88.54%)',
        backgroundClip: 'text',
        color: 'transparent',
    },
});


const HeroSponsorText = styled('p', {
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
        <HeroWrapper>
            <HeroSubTitle>January 20-23, 2023 | <span>Toronto, ON.</span></HeroSubTitle>
            <HeroDisplay><span>UofTHacks X</span></HeroDisplay>
            <HeroSponsorText>Interested in sponsoring?</HeroSponsorText>
        </HeroWrapper>
    );
}

export default Hero;