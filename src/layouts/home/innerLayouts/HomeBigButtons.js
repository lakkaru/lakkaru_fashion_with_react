import * as React from 'react';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';



const imageWidth='20%';
const images = [
  {
    url: 'https://radikadilanka.com/rdfashion/static/media/all.71109807.jpg',
    title: 'All Items',
    width: imageWidth,
    link:'/allItems'
  },
  {
    url: 'https://radikadilanka.com/rdfashion/static/media/new.5e646b80.jpg',
    title: 'New Items',
    width: imageWidth,
    link:'/allItems'
  },
  {
    url: 'https://radikadilanka.com/rdfashion/static/media/tranding.6b7c7c16.jpg',
    title: 'Trending Items',
    width: imageWidth,
    link:'/allItems'
  },
  {
    url: 'https://radikadilanka.com/rdfashion/static/media/top_items.867cf831.jpg',
    title: 'Top Items',
    width: imageWidth,
    link:'/allItems'
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
  
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function HomeBigButtons() {
  const maxWidth1324 = useMediaQuery('(max-width:1324px)');
  const maxWidth1026 = useMediaQuery('(max-width:1026px)');
  let imageWidth='20%';
  maxWidth1324?(maxWidth1026?imageWidth='35%':imageWidth="25%"):imageWidth="20%";
  
  return (
    <Grid container  sx={{flexWrap: 'wrap',  width: '100%', justifyContent:'center', paddingBottom:'80px' }}>
      {images.map((image) => (
        
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            margin:'2%',
            width: imageWidth,
           height:'250px'
          }}
          
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})`,borderRadius:'20px', border:'7px solid #d9d9d9' }} />
          <ImageBackdrop className="MuiImageBackdrop-root" style={{borderRadius:'20px'}}/>
          <Image>
            <Link to={image.link} style={{color:'white'}}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              style={{borderRadius:'120px'}}
              sx={{
                fontSize:'2rem',
                fontWeight:'500',
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography></Link>
          </Image>
        </ImageButton>
      ))}
    </Grid>
  );
}