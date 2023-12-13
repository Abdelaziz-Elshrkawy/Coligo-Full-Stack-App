import { Badge, IconButton } from '@mui/material';
import { unit_props } from '../../Types/types';
import { ReactElement } from 'react';

export default function HeaderIcons({
    itemText,
    Icon,
}: unit_props): ReactElement {
    return (
        <>
            <IconButton>
                <Badge badgeContent={itemText} color="primary">
                    <Icon sx={{ color: '#40859c' }} />
                </Badge>
            </IconButton>
        </>
    );
}
