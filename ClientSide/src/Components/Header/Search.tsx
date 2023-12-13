import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { ReactElement } from 'react';
export function Search(): ReactElement {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: '20px',
        backgroundColor: alpha('#035', 0.08),
        '&:hover': {
            backgroundColor: alpha('#035', 0.15),
        },
        marginLeft: 0,
        width: '50%',
        height: '100%',
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
        },
    }));

    return (
        <>
            <Search
                sx={{
                    width: { sx: '50%' },
                }}
            >
                <SearchIconWrapper>
                    <SearchIcon sx={{ color: '#222', opacity: 0.4 }} />
                </SearchIconWrapper>
                <StyledInputBase
                    sx={{ color: '#222' }}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
        </>
    );
}
