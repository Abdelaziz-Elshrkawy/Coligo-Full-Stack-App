import { Box, Card } from '@mui/material';
import AnnouncementUnit from './AnnouncementUnit';
import LowerPartHead from '../LowerPartHead';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatcher, Store } from '../../../../../Redux/store';
import { useEffect } from 'react';
import { getAnnouncements } from '../../../../../Redux/announcementSlice';
import Lottie from 'react-lottie-player';
import loadingAnimation from '../../../../../assets/loading.json';
import { announcement } from '../../../../../Types/types';
export default function LeftPart() {
    const { allAnnouncements, loading } = useSelector(
        (state: Store) => state.announcement,
    ) as any;
    const dispatch: Dispatcher = useDispatch();
    useEffect(() => {
        dispatch(getAnnouncements());
        console.log(loading);
    }, []);
    return (
        <Box component="div" sx={{ width: { sx: '100%', sm: '70%' } }}>
            <Card
                sx={{
                    padding: '10px',
                }}
            >
                <LowerPartHead
                    text="Announcements"
                    subText="New Announcements"
                />
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
                    ) : typeof allAnnouncements?.response === 'object' ? (
                        allAnnouncements?.response.map(
                            (e: announcement, i: number) => {
                                return (
                                    <AnnouncementUnit
                                        key={i}
                                        message={e.message}
                                        name={e.name}
                                        subject={e.subject}
                                        imageLink={e.imageLink}
                                    />
                                );
                            },
                        )
                    ) : (
                        <p>No announcements available</p>
                    )}
                </Box>
            </Card>
        </Box>
    );
}
