import { ReactElement } from 'react';
import {
    Box,
    Drawer,
    List,
    Typography,
    createTheme,
    useMediaQuery,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import SchoolIcon from '@mui/icons-material/School';
import InsightsIcon from '@mui/icons-material/Insights';
import CampaignIcon from '@mui/icons-material/Campaign';
import SideBarUnit from './SideBarUnit';
import { toggle_type } from '../../Types/types';
export default function SideBar({
    toggleSidebar,
    handleToggleSideBar,
}: toggle_type): ReactElement {
    const theme = createTheme();
    const mid = useMediaQuery(theme.breakpoints.up('md'));
    const sideBarBtns = (
        <>
            <Typography variant="h3" sx={{ mt: 5, mb: 10, color: '#fff' }}>
                Coligo
            </Typography>
            <List>
                {[
                    { text: 'Dashboard', icon: HomeIcon },
                    { text: 'Schedule', icon: CalendarMonthIcon },
                    { text: 'Courses', icon: CardMembershipIcon },
                    { text: 'Gradebook', icon: SchoolIcon },
                    { text: 'Performance', icon: InsightsIcon },
                    { text: 'Announcements', icon: CampaignIcon },
                ].map((e, i) => {
                    return (
                        <SideBarUnit key={i} itemText={e.text} Icon={e.icon} />
                    );
                })}
            </List>
        </>
    );
    return (
        <Box component="nav">
            {mid ? (
                <Drawer
                    variant="permanent"
                    sx={{
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: 230,
                            backgroundColor: '#38728a',
                        },
                    }}
                >
                    {sideBarBtns}
                </Drawer>
            ) : (
                <Drawer
                    container={document.body}
                    variant="temporary"
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        textAlign: 'center',
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: 230,
                            backgroundColor: '#38728a',
                        },
                    }}
                    open={toggleSidebar}
                    onClose={handleToggleSideBar}
                >
                    {sideBarBtns}
                </Drawer>
            )}
        </Box>
    );
}

/* 
                open={toggleSidebar}
                onClose={handleToggleSideBar} */
