import { Typography } from '@mui/material';
import { general_text_prop } from '../../Types/types';

export default function GeneralText({
    text,
    fontSize,
    width,
}: general_text_prop) {
    return (
        <>
            <Typography
                sx={{
                    fontSize: fontSize || 14,
                    opacity: 0.6,
                    margin: 0,
                    width: width || 'auto',
                }}
                paragraph
            >
                {text}
            </Typography>
        </>
    );
}
