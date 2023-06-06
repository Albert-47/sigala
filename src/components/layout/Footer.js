import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box component='footer' bgcolor='primary.dark' p={5} textAlign='center'>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    mx: 'auto',
                    maxWidth: '30vw'
                }}>
                <Typography variant='caption' color='white'>
                    Cookie settings
                </Typography>
                <Typography variant='caption' color='white'>
                    |
                </Typography>
                <Typography variant='caption' color='white'>
                    Privacy Policy
                </Typography>
                <Typography variant='caption' color='white'>
                    |
                </Typography>
                <Typography variant='caption' color='white'>
                    Shipping Policy
                </Typography>
                <Typography variant='caption' color='white'>
                    |
                </Typography>
                <Typography variant='caption' color='white'>
                    Terms and Conditions
                </Typography>
                <Typography variant='caption' color='white'></Typography>
            </Box>

            <Typography variant='caption' color='white' mt={2} component='p'>
                &copy; 2023 Quevert Industries
            </Typography>
        </Box>
    );
};

export default Footer;
