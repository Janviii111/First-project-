import { Container, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Elevate() {
  return (
    <div>
      <Container maxWidth='lg'>
        <Typography style={{
          fontfamily: "Bebas Neue, sans-serif,",
          fontStyle: 'normal',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '80px',
         marginTop:'-270px',
     
          paddingBottom: '45px',

          paddingLeft: '150px'
        }} >
          <marquee style={{ scrollamount: '30', direction: 'left',paddingTop:'-50%' }}>Elevate Your <br /> Interiors</marquee>
          <hr style={{ width: '600px' }} />

          <h4 style={{ fontSize: '30px' }} >Designing Interiors That Leave a Lasting Impression</h4>
        </Typography>


        <Grid2 container spacing={9} >

          <Grid2 xs={12} md={4}>
          <Card sx={{
              backgroundcolor: '#ffffff',
              border: '1px solid #ccc',
              borderradius: '5px',
              marginbottom: '10px',
              transition: 'transform 0.3s ease',
              transform: 'translateY(-5px)',
            }}>
              <CardMedia
                component="img"
                height="140"
                image="/images/platinum.jpg"

              />

              <CardContent>
                <Typography variant="text.secondary">
                  Consultation<br />
                  Spacing Planning <br />
                  Concept Devlopment
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 xs={12} md={4}>
            <Card sx={{
              backgroundcolor: '#ffffff',
              border: '1px solid #ccc',
              borderradius: '5px',
              marginbottom: '10px',
              transition: 'transform 0.3s ease',
              transform: 'translateY(-5px)',
            }}>
              <CardMedia
                component="img"
                height="140"
                image="/images/img8.jpeg"

              />
              <CardContent>

                <Typography variant="text.secondary">
                  3D Visualization <br />
                  Design Development<br />
                  Project Management

                </Typography>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 xs={12} md={4}>
            <Card sx={{
              backgroundcolor: '#ffffff',
              border: '1px solid #ccc',
              borderradius: '5px',
              marginbottom: '10px',
              transition: 'transform 0.3s ease',
              transform: 'translateY(-5px)',
            }}>

              <CardMedia
                component="img"
                height="140"
                image="/images/img10.jpeg"

              />
              <CardContent>

                <Typography variant="text.secondary">
                  Lightning Design<br />
                  Custom Design Element<br />
                  Furniture Selection Pro
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>

        <Grid2 container spacing={9}>
          <Grid2 xs={12} md={4} >
            <Typography sx={{
              textAlign: "center",
              pt: "60px",
            }}
              variant='h2'>
              64
            </Typography>

            <Typography sx={{ fontSize: '40px',textAlign:'center' }}>Client</Typography>

          </Grid2>
          <Grid2 xs={12} md={4}>
          <Typography sx={{
              textAlign: "center",
              pt: "60px",
            }}
              variant='h2'>
              144
            </Typography>

            <Typography sx={{ fontSize: '40px',textAlign:'center' }}>Project</Typography>

          </Grid2>
          <Grid2 xs={12} md={4}>
            <Typography sx={{

              textAlign: "center",
              pt:'60px'
            }} variant='h2'>
              244K
            </Typography>
            <Typography sx={{ fontSize: '40px',textAlign:'center',marginBottom:'100px' }}>Square Feet</Typography>
          </Grid2>
        </Grid2>
      </Container>

    </div >


  )
}

