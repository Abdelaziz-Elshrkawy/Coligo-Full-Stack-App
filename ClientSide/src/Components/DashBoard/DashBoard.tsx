import { Box } from '@mui/material';
import LowerSection from './Content/LowerSection';
import { TopSection } from './Content/TopSection';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import { useState } from 'react';
import { toggle_type } from '../../Types/types';

export default function DashBoard({ handleToggleLogin }: toggle_type) {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const handleToggleSideBar = () => {
        setToggleSidebar(!toggleSidebar);
        console.log(toggleSidebar);
    };
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '20px',
                marginLeft: { md: '250px' },
            }}
            component="div"
        >
            <Header
                handleToggleSideBar={handleToggleSideBar}
                handleToggleLogin={handleToggleLogin}
            />
            <SideBar
                toggleSidebar={toggleSidebar}
                handleToggleSideBar={handleToggleSideBar}
            />
            <TopSection />
            <LowerSection />
        </Box>
    );
}
