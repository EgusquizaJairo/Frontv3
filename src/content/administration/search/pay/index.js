import { 
  useState, 
  useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import certifyAxios from 'src/utils/aimAxios';
// import styled from '@emotion/styled';
// import styled from '@emotion/styled';
import Header from 'src/layouts/AccentHeaderLayout/Header';
import StarIcon from '@mui/icons-material/Star';
import { Helmet } from 'react-helmet-async';
// import StarIcon from '@mui/icons-material/Star';
import {  
  TextField,
  Select,
  MenuItem,
  //  IconButton
  //  Select,MenuItem,InputLabel, FormControl, 
  Typography,
  Card,
  Box,
  Container,
  styled,
  // ImageList,
  // ImageListItem,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Divider
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

// const itemOferta = [
//   {
//     img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/518085445.jpg?k=0a79919538ed06a6bb7903cc39bfaf0893c2d76128699796660a284bb6f76dbd&o=&hp=1',
//     title: 'La Fortaleza del Inca',
//     subtitle:'A 6,4 km del centro',
//   },
//   {
//     img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/61658480.jpg?k=9f3c929b3e5387c3809e6a76f284c585242f0d8542aee7d3f72b441f3a0791ca&o=&hp=1',
//     title: 'Jalara Lunahuaná Hotel',
//     subtitle:'A 1,9 km del centro',
//   }
// ];

// const itemDerecha = [
//   {
//     img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/139145018.jpg?k=1ab984657fc788a6119cf0a7eff732bcb8dc29c85ce449d988e754a628f4fb6e&o=&hp=1',
//     title: 'La Fortaleza del Inca',
//     subtitle:'A 6,4 km del centro',
//   }
// ];
// const itemAbajo = [
//   {
//     img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/61658451.jpg?k=c31f5b56e472e138f36a2989a0f958256d4ae77b4c11c754e854785e1e38a8a2&o=&hp=1',
//     title: 'La Fortaleza del Inca',
//     subtitle:'A 6,4 km del centro',
//   },
//   {
//     img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/518085451.jpg?k=dcdd8d6e7c7221e2b71688a6664d1c322adbb31d46a7736216266597e7afded2&o=&hp=1',
//     title: 'La Fortaleza del Inca',
//     subtitle:'A 6,4 km del centro',
//   },
//   {
//     img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/61658474.jpg?k=86457f66886d4d32ed6885fe5ed9236ab74b648db8c83989f51de54e78503f77&o=&hp=1',
//     title: 'La Fortaleza del Inca',
//     subtitle:'A 6,4 km del centro',
//   },
//   {
//     img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/61658449.jpg?k=6876ddb41e26659d3cff5f56b36d76253f07dea816afda9afa81e5e5da85db21&o=&hp=1',
//     title: 'La Fortaleza del Inca',
//     subtitle:'A 6,4 km del centro',
//   },
//   {
//     img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/139145901.jpg?k=e32cee3ca5fa2c44af6ebe7f49bedd58fdc48bf174735d1914cbe8e1489f2e2c&o=&hp=1',
//     title: 'La Fortaleza del Inca',
//     subtitle:'A 6,4 km del centro',
//   }
// ];
const meses = [
  {
     id:1,
     name: '01'
  },
  {
    id:2,
    name:'02'
  },
  {
    id:3,
    name:'03'
  },
  {
    id:4,
    name:'04'
  },
  {
    id:5,
    name:'05'
  },
  {
    id:6,
    name:'06'
  },
  {
    id:7,
    name:'07'
  },
  {
    id:8,
    name:'08'
  },
  {
    id:9,
    name:'09'
  }
  ,
  {
    id:10,
    name:'10'
  }
  ,
  {
    id:11,
    name:'11'
  },
  {
    id:12,
    name:'12'
  }
];

const anhos = [
  {
     id:1,
     name: '2024'
  },
  {
    id:2,
    name:'2025'
  },
  {
    id:3,
    name:'2026'
  },
  {
    id:4,
    name:'2027'
  },
  {
    id:5,
    name:'2028'
  },
  {
    id:6,
    name:'2029'
  },
  {
    id:7,
    name:'2030'
  },
  {
    id:8,
    name:'2031'
  },
  {
    id:9,
    name:'2032'
  }
  ,
  {
    id:10,
    name:'2033'
  }
  ,
  {
    id:11,
    name:'2034'
  },
  {
    id:12,
    name:'2035'
  }
  ,
  {
    id:13,
    name:'2036'
  }
  ,
  {
    id:14,
    name:'2037'
  }
  ,
  {
    id:15,
    name:'2038'
  }
]


function ManagementAssociated() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [open, setOpen] = useState(false);
  const [mes,setMes] = useState(1);
  const [anho,setAnho] = useState(1);
  const handleCloseModal = () => {
    setOpen(false);
  }
  const handleDeleteClick =  () => {
    navigate('/hotel');
  }

  const handleOpenModal = () => {
    setOpen(true);
  }
  useEffect(() => {

  }, []);


  return (
    <>
      <Helmet>
        <title>Pago</title>
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
          <div  style={{display: 'flex',alignItems: 'normal'}}>
          <div  style={{display: 'flex',flexFlow:'column',alignItems:''}}>
          <Card
            sx={{
              p: 1,
              mt :2,
              width:1
            }} >
            <Box textAlign="left">
            <Typography
                
                sx={{
                  mt:0
                }}
              >
                Lodge
              </Typography>
              <Typography
                variant="h3"
              >
                La Fortaleza del Inca
              </Typography>
              <Typography
              >
                Anexo Paullo Km 31.5 Carretera Lunahuana, Lunahuaná, Perú
              </Typography>
              <div style={{display: 'flex',alignItems: 'center'}}>
              <Typography color="darkgreen">
                Muy buena ubicación — 8.7
              </Typography>
              <StarIcon sx={{ml:1,mt:0}}/>
              <StarIcon sx={{ml:0}}/>
              <StarIcon sx={{ml:0}}/>
              <StarIcon sx={{ml:0}}/>
              </div>
            </Box>
          </Card>
          <Card
            sx={{
              p: 1,
              mt :1,
              width:1
            }} 
            
          >
         
            <Box textAlign="left">
            <Typography
                
                sx={{
                  mt:0
                }}
              >
                Desglose de precio
              </Typography>
              <Typography
                variant="h3"
              >
                Precio   &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; S/.221.60
              </Typography>
              <Typography
                color='#595959'
              >
                Se pueden aplicar otros cargos
              </Typography>
              <Typography
                color='#595959'
              >
                En la moneda del alojamiento: US$60
              </Typography>
            </Box>
          </Card>
          </div>
          <Card
            sx={{
              ml:2, p: 1, width:1,mt:2
            }} 
            // style={{backgroundColor:'transparent'}} 
          >
         
            <Box textAlign="left">
              <Typography
                variant="h3"
                sx={{
                  mt:1,
                  mb: 1
                }}
              >
                Introduce tus datos
              </Typography>
              <div style={{display:'flex',alignItems:'center'}}>
                <Typography sx={{ml:1,width:'45%',fontWeight:'bold'}}>
                &nbsp; Nombre*
                </Typography>
                <Typography sx={{ml:2,width:'45%',fontWeight:'bold'}}>
                &nbsp; Apellido*
                </Typography>
              </div>
              <div style={{display:'flex',alignItems:'center'}}>
              <TextField
                required
                id="outlined-required"
                defaultValue="Jairo" sx={{ml:1,width:'45%'}}
              />
              <TextField
                required
                id="outlined-required"
                defaultValue="Egusquiza" sx={{ml:2,width:'50%'}}
              />
              </div>
              <div style={{display:'flex',alignItems:'center'}}>
                <Typography sx={{mt:1, ml:1,width:'45%',fontWeight:'bold'}}>
                &nbsp; E-mail*
                </Typography>
              </div>
              <div style={{display:'flex',alignItems:'center'}}>
              <TextField
                required
                id="outlined-required"
                defaultValue="jairo123@gmail.com" sx={{ml:1,width:'45%'}}
              />
              </div>
              <Typography sx={{ml:2,color:'gray'}}>
              El e-mail de confirmación se enviará a esta dirección
              </Typography>

              <div style={{display:'flex',alignItems:'center'}}>
                <Typography sx={{mt:1, ml:1,width:'45%',fontWeight:'bold'}}>
                &nbsp; Teléfono*
                </Typography>
              </div>
              <div style={{display:'flex',alignItems:'center'}}>
              <TextField
                required
                id="outlined-required"
                defaultValue="+51  " sx={{ml:1,width:'45%'}}
              />
              </div>
              <Divider sx={{mt:2}}/>
              <Typography
                variant="h4"
                sx={{
                  mt:2,
                  mb: 1
                }}
              >
                Ingresa los datos de tu tarjeta
              </Typography>
              <div style={{display:'flex',alignItems:'center'}}>
                <Typography sx={{ml:1,width:'45%',fontWeight:'bold'}}>
                &nbsp; Número de la tarjeta
                </Typography>
                <Typography sx={{ml:2,width:'45%',fontWeight:'bold'}}>
                &nbsp; Mes de vencimiento
                </Typography>
              </div>
              <div style={{display:'flex',alignItems:'center'}}>
              <TextField
                required
                id="outlined-required"
                defaultValue="" sx={{ml:1,width:'45%'}}
              />
              <Select
                required
                id="outlined-required"
                sx={{ml:2,width:'50%'}}
                value={mes}
                onChange={(e) =>{
                  setMes(e.target.value)
                  // console.log(e);
               }}
              >
                {meses.map((TypeOption) => (
                        <MenuItem
                          key={TypeOption.id}
                          value={TypeOption.id}
                        >
                          {TypeOption.name}
                        </MenuItem>
                  ))}
              </Select>
              </div>
              <div style={{display:'flex',alignItems:'center'}}>
                <Typography sx={{mt:1,ml:1,width:'45%',fontWeight:'bold'}}>
                &nbsp; Año de vencimiento
                </Typography>
                <Typography sx={{mt:1,ml:2,width:'45%',fontWeight:'bold'}}>
                &nbsp; CVV
                </Typography>
              </div>
              <div style={{display:'flex',alignItems:'center'}}>
              <Select
                required
                id="outlined-required"
                 sx={{ml:1,width:'45%'}}
                 value={anho}
                 onChange={(e) =>{
                  setAnho(e.target.value)
                  // console.log(e);
               }}
              >
                {anhos.map((TypeOption) => (
                        <MenuItem
                          key={TypeOption.id}
                          value={TypeOption.id}
                        >
                          {TypeOption.name}
                        </MenuItem>
                  ))}
              </Select>
              <TextField
                required
                id="outlined-required"
                defaultValue="" sx={{ml:2,width:'50%'}}
              />
              </div>
              <div style={{display:'flex',alignItems:'center'}}>
              <Typography sx={{mt:1,ml:1,width:'80%',fontWeight:'bold'}} style={{color:'transparent'}}>
                &nbsp; Año de vencimiento
                </Typography>
              <Button sx={{mt:3,border:0}} variant='contained' color='secondary'
              onClick={() => handleOpenModal()}
              >
                Finalizar reserva
              </Button>
              </div>
            </Box>
          </Card>
          </div>
          
        </Container>
        </Content>

        <Dialog
            open={open}
            onClose={handleCloseModal}
          >
        <DialogTitle>Registrar reserva</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Está seguro que desea finalizar el registro de la reserva?
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