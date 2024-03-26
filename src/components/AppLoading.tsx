import { FC } from 'react';
import { Box, CircularProgress } from "@mui/material";

const AppLoading: FC = () => {
    return (
        <Box
            sx={{ minHeight: '100vh' }}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <CircularProgress />
        </Box>
    )
}

export default AppLoading;