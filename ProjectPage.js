import React from 'react'
import { Box, Typography } from '@mui/material'
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { experimentalStyled as styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function ProjectPage() {
  return (
    <Box>

      <Container className='backimg' sx={{display:'flex',justifyContent:"center", alignItems:'center' }}>
        <h3 style={{ textAlign: 'center', marginLeft: '40px', marginTop: '80px' }}>WHAT WE DO?</h3>
      </Container>
      <Box>
        <Grid2 Container spacing={4}>
          <Grid2 xs={4} >
            <Typography variant='h4' style={{ marginTop: '100px', paddingLeft: '240px' }}>Home Interior Design</Typography>
            <Typography style={{ margin: '20px', textAlign: 'justify', fontFamily: 'Roboto, sans-serif', lineHeight: '24px', fontSize: '15px', width: '1000px', paddingLeft: '220px', marginBottom: '80px' }}>
              The Home Interior Design Project aims to transform a residential space into a functionaland aesthetically pleasing environment through careful analysis of client needs, conceptualization of design ideas,
              and execution within specified budget and timeline constraints.
              Beginning with client consultations to understand preferences and requirements, the project progresses through research, concept development, space planning, material selection, and detailed design development.
              Implementation involves coordination with contractors and craftsmen,while styling and decoration add finishing touches.

<Divider/>
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
      {/* Images of the projects */}

      <Container>
        <Grid2 container spacing={10} >

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
                height="150"
                image="/images/kitchen.jpeg"

              />

              <CardContent>
                <Typography variant="text.secondary">
                  Kitchen

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
                height="150"
                image="/images/masterbr.jpeg"

              />
              <CardContent>

                <Typography variant="text.secondary">
                  Master Bedroom

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
                height="150"
                image="/images/img8.jpeg"

              />
              <CardContent>

                <Typography variant="text.secondary">
                  Living Room
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
          <Divider  style={{width:'100%'}}/>
          {/* 2img */}
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
                height="150"
                image="/images/bathroom.jpg"

              />

              <CardContent>
                <Typography variant="text.secondary">
                  Bathroom

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
                height="150"
                image="/images/study.jpeg"

              />
              <CardContent>

                <Typography variant="text.secondary">
                  Study Bedroom

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
                height="150"
                image="/images/wardrope.jpeg"

              />
              <CardContent>

                <Typography variant="text.secondary">
                  Wardrope
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
          <Divider  style={{width:'100%'}}/>
          {/* 2img */}
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
                height="150"
                image="/images/tv unit.jpeg"

              />

              <CardContent>
                <Typography variant="text.secondary">
                  Tv Unit

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
                height="150"
                image="/images/kids.jpg"

              />
              <CardContent>

                <Typography variant="text.secondary">
                  Kids Bedroom

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
                height="150"
                image="/images/pooja.jpg"

              />
              <CardContent>

                <Typography variant="text.secondary">
                  Pooja Room
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
          <Divider  style={{width:'100%'}}/>
          {/* 4img */}
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
                height="150"
                image="/images/img6.jpeg"

              />

              <CardContent>
                <Typography variant="text.secondary">
                  Dinning Room

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
                height="150"
                image="/images/foyer.jpg"

              />
              <CardContent>

                <Typography variant="text.secondary">
                  Foyer Design

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
                height="150"
                image="/images/bed.jpeg"
                style={{ backgroundImage: 'center' }}

              />
              <CardContent>

                <Typography variant="text.secondary">
                  Guest Room
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
          <Divider  style={{width:'100%'}}/>
          {/* 5img */}
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
                height="150"
                image="/images/office.jpg"

              />

              <CardContent>
                <Typography variant="text.secondary">
                  Office

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
                height="150"
                image="/images/balcony.jpg"

              />
              <CardContent>

                <Typography variant="text.secondary">
                  Balcony

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
                height="150"
                image="/images/tile.jpg"

              />
              <CardContent>

                <Typography variant="text.secondary">
                  Tiles
                </Typography>
              </CardContent>
            </Card>
          </Grid2>

        </Grid2>
      </Container>
    </Box>
  )
}
