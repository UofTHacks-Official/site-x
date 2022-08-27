import { styled } from '../../stitches.config';
import Image from 'next/image';
import VectorLights from '../../assets/Vector_Lights.svg';

const BackgroundWrapper = styled('div', {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    background: '#0D0D0D',
    zIndex: '-1'
});

const Background = (props) => {
    return (
        <>
            <BackgroundWrapper css={{height:`${props.height}`}}>
                {/* Width is temporary */}
                <Image src={VectorLights} layout="fill" objectFit='cover'/> 
            </BackgroundWrapper>
        </>
    );
}

export default Background;