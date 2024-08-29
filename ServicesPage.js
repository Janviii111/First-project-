import { Container, Typography } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


export default function ServicesPage() {
    return (
        <Box>
            <Container>
                <Typography style={{ alignItems: 'center', marginTop: '140px' }} variant='h2'><b>SERVICES WE OFFER</b></Typography>
                <Typography style={{ alignItems: 'center', marginBottom: '60px' }} variant='h6'>
                    "Discover a world of tailored elegance and transformative spaces with our comprehensive interior design services.
                    From conceptualization to execution, we specialize in crafting personalized solutions that seamlessly blend functionality with aesthetic allure,
                    creating environments that reflect your unique style and aspirations."</Typography>

                <ImageList sx={{ width: 800, height: 450 }}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}

                                position="below"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>


            </Container>

            <Container>
                <Typography style={{ alignItems: 'center', marginTop: '140px' }} variant='h2'><b>STYLE YOUR HOME</b></Typography>
                <Typography style={{ alignItems: 'center', marginBottom: '60px' }} variant='h6'>
                    "Discover a world of tailored elegance and transformative spaces with our comprehensive interior design services.
                    From conceptualization to execution, we specialize in crafting personalized solutions that seamlessly blend functionality with aesthetic allure,
                    creating environments that reflect your unique style and aspirations."</Typography>

                <ImageList sx={{ width: 800, height: 450 }}>
                    {homeData.map((home) => (
                        <ImageListItem key={home.img}>
                            <img
                                srcSet={`${home.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${home.img}?w=248&fit=crop&auto=format`}
                                alt={home.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={home.title}

                                position="below"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>


            </Container>
            <Container>
                <Typography style={{ alignItems: 'center', marginTop: '140px' }} variant='h2'><b>INTERIOR CAFES</b></Typography>
                <Typography style={{ alignItems: 'center', marginBottom: '60px' }} variant='h6'>
                    "Discover a world of tailored elegance and transformative spaces with our comprehensive interior design services.
                    From conceptualization to execution, we specialize in crafting personalized solutions that seamlessly blend functionality with aesthetic allure,
                    creating environments that reflect your unique style and aspirations."</Typography>

                <ImageList sx={{ width: 800, height: 450, marginBottom: '100px' }}>
                    {cafeData.map((cafe) => (
                        <ImageListItem key={cafe.img}>
                            <img
                                srcSet={`${cafe.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${cafe.img}?w=248&fit=crop&auto=format`}
                                alt={cafe.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={cafe.title}

                                position="below"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>


            </Container>
            <Box>
                <Container style={{ marginRight: '80px', backgroundColor: 'black' }} maxWidth="md">
                    <Grid2 container spacing={4}>
                        <Grid2 xs={4} >
                            <img height={'400px'} width={'400px'} src='./Images/img4.jpeg' alt='' />
                        </Grid2>
                    </Grid2>

                </Container>

            </Box>

        </Box>
    )
}
const itemData = [
    {
        img: './Images/foyer.jpg',
        title: 'Flooring ',

    },
    {
        img: './Images/ceiling.jpg',
        title: 'False Ceiling ',
    },
    {
        img: './Images/painting.jpg',
        title: 'Painting',
    },
    {
        img: './Images/wallpaper.jpg',
        title: 'Wallpaper',
    },
    {
        img: './Images/wallpanel.jpg',
        title: 'Wall Panelling',
    },
    {
        img: './Images/light.jpg',
        title: 'Electrical',
    },
    {
        img: './Images/tv unit.jpeg',
        title: 'Furniture',

    },
    // 2nd imghome
];
const homeData = [
    {
        img: './Images/Img2/vases.jpg',
        title: 'Vases',

    },
    {
        img: './Images/Img2/figurines.jpg',
        title: 'figurines',

    },
    {
        img: './Images/Img2/fountains.jpg',
        title: 'Fountains',

    },
    {
        img: './Images/Img2/garden/.jpg',
        title: 'Garden',

    },
    {
        img: './Images/Img2/cushion.jpg',
        title: 'Cushion',

    },
    {
        img: './Images/Img2/curtain.jpg',
        title: 'Curtains',

    },
];
//  3rd imgcafe
const cafeData = [
    {
        img: './Images/Img2/cafemusic.jpg',
        title: 'Music',

    },
    {
        img: './Images/Img2/cafeexterior.jpg',
        title: 'Exterior',

    },
    {
        img: './Images/Img2/cafeKitchen.jpg',
        title: 'Kitchen',

    },
    {
        img: './Images/Img2/cafelight.jpg',
        title: 'Light',

    },
    {
        img: './Images/Img2/cushion.jpg',
        title: 'Table',

    },
    {
        img: './Images/Img2/cafeambience.jpg',
        title: 'Ambience',

    },
];