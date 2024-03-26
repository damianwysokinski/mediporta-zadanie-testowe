import { FC } from 'react';

import {
    Alert,
    AlertTitle
} from '@mui/material';


interface AlertProps {
    message: string;
    onClose: () => void;
}

const AppAlert: FC<AlertProps> = ({ message, onClose }) => {
    return (
        <Alert
            sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 40,
                maxWidth: 400,
                margin: 'auto'
            }}
            severity="error"
            onClose={onClose}
        >
            <AlertTitle>Error</AlertTitle>
            { message }
        </Alert>
    )
}

export default AppAlert;