import { Box } from '@mui/material';
import GeneralText from '../../../../Text/GeneralFaintText';
import { Lower_part_head_porps } from '../../../../../Types/types';

export default function UnitText({ subText, text }: Lower_part_head_porps) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                columnGap: '6px',
                padding: '5px',
                height: '10px'
            }}
            component="div"
        >
            <Box sx={{
                width: '50px',
                textAlign: 'left'
            }}>
            <GeneralText text={text} />
            </Box>
            <GeneralText text={subText} />
        </Box>
    );
}
