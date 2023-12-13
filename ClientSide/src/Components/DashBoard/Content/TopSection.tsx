import { Box, Button, Card, Typography } from '@mui/material';
import Lottie from 'react-lottie-player';
import Study from '../../../assets/study.json';
import { ReactElement } from 'react';
import GeneralText from '../../Text/GeneralFaintText';
export function TopSection(): ReactElement {
    return (
        <Card
            sx={{
                marginTop: '90px',
                marginInline: '10px',
                padding: 2,
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                flexDirection: { xs: 'column', sm: 'row' },
                rowGap: '10px',
            }}
            component="div"
        >
            <Box
                sx={{
                    width: { xs: '100%', sm: '83%' },
                }}
            >
                <Typography
                    sx={{
                        backgroundcolor: 'primary',
                        backgroundImage: `linear-gradient(90deg, #547585, #9ec7cd)`,
                        backgroundSize: '100%',

                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                    }}
                    variant="h3"
                >
                    EXAMS TIME
                </Typography>
                <Typography paragraph>
                    Here we are, Are you ready to fight? Don't worry, we
                    prepared some tips to be ready for your exams.
                </Typography>
                <GeneralText text='"Nothing happens until something moves" - Albert Einstein"' />
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#4fc8ba',
                        marginTop: '8px',
                        ':hover': {
                            backgroundColor: '#48c28a',
                        },
                    }}
                >
                    View Exams tips
                </Button>
            </Box>
            <Box
                sx={{
                    width: { xs: '60%', sm: '17%' },
                }}
                component="div"
            >
                <Lottie
                    style={{ width: '100%' }}
                    animationData={Study}
                    play
                    loop={false}
                />
            </Box>
        </Card>
    );
}
