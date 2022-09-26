import { styled } from '../../stitches.config.ts';
import Image from 'next/image';
import MLHBanner from '../../assets/MLH_Banner.svg';

const MLHBannerWrapper = styled('div', {
    position: 'absolute',
    width: '8%',
    minWidth: '5rem',
    maxWidth: '8rem',
    right: '5%', 
    pointerEvents: 'none'
});

const Banner = () => {
    return (
        <MLHBannerWrapper>
            <Image src={MLHBanner} layout="responsive"/> 
        </MLHBannerWrapper>
    );
}

export default Banner;