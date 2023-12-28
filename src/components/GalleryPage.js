import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './GalleryPageStyles.css';
import Experience1 from '../assets/1_latest.jpg';
import Experience2 from '../assets/Exp2.jpeg';
import Experience3 from '../assets/2_latest.jpg';
import Experience4 from '../assets/Exp4.jpeg';
import Experience5 from '../assets/3_latest.jpg';
import Experience6 from '../assets/4_latest.jpg';
import Experience7 from '../assets/5_latest.jpg';
import Experience8 from '../assets/Exp58.jpeg';
import Experience9 from '../assets/8_latest.jpg';
import Experience10 from '../assets/9_latest.jpg';
import Experience11 from '../assets/Exp62.jpeg';
import Experience12 from '../assets/Exp71.jpeg';

function GalleryPage() {
  const itemData = [
    {
      img: Experience1,
      title: 'Bed',
    },
    {
      img: Experience2,
      title: 'Kitchen',
    },
    {
      img: Experience3,
      title: 'Sink',
    },
    {
      img: Experience4,
      title: 'Books',
    },
    {
      img: Experience5,
      title: 'Chairs',
    },
    {
      img: Experience6,
      title: 'Candle',
    },
    {
      img: Experience7,
      title: 'Laptop',
    },
    {
      img: Experience8,
      title: 'Doors',
    },
    {
      img: Experience9,
      title: 'Coffee',
    },
    {
      img: Experience10,
      title: 'Storage',
    },
    {
      img: Experience11,
      title: 'Coffee table',
    },
    {
      img: Experience12,
      title: 'Blinds',
    },
  ];

  return (
    <ImageList className='gallery-list' variant="masonry" cols={3} gap={8}>
      {itemData.map((item) => (
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

export default GalleryPage;
