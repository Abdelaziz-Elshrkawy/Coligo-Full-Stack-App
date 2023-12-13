import { Box, Typography } from '@mui/material';
import { lower_right_unit_props } from '../../../../../Types/types';
import UnitText from './UnitText';
import ButtonUnit from './ButtonUnit';

export default function LowerRightUnit({
    Icon,
    course,
    due,
    itemText,
    topic,
    btnText,
}: lower_right_unit_props) {
    return (
        <Box component="div">
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    marginTop: '30px',
                }}
                component="div"
            >
                <Box
                    component="div"
                    sx={{
                        display: 'flex',
                        columnGap: '8px',
                        height: '20px',
                    }}
                >
                    <Box
                        sx={{
                            color: '#48c28a',
                        }}
                    >
                        <Icon />
                    </Box>
                    <Typography paragraph>{itemText}</Typography>
                </Box>
                <Box
                    sx={{
                        margin: '0',
                        marginBlock: '8px',
                    }}
                >
                    <UnitText text="Course:" subText={course} />
                    <UnitText text="Topic:" subText={topic} />
                    <UnitText text="Due To:" subText={due} />
                </Box>
                <Box component="div">
                    <ButtonUnit text={btnText} />
                </Box>
            </Box>
        </Box>
    );
}
