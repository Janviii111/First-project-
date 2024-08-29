import { Typography, Container, Box } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';





export default function Third() {
  return (
    <div>
      <Container >

        <div className='sam'>
          <img height={'600px'} src='./Images/img11.jpg' />
          <Box>
            <Typography variant='h5' sx={{
              position: 'relative', textAlign: 'right', top: '-600px',marginBottom:'-100px'
            }}>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <b style={{ display: 'block', marginBottom: '10px', textAlign: 'right' }}>5 Steps To Your <br /> dream Home:<br /></b>
                <li style={{ textAlign: 'right',textJustify:'-moz-initial' }}>Meet Our Designer</li>
                <li style={{ textAlign: 'right' }}>Discuss & Visualize Your Home</li>
                <li style={{ textAlign: 'right' }}>Finalize The Design</li>
                <li style={{ textAlign: 'right' }}>Construction & site Install</li>
                <li style={{ textAlign: 'right' }}>Move Into Your New Dream Home!</li>
              </ul>

            </Typography>
             
          </Box>

        </div>


        <Typography variant='h3' className='heading'><b>What We Can Do For You</b> <hr /></Typography>

        <Grid2 container spacing={9} >
          <Grid2 xs={12} md={4}>
            <Card sx={{

              borderTopRightRadius: '200px',
              borderTopLeftRadius: '200px',
              height: '100%'
            }}>
              <CardMedia
                component="img"
                height="250"
                image="/images/silver.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  SILVER PACKAGE

                </Typography>
                <Typography variant="h7" >


                  Full Interior Project keeping your Basic requirements in mind. Minimal yet functional design. Colour, theme, and designs can be customized.

                  <Typography>
                    <br />
                    <hr />
                    Starting From :<br />
                    <b>₹1800/Square Feet</b>
                  </Typography>
                </Typography>
              </CardContent>

            </Card>
          </Grid2>


          <Grid2 xs={12} md={4}>
            <Card sx={{
              borderTopRightRadius: '200px',
              borderTopLeftRadius: '200px',
              height: '100%'
            }}>
              <CardMedia
                component="img"
                height="250"
                image="/images/gold.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  GOLD PACKAGE

                </Typography>
                <Typography variant="h7" >


                  Full Interior Projects including soft furnishing and Loose furniture. Fully customised design according to your requirement . Ready to move in projects
                  <Typography>
                    <br />
                    <hr />
                    Starting From:<br />
                    <b>2500 Square Feet</b>
                  </Typography>
                </Typography>
              </CardContent>

            </Card>
          </Grid2>

          <Grid2 xs={12} md={4}>
            <Card sx={{
              borderTopRightRadius: '200px',
              borderTopLeftRadius: '200px',
              height: '100%'
            }}>
              <CardMedia
                component="img"
                height="250"
                image="/images/img6.jpeg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  PLATINUM PACKAGE

                </Typography>
                <Typography variant="h7">


                  Fully customized projects keep all the requirements in mind of a luxury lifestyle. Edited and reviewed by Ananya.Ready To Move In Projects.
                  <Typography>
                    <br />
                    <hr />
                    Starting From :<br />
                    <b>3800 Square Feet</b>
                  </Typography>
                </Typography>
              </CardContent>

            </Card>
          </Grid2>
        </Grid2>

        <Typography className='cont' variant='h3'>
          GET IN TOUCH
          <br />
          <hr />

          < Typography variant='h5'>Building Relationships, One Conversation at a Time</Typography>

        </Typography>


      </Container >
      




    </div >
  )
}
