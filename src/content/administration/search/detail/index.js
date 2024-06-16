import { 
  useState, 
  useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
// import certifyAxios from 'src/utils/aimAxios';
// import styled from '@emotion/styled';
// import styled from '@emotion/styled';
import Header from 'src/layouts/AccentHeaderLayout/Header';
import { Helmet } from 'react-helmet-async';
// import StarIcon from '@mui/icons-material/Star';
import {  
  // TextField, 
  //  IconButton
  //  Select,MenuItem,InputLabel, FormControl, 
  Typography,
  Card,
  Box,
  Container,
  styled,
  ImageList,
  ImageListItem,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
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

const itemOferta = [
  {
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/518085445.jpg?k=0a79919538ed06a6bb7903cc39bfaf0893c2d76128699796660a284bb6f76dbd&o=&hp=1',
    title: 'La Fortaleza del Inca',
    subtitle:'A 6,4 km del centro',
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/61658480.jpg?k=9f3c929b3e5387c3809e6a76f284c585242f0d8542aee7d3f72b441f3a0791ca&o=&hp=1',
    title: 'Jalara Lunahuaná Hotel',
    subtitle:'A 1,9 km del centro',
  }
];

const itemDerecha = [
  {
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/139145018.jpg?k=1ab984657fc788a6119cf0a7eff732bcb8dc29c85ce449d988e754a628f4fb6e&o=&hp=1',
    title: 'La Fortaleza del Inca',
    subtitle:'A 6,4 km del centro',
  }
];
const itemAbajo = [
  {
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/61658451.jpg?k=c31f5b56e472e138f36a2989a0f958256d4ae77b4c11c754e854785e1e38a8a2&o=&hp=1',
    title: 'La Fortaleza del Inca',
    subtitle:'A 6,4 km del centro',
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/518085451.jpg?k=dcdd8d6e7c7221e2b71688a6664d1c322adbb31d46a7736216266597e7afded2&o=&hp=1',
    title: 'La Fortaleza del Inca',
    subtitle:'A 6,4 km del centro',
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/61658474.jpg?k=86457f66886d4d32ed6885fe5ed9236ab74b648db8c83989f51de54e78503f77&o=&hp=1',
    title: 'La Fortaleza del Inca',
    subtitle:'A 6,4 km del centro',
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/61658449.jpg?k=6876ddb41e26659d3cff5f56b36d76253f07dea816afda9afa81e5e5da85db21&o=&hp=1',
    title: 'La Fortaleza del Inca',
    subtitle:'A 6,4 km del centro',
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/139145901.jpg?k=e32cee3ca5fa2c44af6ebe7f49bedd58fdc48bf174735d1914cbe8e1489f2e2c&o=&hp=1',
    title: 'La Fortaleza del Inca',
    subtitle:'A 6,4 km del centro',
  }
];


function ManagementAssociated() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [open, setOpen] = useState(false);
  const handleCloseModal = () => {
    setOpen(false);
  }
  const handleDeleteClick =  () => {
    navigate('/hotel');
  }

  // const handleOpenModal = () => {
  //   setOpen(true);
  // }
  useEffect(() => {

  }, []);


  return (
    <>
      <Helmet>
        <title>Detalle</title>
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

          }}
        >
          <Card
            sx={{
              p: 1
            }} 
            style={{backgroundColor:'transparent'}} elevation={0}
          >
            <Box textAlign="left">
              <div style={{display:'flex', alignItems:'center'}}>
              <Typography
                variant="h2"
                sx={{
                  mt:1,
                  mb: 1
                }}
              >
                La Fortaleza del Inca
              </Typography>
              <StarIcon sx={{ml:1,mt:0}}/>
              <StarIcon sx={{ml:0}}/>
              <StarIcon sx={{ml:0}}/>
              <StarIcon sx={{ml:0}}/>
              </div>
              <Typography
                variant="h4"
                sx={{
                  mb: 1
                }}
              >
                Anexo Paullo Km 31.5 Carretera Lunahuana, Lunahuaná, Perú
              </Typography>
            </Box>
          </Card>

          <Card
            sx={{
              
            }} 
            style={{backgroundColor:'transparent'}} elevation={0} 
          >
            <Box textAlign="center" >

            <div style={{
                    display: 'flex',
                    alignItems: 'center'}}>
              <ImageList cols={1} rows={2} sx={{mb:1}}>
                {itemOferta.map((item) => (
                    <ImageListItem key={item.img}>
                      
                      <img 
                       style={{height:180,width:300}} 
                        src={`${item.img}`}
                        alt={item.title}
                        loading="lazy" 
                        // onClick={handleClick} 
                        />
                      
                    </ImageListItem>
                  ))}
              </ImageList>

              <ImageList cols={1} rows={1} sx={{ml:2, mb:0}}>
                {itemDerecha.map((item) => (
                    <ImageListItem key={item.img}>
                      
                      <img 
                       style={{height:360,width:900}} 
                        src={`${item.img}`}
                        alt={item.title}
                        loading="lazy" 
                        // onClick={handleClick} 
                        />
                      
                    </ImageListItem>
                  ))}
              </ImageList>
              </div>

              <ImageList cols={5} rows={1} sx={{mt:0}}>
                {itemAbajo.map((item) => (
                    <ImageListItem key={item.img}>
                      
                      <img 
                       style={{height:150,width:240}} 
                        src={`${item.img}`}
                        alt={item.title}
                        loading="lazy" 
                        // onClick={handleClick} 
                        />
                      
                    </ImageListItem>
                  ))}
              </ImageList>
            </Box>
          </Card>

          <Card
            sx={{
              p: 1
            }} 
            style={{backgroundColor:'transparent'}} elevation={0}
          >
            <Box textAlign="left">
              <div style={{
                        display: 'flex',
                        alignItems: 'center'
              }}>
              <Typography
               
                sx={{
                  mt:0,
                  mb: 2
                }} align='justify'
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia ullamcorper nisi pellentesque tempus. Nam eget mauris nisl. In viverra faucibus sapien, et posuere leo porta a. Suspendisse potenti. Duis tincidunt est ut nunc vulputate cursus. Nam finibus feugiat ligula et mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce ultricies libero sit amet ex ultrices, et fermentum velit blandit. Praesent in mauris non metus varius tincidunt quis sed quam. In rutrum, turpis vel sodales malesuada, ante erat auctor diam, id faucibus est elit vitae mi. Donec at ex mauris. Integer viverra quam tortor, vitae tincidunt purus dictum id.

              Fusce sodales lacus magna, fermentum volutpat felis mollis a. Nulla facilisis posuere tortor, consequat pretium nunc varius nec. Donec rhoncus condimentum suscipit. Morbi luctus sodales dictum. Nullam sit amet arcu id massa vehicula euismod rutrum quis ipsum. Morbi in consequat purus, quis dignissim lorem. Nulla eget ante eu sapien luctus malesuada eget a tortor. Vestibulum molestie fringilla tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

              Fusce lacus nisi, commodo ut nibh vitae, sagittis volutpat sapien. Vestibulum molestie nunc eu neque viverra malesuada. Curabitur maximus lacus nec turpis elementum tincidunt. Etiam nec mi iaculis, rhoncus turpis et, congue velit. Proin non ultricies tellus. Praesent feugiat, erat sed consequat commodo, nunc eros feugiat massa, gravida interdum tortor ligula id justo. Ut vel nunc ornare, vestibulum nulla vel, tincidunt diam. Cras varius sed mauris vel hendrerit. Vivamus sapien massa, vehicula sed arcu et, commodo ullamcorper dui. Nulla auctor, nulla non pellentesque interdum, tellus dui hendrerit orci, id vehicula nisl enim vestibulum nibh. Sed tempus rutrum turpis nec aliquet. Nunc ex eros, pretium vitae facilisis vitae, gravida quis augue.
              </Typography>
            <Box sx ={{ml:'50px',height:300}}  direction="column"
            alignItems="center"
            justifyContent="center" >
            {isAuthenticated === true ? (
            <Button variant='contained' sx={{width:'200px'}} color='secondary' style={{
            border:"none",
            outline:"none" 
            }} 
            // onClick={() => handleOpenModal()}
            href="/hotel/pago"
            >
                Reserva ahora
              </Button>)
              :(<Typography sx={{width:'200px',color:'red',fontSize:'14px'}} align='center'>
                Debe iniciar sesión para hacer una reserva
              </Typography>)
            }           
              </Box>
              </div>
            </Box>
          </Card>
        </Container>
        </Content>

        <Dialog
            open={open}
            onClose={handleCloseModal}
          >
        <DialogTitle>Registrar reserva</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Está seguro que desea registrar la reserva?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleDeleteClick} color="primary">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ManagementAssociated;