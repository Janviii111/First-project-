import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Form } from 'react-router-dom'
import { useState } from 'react'
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';
import Paper from '@mui/material/Paper';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export default function ContactPage() {
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('false');
  const [project, setProject] = useState('false');
  const [property, setProperty] = useState('');
  const [area, setArea] = useState('false');
  const [bhk, setBhk] = useState('false');
  const [service, setService] = useState('false');
  const [detail, setDetail] = useState('');



  const handleChange = (event) => {
    setProperty(event.target.value);
  };


  return (
    <>
      <Box>
        <Container style={{ paddingLeft: '-10px' }}>
          <img height={'600px'} width={'100%'}  style={{objectFit:'cover'}} src='./Images/img8.jpeg' alt='' />
          <Typography style={{ fontWeight: '600', textAlign: 'left' }} variant='h2'>
            Contact

          </Typography>
          <h1>LETS TALK</h1>
          <p style={{ paddingLeft: '10px', marginBottom: '80px' }}>Got a project on your mind? Let's discuss about the details.</p>

          {/* <h4 style={{ marginTop: '50px' }}>CALL US</h4>

        <PhoneIcon style={{ marginTop: '20px' }} /><h3>90-1234567899</h3>

        <FacebookIcon />
        <YouTubeIcon />
        <TwitterIcon /> */}

        </Container>
      </Box >





      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <Container maxWidth='sm'>
          <Grid2 container spacing={8}>
            <Grid2 xs >
              <Stack spacing={2}>
                <TextField
                  required
                  id="standard-required"
                  label="Name"
                  defaultValue="YourFullName"
                  variant='outlined'
                  fullWidth

                />

                <TextField
                  disabled
                  id="standard-disabled"
                  label="Email"
                  defaultValue="Email"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  required
                  id="standard-required"
                  label="Contact Number"
                  defaultValue="Contact (Whatsapp)"
                  variant='outlined'
                  fullWidth
                />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Project type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={project}
                    label="Project type"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Office</MenuItem>
                    <MenuItem value={20}>Shop</MenuItem>
                    <MenuItem value={30}>Home</MenuItem>
                    <MenuItem value={30}>Hospitality</MenuItem>
                    <MenuItem value={30}>Other</MenuItem>
                  </Select>
                </FormControl>


                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Property</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={property}
                    label="Property type"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>New</MenuItem>
                    <MenuItem value={20}>Renovation</MenuItem>
                    <MenuItem value={30}>Other</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth> <AddCommentIcon style={{ height: '30px', marginLeft: '520px' }}
                  onclick={() => handleChange()}></AddCommentIcon>
                  <InputLabel id="demo-simple-select-label">Area   </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={area}
                    label="Area"
                    onChange={handleChange}
                  >


                  </Select>
                </FormControl><br />
                <TextField
                  id="standard-helperText"
                  label="BHK"
                  variant="outlined"
                  fullWidth
                />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Service</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={project}
                    label="Service"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>design</MenuItem>
                    <MenuItem value={20}>Project manager</MenuItem>
                    <MenuItem value={30}>material</MenuItem>
                    <MenuItem value={30}>Other</MenuItem>
                  </Select>
                </FormControl><br />
                <TextField
                  id="standard-helperText"
                  label="Detail Requirement Or Queries"
                  variant="outlined"
                  fullWidth
                />
              </Stack>
            </Grid2>
          </Grid2>
        </Container>

      </Box>


      <div style={{ paddingTop: '15%', paddingLeft: "20%", width: "100%", height: '90%', marginTop: '-10%' }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465.2111673375571!2d79.11517336964604!3d21.124948145603373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b926e9dcccc5%3A0x76110ed52e347fac!2sAgarkarMedia%20Academy!5e0!3m2!1sen!2sin!4v1713184917781" style={{ border: '0', width: '80%', height: '450px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>


    </>


  )
}



