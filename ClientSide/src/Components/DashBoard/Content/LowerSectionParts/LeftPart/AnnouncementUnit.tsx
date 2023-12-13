import { Box, Typography } from '@mui/material';
import { announcement } from '../../../../../Types/types';
import GeneralText from '../../../../Text/GeneralFaintText';
import { REACT_APP_USER_IMG } from '../../../../../env';
import ImageIcon from '../../../../ImageIcon/ImageIcon';

export default function AnnouncementUnit({
    name,
    subject,
    message,
    imageLink
}: announcement) {
    return (
        <Box
            sx={{
                display: 'flex',
                textAlign: 'left',
                marginBlock: '40px',
                marginInline: '10px',
                columnGap: '20px',
            }}
            component="div"
        >
            <Box
                component="div"
                sx={{
                    display: 'flex',
                    width: '180px',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                <ImageIcon text={imageLink} />
                <Box
                    component="div"
                    sx={{
                        borderRight: '2px solid #4442',
                        paddingRight: '3px',
                        marginInline: '5px',
                    }}
                >
                    <Typography
                        sx={{ margin: 0, fontSize: '10px', width: '100%' }}
                        paragraph
                    >
                        {name}
                    </Typography>
                    <GeneralText fontSize="11px" text={subject} />
                </Box>
            </Box>
            <GeneralText width="100%" fontSize="12px" text={message} />
        </Box>
    );
}
