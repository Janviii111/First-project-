// import { ImageList, ImageListItem, ImageListItemBar ,itemData} from '@mui/material'
// import React,{usestate} from 'react'

// const[itemdata,setItemdata] = usestate("")
// export default function ImageGrid({ 
//  }) {
//   return (
//     <ImageList sx={{ width: 800, height: 450 }}>
//       {itemData.map((item) => (
//         <ImageListItem key={item.img}>
//           <img
//             srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//             src={`${item.img}?w=248&fit=crop&auto=format`}
//             alt={item.title}
//             loading="lazy"
//           />
//           <ImageListItemBar
//             title={item.title}

//             position="below"
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   )
// }
import React from 'react'; // Import React
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

// Define the shape of the prop `itemData`
// This is a basic prop type definition for JavaScript
// You can skip this if you are using TypeScript
function ImageGrid({ itemData }) {
  return (
    <ImageList sx={{ width: 800, height: 450 }} cols={3}>
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
  );
}

export default ImageGrid;
