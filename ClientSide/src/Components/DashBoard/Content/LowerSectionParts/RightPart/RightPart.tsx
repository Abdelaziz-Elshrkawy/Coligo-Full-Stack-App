import { Box, Card } from '@mui/material';
import LowerPartHead from '../LowerPartHead';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import LowerRightUnit from './LowerRightUnit';
import loadingAnimation from '../../../../../assets/loading.json';
import Lottie from 'react-lottie-player';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatcher, Store } from '../../../../../Redux/store';
import { useEffect } from 'react';
import { getQuizzes } from '../../../../../Redux/quizSlice';
import { lower_right_unit_props } from '../../../../../Types/types';
export default function RightPart() {
    const { allQuizzes, loading } = useSelector(
        (state: Store) => state.quiz,
    ) as any;
    const dispatch: Dispatcher = useDispatch();
    useEffect(() => {
        dispatch(getQuizzes());
    }, []);
    return (
        <Box
            component="div"
            sx={{
                width: { sx: '100%', sm: '30%' },
            }}
        >
            <Card
                sx={{
                    padding: '10px',
                    paddingBottom: '30px',
                }}
            >
                <LowerPartHead text="What's due" subText="What's New due" />
                <Box component="div">
                    {loading ? (
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Lottie
                                style={{ width: '30%' }}
                                animationData={loadingAnimation}
                                play
                            />
                        </Box>
                    ) : typeof allQuizzes?.response === 'object' ? (
                        allQuizzes?.response.map(
                            (e: lower_right_unit_props, i: number) => {
                                return (
                                    <LowerRightUnit
                                        key={i}
                                        Icon={HourglassEmptyIcon}
                                        btnText={e.btnText}
                                        course={e.course}
                                        due={e.due}
                                        itemText={e.itemText}
                                        topic={e.topic}
                                    />
                                );
                            },
                        )
                    ) : (
                        <p>No Quizes available</p>
                    )}
                </Box>
            </Card>
        </Box>
    );
}
