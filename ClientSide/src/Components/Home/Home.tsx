import Lottie from 'react-lottie-player';
import home from '../../assets/home.json';
import { Box } from '@mui/material';
import ButtonUnit from '../DashBoard/Content/LowerSectionParts/RightPart/ButtonUnit';
import { toggle_type } from '../../Types/types';
export default function Home({ handleToggleLogin }: toggle_type) {
    return (
        <Box
            sx={{
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '40%',
                    left: '45%',
                    zIndex: '999',
                }}
                onClick={handleToggleLogin}
            >
                <ButtonUnit text="login" />
            </Box>
            <Box
                component="div"
                sx={{
                    height: '99dvh',
                    margin: 0,
                    backgroundColor: '#fff',
                }}
            >
                <Lottie
                    style={{
                        width: '100%',
                        position: 'absolute',
                        bottom: '0',
                    }}
                    id="home-lottie"
                    play
                    animationData={home}
                />
            </Box>
        </Box>
    );
}
