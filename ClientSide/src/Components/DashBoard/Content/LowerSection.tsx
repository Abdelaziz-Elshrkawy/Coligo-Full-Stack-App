import { Box } from '@mui/material';
import LeftPart from './LowerSectionParts/LeftPart/LeftPart';
import RightPart from './LowerSectionParts/RightPart/RightPart';

export default function LowerSection() {
    return (
        <Box
            component="div"
            sx={{
                marginInline: '10px',
                marginBlock: '12px',
                display: 'flex',
                columnGap: '20px',
                rowGap: '10px',
                flexDirection: { xs: 'column', sm: 'row' },
            }}
        >
            <LeftPart />
            <RightPart />
        </Box>
    );
}
