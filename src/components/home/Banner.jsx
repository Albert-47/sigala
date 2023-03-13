import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

const Banner = () => {
    return (
        <section className={styles.banner_container}>
            <Image
                src='/banner.jpg'
                alt='Banner'
                fill
                className={styles.banner}
            />

            <Box
                sx={{
                    position: 'relative',
                    top: '25vh',
                    left: '10vw',
                    maxWidth: '50vw'
                }}>
                <Typography
                    variant='h3'
                    sx={{
                        textShadow: '0px 1px 5px rgba(0,0,0,0.6)',
                        fontWeight: 900
                    }}>
                    Los mejores productos <br /> & la mejor calidad
                </Typography>
                <Button
                    variant='outlined'
                    size='large'
                    sx={{
                        fontWeight: 900,
                        margin: '1rem auto',
                        borderWidth: 'thin thick thick thin'
                    }}>
                    Visita Nuestro Catálogo
                </Button>
            </Box>
        </section>
    );
};

export default Banner;
