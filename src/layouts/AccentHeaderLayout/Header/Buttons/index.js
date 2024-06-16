import { Box, Button, Typography, 
  // IconButton 
} from '@mui/material';
import useAuth from 'src/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

// import HeaderNotifications from './Notifications';
// import LanguageSwitcher from './LanguageSwitcher';

// import ClassIcon from '@mui/icons-material/Class';
// import ChatIcon from '@mui/icons-material/Chat';

function HeaderButtons() {
  const { user,logout,isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      // window.location.replace('https://inf227i4.inf.pucp.edu.pe/');
    } catch (err) {
      console.error(err);
    }
  };

  // useEffect(()=>{
  //   console.log(user);
  // },[]);
  return (
    <Box
      sx={{
        mr: 1
      }}
    >
      <div style={{
          display: 'flex',
          alignItems: 'center'
      }}>
      { isAuthenticated === true ? (
      <Typography style={{color:'white',fontSize:'18px'}}>
       ¡Bienvenido, {user.nombre}!
      </Typography>):(<></>)
      }

      <Button
        // startIcon={<ClassIcon size="1rem" />}
        variant="outlined"
        color="white"
        href="/"
        style={{
          marginRight: '15px',
          marginLeft: '15px'
        }}
      >
        Home
      </Button>

      { isAuthenticated === true ? (
      <Button
        // startIcon={<ClassIcon size="1rem" />}
        variant="outlined"
        color="white"
        href="/hotel/lista"
        style={{
          marginRight: '15px'
        }}
      >
       Lista de alojamientos
      </Button>):(
      <Button
        // startIcon={<ClassIcon size="1rem" />}
        variant="outlined"
        color="white"
        href="/lista"
        style={{
          marginRight: '15px'
        }}
      >
       Lista de alojamientos
      </Button>)
      }

      { isAuthenticated === true ? (
      <Button
        // startIcon={<ClassIcon size="1rem" />}
        variant="outlined"
        color="white"
        href="/hotel/busqueda"
        style={{
          marginRight: '15px'
        }}
      >
       Busqueda
      </Button>):(<></>)
      }
      {/* <Button
        // startIcon={<ClassIcon size="1rem" />}
        variant="outlined"
        color="white"
        href="/aim/student/reservations"
        style={{
          marginRight: '15px'
        }}
      >
       Hazte una cuenta
      </Button> */}
      { isAuthenticated === false ? (
      <Button
        // startIcon={<ClassIcon size="1rem" />}
        variant="outlined"
        color="white"
        href="/sign-in"
        style={{
          marginRight: '15px'
        }}
      >
       Iniciar sesión
      </Button>):<></>
      }
       { isAuthenticated === true ? (
      <Button
        // startIcon={<ClassIcon size="1rem" />}
        variant="outlined"
        color="white"
        // href="/sign-in"
        style={{
          marginRight: '15px'
        }}
        onClick={handleLogout}
      >
       Cerrar sesión
      </Button>):<></>
      }
      </div>
    </Box>
  );
}

export default HeaderButtons;