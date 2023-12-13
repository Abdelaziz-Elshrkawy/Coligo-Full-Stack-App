import { Box } from '@mui/material';
import { general_text_prop } from '../../Types/types';

export default function ImageIcon({ text }: general_text_prop) {
    return (
        <>
            <Box
                component="img"
                alt="user-image"
                src={text}
                sx={{
                    height: '25px',
                    borderRadius: '10px',
                    alignSelf: 'center',
                }}
            ></Box>
        </>
    );
}
