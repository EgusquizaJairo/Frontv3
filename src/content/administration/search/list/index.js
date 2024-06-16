import { 
  // useState, 
  useEffect } from 'react';
// import certifyAxios from 'src/utils/aimAxios';
// import styled from '@emotion/styled';
// import styled from '@emotion/styled';
import Header from 'src/layouts/AccentHeaderLayout/Header';
import { Helmet } from 'react-helmet-async';
import StarIcon from '@mui/icons-material/Star';
import {  
  // TextField, 
  //  IconButton
  //  Select,MenuItem,InputLabel, FormControl, 
  Typography,
  Card,
  Box,
  Container,
  styled,
  // CardMedia,
  CardContent,
  Button,
  // CardActions,
  // Button
  } from '@mui/material';
// import TabList from '@mui/lab/TabList';
// import TabList from '@mui/lab/TabList';
import useAuth from 'src/hooks/useAuth';
// import PageTitleWrapper from 'src/components/PageTitleWrapper';
// import useRefMounted from 'src/hooks/useRefMounted';
// import SearchIcon from '@mui/icons-material/Search';
// import AutorenewIcon from '@mui/icons-material/Autorenew';
// import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
// import PageHeader from './PageHeader';

// const profPic = 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format'

const Content = styled(Box)(
  () => `
    display: flex;
    flex: 1;
    width: 100%;
`
);

const itemData = [
  {
    img: 'https://cf.bstatic.com/xdata/images/hotel/square200/139145018.webp?k=0428c0766d3a3f9bc200aac24ec70d1b3a74fe05ed5907fc77f4e0b35a49ec08&o=',
    title: 'La Fortaleza del Inca',
    subtitle:'A 6,4 km del centro',
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/hotel/square200/411614874.webp?k=9da9c95fed17356dc10c86cf8c4724a99c77e2ec7312fc60bcfbefc60bf1966a&o=',
    title: 'Jalara Lunahuaná Hotel',
    subtitle:'A 1,9 km del centro',
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/hotel/square200/516909421.webp?k=d2e2fdf58c50eae89f1cae51c43aff3089f2e411fdb058b65b487ca095bb038d&o=',
    title: 'El Valle Lunahuaná',
    subtitle:'A 50 m del centro',
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/hotel/square200/399983595.webp?k=7c8ccce2c36b8177da7f8d8a91f1cbf74cd71b4b51ab75ec6d621c9cc9384d5e&o=',
    title: 'La Confianza Hotel',
    subtitle: 'A 6,9 km del centro',
    cols: 2,
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/hotel/square200/157936483.webp?k=13cc91b113b6381b1bc7df6800d66bf5b9434ac46eeea4790fb16aaa3e17edf6&o=',
    title: 'Refugio de Santiago Ecolodge',
    subtitle: 'A 6,8 km del centro',
    cols: 2,
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/hotel/square200/265023351.webp?k=f351556178aa0a65e2723f63daa0badb391ceee3a0e83dc16dc8227daedbbba9&o=',
    title: 'Hotel Quilla Wasi',
    author: 'A 6,3 km del centro',
    cols: 2,
  }
  ,
  {
    img: 'https://cf.bstatic.com/xdata/images/hotel/square200/480738416.webp?k=3f8a1587bacd73c25b60062c974cb1c8439e2f805f83539744387087cd8e3536&o=',
    title: 'Ayahuaska Hotel',
    author: 'A 0,6 km del centro',
    cols: 2,
  }
];


function ManagementAssociated() {

  const { isAuthenticated } = useAuth();

  useEffect(() => {

  }, []);


  return (
    <>
      <Helmet>
        <title>Lista</title>
      </Helmet>
      
      {isAuthenticated === false ? (<> <Header/> 
        <Container
          sx={{
            mt:10,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
          }}
          maxWidth="sm"
        />
          </>
          ):(<></>)}
       <Content textAlign="left" >
        <Container
          sx={{
            // display: 'flex',
            // alignItems: 'center',
            // flexDirection: 'column'
          }}
          // maxWidth="sm"
        >
          <Card
            sx={{
              p: 1
            }} 
            style={{backgroundColor:'transparent'}} elevation={0}
          >
            <Box textAlign="left">
              <Typography
                variant="h2"
                sx={{
                  mt:1,
                  mb: 2
                }}
              >
                Lista de alojamientos
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  mb: 1
                }}
              >
                Se han encontrado 7 alojamientos disponibles
              </Typography>
              {
                itemData.map((item,index)=>(
                  <Box sx={{width: '100%',}} >
                      
                      <Card
                        orientation="horizontal"
                        sx={{
                          mb:2,
                          
                        }}
                      >
                       <div style={{
                          display: 'flex',
                          alignItems: 'center'}}
                      >
                          <img
                            src={item.img}
                            srcSet={item.img}
                            loading="lazy"
                            alt={item.title}
                            style={{height:250,width:250}}
                          />
                        
                        <CardContent>
                          <div style={{
                          display: 'flex',
                          alignItems: 'center'}}>
                          <Typography style={{fontSize:'20px'}}>
                            {item.title}
                          </Typography>
                          {index === 0 ? (<>
                          <StarIcon sx={{ml:1}}/>
                          <StarIcon sx={{ml:0}}/>
                          <StarIcon sx={{ml:0}}/>
                          <StarIcon sx={{ml:0}}/></>):(<></>)
                            }
                          </div>
                          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                            {item.subtitle}
                          </Typography>
                          
                            <div>
                              <Typography level="body-xs" fontWeight="lg" style={{visibility:'hidden'}}>
                              Habitación Familiar
                              </Typography>
                              <Typography fontWeight="lg">Habitación Familiar</Typography>
                            </div>
                            <div>
                              <Typography level="body-xs" fontWeight="lg">
                              3 camas (2 individuales, 1 doble)
                              </Typography>
                              <Typography fontWeight="lg" style={{visibility:'hidden'}}>980</Typography>
                            </div>
                            <div>
                              <Typography level="body-xs" fontWeight="lg" style={{color:'green'}}>
                              Desayuno incluido
                              </Typography>
                              
                             <Typography fontWeight="lg" style={{color:'red'}}>Solo quedan 3 habitaciones disponibles en nuestra web</Typography>
                          
                            
                            </div>
                          
                          {/* <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                            <Button variant="outlined" color="neutral">
                              Chat
                            </Button>
                            <Button variant="solid" color="primary">
                              Follow
                            </Button>
                          </Box> */}
                        </CardContent>
                        {isAuthenticated === false ? (
                        <Button variant='contained'  href="/detalle" style={{border:"none",outline:"none"}} sx={{ml:'32%',mt:'10%',float:'right'}} color='secondary' >
                              Ver detalle
                        </Button>
                        ):(<Button variant='contained'  href="/hotel/detalle" style={{border:"none",outline:"none"}} sx={{ml:'32%',mt:'10%',float:'right'}} color='secondary' >
                            Ver detalle
                         </Button>)}
                        </div>
                      </Card>
                    </Box>
                ))
              }
            </Box>
          </Card>
        </Container>
        </Content>
    </>
  );
}

export default ManagementAssociated;