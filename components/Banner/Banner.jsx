import { styled } from '../../stitches.config.ts';
import Image from 'next/image';
import MLHBanner from '../../assets/MLH_Banner.svg';

const MLHBannerWrapper = styled('div', {
    position: 'absolute',
    left: '90.74%',
    right: '4.06%',
    top: '0%',
    bottom: '93.51%',
    pointerEvents: 'none'
});

const Banner = () => {
    return (
        <MLHBannerWrapper>
            {/* Width is temporary */}
            <Image src={MLHBanner} width="99.91px"/> 
        </MLHBannerWrapper>
    );
}

export default Banner;