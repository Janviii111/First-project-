// import React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';
// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     label: 'Discover The Art Of Living',
//     imgPath: './Images/img6.jpeg',
//   },
//   {
//     label: 'Where Style Meets Comfort',
//     imgPath: './Images/img4.jpeg',
//   },
//   {
//     label: 'Creating Harmony Through Design',
//     imgPath: './Images/img5.jpeg',
//   },
//   {
//     label: 'Creating Harmony Through Design',
//     imgPath: './Images/img10.jpeg',
//   },
// ];

// export default function Background() {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     <Box sx={{ position: 'relative', flexGrow: 1, height: '100vh', overflow: 'hidden' }}>
//       <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
//         <AutoPlaySwipeableViews
//           axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//           index={activeStep}
//           onChangeIndex={handleStepChange}
//           enableMouseEvents
//         >
//           {images.map((step, index) => (
//             <div key={step.label}>
//               {Math.abs(activeStep - index) <= 2 ? (
//                 <Box sx={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
//                   <img
//                     src={step.imgPath}
//                     alt={step.label}
//                     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                   />
//                   <Typography
//                     variant="h5"
//                     component="div"
//                     sx={{
//                       position: 'absolute',
//                       bottom: 0,
//                       transition: 'transform 0.3s ease-in-out',
//                       color: 'black',
//                       padding: '10px',
//                       width: '100%',
//                       textAlign: 'center',
//                       justifyContent:'center',
//                       fontFamily:'monospace',
//                       fontSize:'50px',
//                     }}
//                   >
//                     {step.label}
//                   </Typography>
//                 </Box>
//               ) : null}
//             </div>
//           ))}
//         </AutoPlaySwipeableViews>
//       </Box>
//       <MobileStepper
//         steps={maxSteps}
//         position="static"
//         activeStep={activeStep}
//         nextButton={
//           <Button
//             size="small"
//             onClick={handleNext}
//             disabled={activeStep === maxSteps - 1}
//             sx={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',color:'white' ,paddingTop:'30%'}}
//           >
//             Next
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button
//             size="small"
//             onClick={handleBack}
//             disabled={activeStep === 0}
//             sx={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',color:'white',paddingTop:'30%' }}
//           >
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//             Back
//           </Button>
//         }
//       />
//     </Box>
//   );
// }
