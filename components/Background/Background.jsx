import { styled } from '../../stitches.config';
import Image from 'next/image';
import VectorLights from '../../assets/Vector_Lights.svg';

const BackgroundWrapper = styled('div', {
    position: 'absolute',
    top: '0',
    left: '0',
    width: 'max-content',
    height: 'max-content',
    pointerEvents: 'none',
    background: 'rgba(13, 13, 13, 0.91)',
    zIndex: '-1'
});

const Background = () => {
    return (
        <>
            <BackgroundWrapper>
                {/* Width is temporary */}
                <Image src={VectorLights} /> 
            </BackgroundWrapper>
        </>
    );
}

export default Background;