import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ReactElement } from 'react';
import { toggle_type } from '../../Types/types';
import { Search } from './Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import HeaderIcons from './Icons';
import { REACT_APP_USER_IMG } from '../../env';
import ImageIcon from '../ImageIcon/ImageIcon';
export default function Header({
    handleToggleSideBar,
    handleToggleLogin,
}: toggle_type): ReactElement {
    const drawerWidth = 230;
    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    width: { md: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: '#fff',
                }}
            >
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{ mr: 2, display: { md: 'none' } }}
                        onClick={handleToggleSideBar}
                    >
                        <MenuIcon sx={{ color: '#000' }} />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        color="#000"
                        component="div"
                        sx={{
                            fontSize: { xs: '13px', sm: '1.2em' },
                            padding: 0,
                            marginRight: '50px',
                            display: { xs: 'none', sm: 'block' },
                        }}
                    >
                        Welcome Ahmed,
                    </Typography>
                    <Box
                        component="div"
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            width: { xs: 'auto', sm: '50%' },
                        }}
                    >
                        <Search />
                        <Box>
                            <HeaderIcons
                                Icon={NotificationsIcon}
                                itemText={2}
                            />
                            <HeaderIcons itemText={2} Icon={EmailIcon} />
                            <IconButton>
                                <ImageIcon
                                    text={REACT_APP_USER_IMG as string}
                                />
                            </IconButton>
                            <Button
                                onClick={handleToggleLogin}
                                sx={{
                                    margin: -1.3,
                                    fontSize: '12px',
                                }}
                            >
                                Logout
                            </Button>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}
