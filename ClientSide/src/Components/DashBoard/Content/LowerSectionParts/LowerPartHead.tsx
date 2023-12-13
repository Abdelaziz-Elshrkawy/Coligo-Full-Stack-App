import { Button, Typography } from '@mui/material';
import GeneralText from '../../../Text/GeneralFaintText';
import { Box } from '@mui/material';
import { Lower_part_head_porps } from '../../../../Types/types';

export default function LowerPartHead({
    text,
    subText,
}: Lower_part_head_porps) {
    return (
        <>
            <Box
                component="div"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '5px',
                }}
            >
                <Box
                    sx={{
                        textAlign: 'left',
                    }}
                    component="div"
                >
                    <Typography variant="body1">{text}</Typography>
                    <GeneralText fontSize="12px" text={subText}></GeneralText>
                </Box>
                <Button sx={{ color: '#48c28a' }}>All</Button>
            </Box>
        </>
    );
}
