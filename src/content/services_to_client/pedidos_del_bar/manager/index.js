import { useState, useEffect } from 'react';
import certifyAxios from 'src/utils/aimAxios';
// import styled from '@emotion/styled';
// import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';
import { Grid, TextField, Box , IconButton} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
// import useRefMounted from 'src/hooks/useRefMounted';
import SearchIcon from '@mui/icons-material/Search';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import PageHeader from './PageHeader';
import ResultsActive from './ResultsActive';
// import ResultsInactive from './ResultsInactive';

// const profPic = 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format'

function ManagementAssociated() {
  // const [tabValue, setTabValue] = useState('1');
  // const isMountedRef = useRefMounted();

  const [numberOfResultsActive, setNumberOfResultsActive] = useState(0);
  // const [numberOfResultsInactive, setNumberOfResultsInactive] = useState(0);

  const [associated, setAssociated] = useState([]);
  const [nombre,setNombre] = useState('');
  const [apellidoP,setApellidoP] = useState('');
  // const [nroDocumento,setNroDocumento] = useState('');
  // const [estado, setEstado] = useState(1);
  // const tipoEstado = [
  //   {
  //     "name":"XD",
  //     "id":1
  //   },
  //   {
  //     "name":"oo",
  //     "id":2
  //   }
  // ]

  const getAssociates = async (codigo) => {
    let reqObj;
    if(codigo===1){
      setNombre('');
      setApellidoP('');
      // setNroDocumento('');
      reqObj = {
       "nombreEmple":"",
       "nombreSala":""
      };
    }
    else{
       reqObj = {
        "nombreEmple":apellidoP,
        "nombreSala":nombre
      };
   }
    console.log(reqObj);
    try {
      reqObj.suspended = "0"; // Active
      // Active Associates
      const responseActive = await certifyAxios.post('/pedido_bar/selectExtended', reqObj);
      setNumberOfResultsActive(responseActive.data.total);
      console.log(responseActive.data);
      // Inactive Associates
      reqObj.suspended = "1"; // Inactive
      // const responseInactive = await certifyAxios.post('/person/client/query', reqObj);
      // setNumberOfResultsInactive(responseInactive.data.total);
      setAssociated({
            active: responseActive.data.list,
            // inactive: responseInactive.data.list
       });
     
        // if (responseActive.data.list.length === 0) {
                
        // }
        // else {
        //   // console.log(response.data);
        //   setAssociated({
        //     active: responseActive.data.list,
        //     inactive: responseInactive.data.list
        //   });
        // }
    } catch (err) {
      console.error(err);

      if (err.response) {
        console.log(err.response);
      } else if (err.request) {
        console.error(err.request);
      } else {
        console.error('Some other unknown error');
      }
    }
  }



  useEffect(() => {
    getAssociates(0);
  }, []);


  const onPageParamsChange = (reqObj) => {

    getAssociates(reqObj);
    // setPageNumber(pageNumberP);
  }

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
    
  // const StyledTab = styled(Tab)({
  //     "&.Mui-selected": {
  //       color: "#0077FF"
  //     }
  //     ,'&:hover':{
  //       color:'inherit'
  //     },
  //   });

  return (
    <>
      <Helmet>
        <title>Pedidos del bar</title>
      </Helmet>

      <PageTitleWrapper>
        <PageHeader getAssociates />
      </PageTitleWrapper>
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
      
       <div style={{display: 'flex',alignItems: 'center'}}>
        {/* Buscadores */}
            <TextField style={{marginLeft:'5%',backgroundColor:'white',color:'black'}}
              sx={{
                m: 0
              }}

              // InputProps={{
              //   startAdornment: (
              //     <InputAdornment position="start">
              //       <SearchTwoToneIcon />
              //     </InputAdornment>
              //   )
              // }}

              onChange={(e)=>{
                setNombre(e.target.value);
              }}
              InputProps={{
                sx: {
                    "& input": {
                        color:'black'
                    }
                }
            }}
              placeholder="Buscar por nombre de sala"
              value={nombre}
              variant="outlined" 
            />
            <TextField style={{marginLeft:'1%',backgroundColor:'white',color:'black'}}
              sx={{
                m: 0
              }}
              // InputProps={{
              //   startAdornment: (
              //     <InputAdornment position="start">
              //       <SearchTwoToneIcon />
              //     </InputAdornment>
              //   )
              // }}
              onChange={(e)=>{
                setApellidoP(e.target.value);
              }}
              placeholder="Buscar por nombre de empleado"
              value={apellidoP}
              variant="outlined" 
            />    
              <IconButton style={{marginLeft:'1%'}} onClick={()=>{
                getAssociates(0);
              }}>
                  <SearchIcon fontSize="large" />
              </IconButton>
              <IconButton style={{marginLeft:'1%'}} onClick={()=>{
                 getAssociates(1);
               }}>
                  <AutorenewIcon fontSize="large" />
              </IconButton>
      {/* Botón para buscar */}
      
              <TabList onChange={handleChange} style={{marginLeft:'20%'}}
                sx={{
                  
                }}
                // textColor="secondary"
                // indicatorColor="inherit"
                // textColor='black'
                selectionFollowsFocus={false}
                // TabIndicatorProps={{style: {background:'transparent'}}}
                // inkBarStyle={{backgroundColor: '#0077FF'}}
                TabIndicatorProps={{
                  style: {
                    color:'#000000',
                    backgroundColor: "transparent",
                    borderColor:"#0077FF" ,
                    borderTop:'0',
                    borderLeft:'0',
                    borderRight:'0',
                    boxShadow:'none',
                    borderRadius:'0'
                  }
                }}
                // textColor='secondary'
                
                aria-label='secondary tabs example'
                value={value}
                >
                {/* <StyledTab label='Activos' value='1' disableRipple disabled={value==='1'}/>
                <StyledTab label='Inactivos' value='2' disableRipple disabled={value==='2'}/> */}
              </TabList>
           </div>    
        
        
        <TabPanel value='1'>
          <Grid
            sx={{
              px: 4
            }}
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12}>
              <ResultsActive
                onPageParamsChange={onPageParamsChange}
                associated={associated.active}
                numberOfResults={numberOfResultsActive}
                getAsociadas={getAssociates}
              />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value='2'>
          <Grid
            sx={{
              px: 4
            }}
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
            {/* <Grid item xs={12}>
              <ResultsInactive
                onPageParamsChange={onPageParamsChange}
                associated={associated.inactive}
                numberOfResults={numberOfResultsInactive} 
                getAsociadas={getAssociates}
                />
            </Grid> */}
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
      {/* <Footer /> */}
    </>
  );
}

export default ManagementAssociated;