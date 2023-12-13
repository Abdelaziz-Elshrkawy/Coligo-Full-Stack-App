import { general_text_prop } from "../../../../../Types/types";
import { Button } from '@mui/material';

export default function ButtonUnit({text}:general_text_prop) {
    return (
        <>
            <Button
                variant="outlined"
                sx={{
                    color: '#48c28a',
                    border: '1px solid #48c28a',
                    width: '100%',
                    ':hover': {
                        border: '1px solid #48c28a',
                        backgroundColor: '#48c28a',
                        color: '#fff',
                    },
                }}
            >
                {text}
            </Button>
        </>
    );
}
