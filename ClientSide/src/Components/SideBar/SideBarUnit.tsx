import { ListItem, ListItemIcon, Typography } from '@mui/material';
import { ReactElement, useState } from 'react';
import { unit_props } from '../../Types/types';

export default function SideBarUnit({
    itemText,
    Icon,
}: unit_props): ReactElement {
    const [hovered, setHovered] = useState(false);
    const hoverStyle = (icon: boolean) => {
        return {
            transition: '0.5s',
            color: !hovered ? '#fff' : icon ? '#4d8190' : '#92c788',
        };
    };
    return (
        <>
            <ListItem
                sx={{
                    transition: '0.5s',
                    ':hover': {
                        background: '#fff',
                    },
                    borderRadius: '5px',
                    width: '100%',
                    paddingBlock: '10%',
                    cursor: 'pointer',
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <ListItemIcon sx={hoverStyle(true)}>
                    <Icon />
                </ListItemIcon>
                <Typography sx={hoverStyle(false)}>{itemText}</Typography>
            </ListItem>
        </>
    );
}
