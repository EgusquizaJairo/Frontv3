import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  // Button,
  Typography,
  Container,
  // Alert,
  styled,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from '@mui/material';
// import InfoIcon from '@mui/icons-material/Info';
import { Helmet } from 'react-helmet-async';

// import { GoogleLogin } from 'react-google-login';
// import { gapi } from 'gapi-script';
// import { auth0Config } from 'src/config';

import useAuth from 'src/hooks/useAuth';
// import Auth0Login from '../LoginAuth0';
// import FirebaseAuthLogin from '../LoginFirebaseAuth';
// import JWTLogin from '../LoginJWT';
// import AmplifyLogin from '../LoginAmplify';

const Content = styled(Box)(
  () => `
    display: flex;
    flex: 1;
    width: 100%;
`
);

const itemData = [
  {
    img: 'https://cf.bstatic.com/xdata/images/city/600x600/808514.jpg?k=b056ac69b6eceaca44af28761cde5fff8e6a3a73a1a68f45473c4d604c488e3b&o=',
    title: 'Chaclacayo',
    // author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/city/600x600/644702.jpg?k=4ce508057ac3c0f82c77d4ec529893dccef7f13562df34ed77c2d958f412e475&o=',
    title: 'Lima',
    // author: '@rollelflex_graphy726',
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/city/600x600/944998.jpg?k=44ca681ea20c89c08cd63ce0d5ad186d5db65d4d4d1bc48f2d84e20d485ada5b&o=',
    title: 'Cieneguilla',
    // author: '@helloimnik',
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/city/600x600/644776.jpg?k=c20be019dca25d5ab871d76ece2ab763bf3f0b984990d8e2467467dba7eedba7&o=',
    title: 'Paracas',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/city/600x600/621655.jpg?k=c0f1848db342b92a8150560e54c5bacc1ae77ec3e8975b250f1a02987de93573&o=',
    title: 'Asia',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://content.r9cdn.net/rimg/dimg/f7/99/0f99ac6a-city-66153-1702135192f.jpg?crop=true&width=1366&height=768&xhint=2322&yhint=1425',
    title: 'Punta Hermosa',
    author: '@hjrc33',
    cols: 2,
  }
];

const itemOferta = [
  {
    img: 'https://q-xx.bstatic.com/xdata/images/xphoto/714x300/316455553.jpeg?k=33c0362560b6aa7ff9ba2afc3ef8d120728107cf56cd1c006fcf0da8c1821735&o=',
    title: 'Aprovecha el momento',
    author: 'Ahorra un 15% o más si reservas y te alojas antes del 01/10/2024',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://r-xx.bstatic.com/xdata/images/xphoto/714x300/293799350.jpeg?k=8a6f4e24c37096fbdcd3c3d30c9f3dcea15ce35751448466decf791918012a64&o=',
    title: 'Año nuevo, aventuras nuevas',
    author: 'Ahorra un 15% o más al reservar y alojarte hasta el 1 de abril de 2024',
  }
];

const imagenPeru = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Flag_of_Peru_%281825%E2%80%931884%29.svg/270px-Flag_of_Peru_%281825%E2%80%931884%29.svg.png";

// const link = "/lista";

const itemElegir = [
  {
    img: 'https://cf.bstatic.com/xdata/images/xphoto/300x240/140040328.jpg?k=2422f83516d0b754590b00ba86266be9e78cae94f3667c02f0357d2644e3282d&o=',
    title: 'Lunahuaná',
    author: 'A 128 km de Chaclacayo',
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/xphoto/300x240/140040342.jpg?k=74b4847767ec240d1266d69e14c90eac6a6cb12794f8e74f729132de538934b6&o=',
    title: 'Huancayo',
    author: 'A 170 km de Chaclacayo',
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/xphoto/300x240/140040316.jpg?k=da6276bef6e3844b893e0958c0a08e0ae39e2cc13b915507b75df705bba5d905&o=',
    title: 'Oxapampa',
    author: 'A 216 km de Chaclacayo',
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/xphoto/300x240/140040337.jpg?k=49b056317faab4655cc59bb091122dddf76392cf2dce8b60d9fdad5e935fb573&o=',
    title: 'Ica',
    author: 'A 257 km de Chaclacayo',
  },{
    img: 'https://cf.bstatic.com/xdata/images/xphoto/300x240/140040339.jpg?k=3efbf2ee29ef0b90ca9084baecb040347c22ee182cba4c4d902eee01485a8545&o=',
    title: 'Huaraz',
    author: 'A 285 km de Chaclacayo',
  },
  {
    img: 'https://cf.bstatic.com/xdata/images/xphoto/300x240/140040305.jpg?k=e58163724e27039a5c4021d56c263af5dbd87b1e41044ad6ec648502e67f5352&o=',
    title: 'Pucallpa',
    author: 'A 469 km de Chaclacayo',
  }

];

function LoginCover() {
  // const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // const onGoogleLoginSuccess = (response) => {
  //   const data = {
  //     email: response.profileObj.email,
  //     firstName: response.profileObj.givenName,
  //     lastName: response.profileObj.familyName || '',
  //     imageUrl: response.profileObj.imageUrl
  //   };

  //   // TODO: Hay una manera en el template que maneja las redirecciones
  //   // de los log-sign in. Este es un workaround
  //   signin({ ...data });
  // };

//  const handleClick = ()=>{
//   console.log("XD");
//  }

  useEffect(() => {
    // if (isAuthenticated) {
    //   navigate('/sapt');
    // }
    // const initClient = () => {
    //   gapi.client.init({
    //     client_id: auth0Config.client_id,
    //     scope: ''
    //   });
    // };
    // gapi.load('client:auth2', initClient);
  }, []);

  return (
    <>
      <Helmet>
        <title>Peru Travel</title>
      </Helmet>
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
                variant="h1"
                sx={{
                  mb: 2
                }}
              >
                Encuentra tu próxima estancia
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  mb: 1
                }}
              >
                Busca ofertas en hoteles, casas y mucho más...
              </Typography>
            </Box>
          </Card>
          <Card
            sx={{
              p: 1,
              mt:0
            }} 
            // style={{backgroundColor:'transparent'}} 
          >
            <Box textAlign="left">
              <Typography
                variant="h3"
                sx={{
                  mb: 1
                }}
              >
                Ofertas
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  mb: 1
                }}
              >
               Promociones, descuentos y ofertas especiales para ti
              </Typography>
              <ImageList  rows={2} gap={5}>
                {itemOferta.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        // srcSet={`${item.img}`}
                        style={{height:200}}
                        src={`${item.img}`}
                        alt={item.title}
                        loading="lazy"
                      />
                      <ImageListItemBar
                        title={item.title}
                        position="top"
                        subtitle={item.author}
                        sx={{
                          "& .MuiImageListItemBar-title": { fontSize:'22px' }, // styles for title
                          "& .MuiImageListItemBar-subtitle": { fontSize:'13px' }, // styles for subtitle
                        }}
                        // actionIcon={
                        //   <IconButton
                        //     sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        //     aria-label={`info about ${item.title}`}
                            
                        //   >
                        //    <img alt='xd' src={imagenPeru} style={{height:20,width:30}}/>
                        //   </IconButton>
                        // }
                      />
                    </ImageListItem>
                  ))}
              </ImageList>
            </Box>
          </Card>
          <Card
            sx={{
              mt:1,
              p: 1
            }} 
            // style={{backgroundColor:'transparent'}} elevation={0}
          >
            <Box textAlign="left">
              <Typography
                variant="h3"
                sx={{
                  mb: 1
                }}
              >
                Destinos de moda
              </Typography>
              <Typography
               
                sx={{
                  mb: 1
                }}
              >
                Quienes han buscado en Perú también han reservado aquí
              </Typography>
              <ImageList cols={3} gap={8}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                       style={{height:220}}
                        // srcSet={`${item.img}`}
                        src={`${item.img}`}
                        alt={item.title}
                        loading="lazy"
                      />
                      <ImageListItemBar
                        title={item.title}
                        // subtitle={item.author}
                        actionIcon={
                          <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${item.title}`}
                            
                          >
                           <img alt='xd' src={imagenPeru} style={{height:20,width:30}}/>
                          </IconButton>
                        }
                      />
                    </ImageListItem>
                  ))}
              </ImageList>
            </Box>
          </Card>

          <Card
            sx={{
              p: 1,
              mt:1
            }} 
            // style={{backgroundColor:'transparent'}} 
          >
            <Box textAlign="left">
              <Typography
                variant="h3"
                sx={{
                  mb: 1
                }}
              >
                Planificador de viajes rápido y sencillo
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  mb: 1
                }}
              >
                Elige un estilo y descubre los principales destinos en Perú
              </Typography>
              {/* <Button variant='contained' >Aire libre</Button>
              <Button variant='contained' sx={{ml:1}}>Playa</Button>
              <Button variant='contained' sx={{ml:1}}>Ciudad</Button>
              <Button variant='contained' sx={{ml:1}}>Amor</Button> */}
              <ImageList cols={6} gap={10}>
                {itemElegir.map((item,index) => (
                    <ImageListItem key={item.img}>
                      {index === 0 ? (<a href = {isAuthenticated === true ? "/hotel/lista": "/lista"}>
                      <img 
                       style={{height:150,width:200}} 
                        src={`${item.img}`}
                        alt={item.title}
                        loading="lazy" 
                        // onClick={handleClick} 
                        />
                      </a>):(<img 
                       style={{height:150,width:200}} 
                        src={`${item.img}`}
                        alt={item.title}
                        loading="lazy" 
                        // onClick={handleClick} 
                        />)
                      }
                      <ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                        // actionIcon={
                        //   <IconButton
                        //     sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        //     aria-label={`info about ${item.title}`}
                            
                        //   >
                        //    <img alt='xd' src={imagenPeru} style={{height:20,width:30}}/>
                        //   </IconButton>
                        // }
                      />
                    </ImageListItem>
                  ))}
              </ImageList>
            </Box>
          </Card>
        </Container>
      </Content>
    </>
  );
}

export default LoginCover;
