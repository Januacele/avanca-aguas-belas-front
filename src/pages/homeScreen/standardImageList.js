import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { dataImagesHome } from './dataImages';


export function StandardImageList() {
    return (
      <ImageList sx={{ width: 750, height: 400 }} variant="woven" cols={3} gap={8}>
      {dataImagesHome.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
  }

  export default StandardImageList;