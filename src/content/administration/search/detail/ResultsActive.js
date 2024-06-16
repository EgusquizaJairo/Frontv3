import {  useState } from 'react';
import PropTypes from 'prop-types';
// import Chip from '@mui/material/Chip';
// import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  // Dialog,
  // DialogTitle,
  // DialogContent,
  // DialogContentText,
  // DialogActions,
  InputAdornment,
  // Table,
  // TableBody,
  // TableCell,
  // TableHead,
  // TablePagination,
  // TableContainer,
  // TableRow,
  Typography,
  TextField,
  // IconButton,
  // Tooltip,
  // Slide
} from '@mui/material';
// import {
//   setEmpleado
// } from 'src/slices/empleado';
// import { useDispatch, useSelector } from 'src/store';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
// import CreateIcon from '@mui/icons-material/Create';
// import DeleteIcon from '@mui/icons-material/Delete';
// import certifyAxios from 'src/utils/aimAxios';
// import StarIcon from '@mui/icons-material/Star';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// import InfoIcon from '@mui/icons-material/Info';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
// import BlockIcon from '@mui/icons-material/Block';
// import NoAccountsIcon from '@mui/icons-material/NoAccounts';
// import Icon from '@mui/material/IconButton';
// import Collapse from '@mui/material/Collapse';
// import { useSnackbar } from 'notistack';
// import certifyAxios from 'src/utils/aimAxios';
// import { formatNameCapitals } from 'src/utils/training';
// import { getNameAndUrlFromBack } from 'src/utils/awsConfig';

// import { useNavigate } from 'react-router-dom';
// import { comment } from 'stylis';

// import useAuth from 'src/hooks/useAuth';

const applyFilters = (associated, query, filters) => {

  return associated.filter((associated) => {
    let matches = true;

    if (query) {
      const properties = ['fullName'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (associated[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (filters.status && associated.status !== filters.status) {
        matches = false;
      }

      if (!containsQuery) {
        matches = false;
      }
    }

    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      if (value && associated[key] !== value) {
        matches = false;
      }
    });

    return matches;
  });
};

// const applyPagination = (associated, page, limit) => {
//   return associated.slice(page * limit, page * limit + limit);
// };

const ResultsActive = (props) => {
  // const [page, setPage] = useState(0); // current page number
  // const [limit, setLimit] = useState(5); // page size
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [filters] = useState({
    status: null
  });
  // const [soy,setSoy] = useState('');

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  // const navigate = useNavigate();
  // const [openAccordion, setOpenAccordion] = useState(false);
  // const [openDialogDisable, setOpenDialogDisable] = useState(false);
  // const [openDialogBlock, setOpenDialogBlock] = useState(false);
  // const { enqueueSnackbar } = useSnackbar();
  // const [memberId, setMemberId] = useState(0);
  // const [commentBlock, setCommentBlock] = useState('');
  // const [commentDisable, setCommentDisable] = useState('');
  // const [disable, setDisable] = useState(false);
  // const [block, setBlock] = useState(false);


  // const { user } = useAuth();
  // const { user } = auth;

  // const handleChangeCommentBlock = (event) => {
  //   setCommentBlock(event.target.value);
  // }

  // const handleChangeCommentDisable = (event) => {
  //   setCommentDisable(event.target.value);
  // }

  // const redirectToProfile = (id) => {

  //   // to={`/aim/student/profile/${a.partnerId}`}
  //   navigate(`/aim/student/profile/${id}`);
  // };

  // Para Modal
  // const handleOpenEnableModal = (associated) => {
  //   setOpenDialogDisable(true);
  //   setMemberId(associated.id);
  // };


  // const handleOpenDisableModal = (associated) => {
  //   setOpenDialogDisable(true);
  //   setMemberId(associated.id);
  // };

  // const handleCloseDisableModal = () => {
  //   setOpenDialogDisable(false);
  // };

  // const handleDisableAssociated = async () => {
  //   try {
  //     const request = {
  //       "memberId": user.person.id,
  //       "sanctionedId": memberId,
  //       "description": commentDisable,
  //       "type": 0
  //     };
  //     await certifyAxios.post("/sanction/register", request);
  //     handleDisableSuccess();
  //   } catch (error) {
  //     handleDisableError(error.status);
  //     console.log(error);
  //   }
  //   setOpenDialogDisable(false);
  // };

  // const handleDisableSuccess = () => {
  //   enqueueSnackbar('Se inhabilitó correctamente a la asociada', {
  //     variant: 'success',
  //     anchorOrigin: {
  //       vertical: 'top',
  //       horizontal: 'right'
  //     },
  //     autoHideDuration: 3000,
  //     TransitionComponent: Slide
  //   });
  //   setDisable(true);
  //   const reqObj = {
  //     "firstResult": 1,
  //     "fullName": "",
  //     "maxResults": 5,
  //     "suspended": 0
  //   }
  //   setPage(0);

  //   // props.onPageSizeChange(limit);
  //   // console.log(`Children sending from handleLimitChange: reqObj = `, reqObj);
  //   props.onPageParamsChange(reqObj);
  // };

  // const handleDisableError = (message) => {
  //   enqueueSnackbar(`Hubo un error en la inhabilitación. Error ${message}`,
  //     {
  //       variant: 'error',
  //       anchorOrigin: {
  //         vertical: 'top',
  //         horizontal: 'right'
  //       },
  //       TransitionComponent: Slide
  //     });
  // };

  // // const handleOpenBlockModal = (associated) => {
  // //   setOpenDialogBlock(true);
  // //   setMemberId(associated.id);

  // // }

  // const handleCloseBlockModal = () => {
  //   setOpenDialogBlock(false);
  // }

  // const handleBlockAssociated = async () => {
  //   try {
  //     const request = {
  //       "memberId": user.person.id,
  //       "sanctionedId": memberId,
  //       "description": commentBlock,
  //       "type": 1
  //     };
  //     await certifyAxios.post("/sanction/register", request);
  //     handleBlockSuccess();
  //   } catch (error) {
  //     handleBlockError(error.status);
  //     console.log(error);
  //   }
  //   setOpenDialogBlock(false);
  // }
  // const handleBlockSuccess = () => {
  //   enqueueSnackbar('Se bloqueó correctamente a la asociada', {
  //     variant: 'success',
  //     anchorOrigin: {
  //       vertical: 'top',
  //       horizontal: 'right'
  //     },
  //     autoHideDuration: 3000,
  //     TransitionComponent: Slide
  //   });
  //   setBlock(true);
  //   const reqObj = {
  //     "firstResult": 1,
  //     "fullName": "",
  //     "maxResults": 5,
  //     "suspended": 0
  //   }
  //   setPage(0);

  //   // props.onPageSizeChange(limit);
  //   // console.log(`Children sending from handleLimitChange: reqObj = `, reqObj);
  //   props.onPageParamsChange(reqObj);
  // };

  // const handleBlockError = (message) => {
  //   enqueueSnackbar(`Hubo un error en el bloqueo. Error ${message}`,
  //     {
  //       variant: 'error',
  //       anchorOrigin: {
  //         vertical: 'top',
  //         horizontal: 'right'
  //       },
  //       TransitionComponent: Slide
  //     });
  // };

  const handleQueryChange = (event) => {
    event.persist();
    setQuery(event.target.value);
  };

  // const handlePageChange = (_event, newPage) => {

  //   // console.log(props);

  //   setPage(newPage);

  //   // const reqObj = {
  //   //   "firstResult": newPage + 1,
  //   //   "fullName": "",
  //   //   "maxResults": limit,
  //   //   "suspended": 0
  //   // };

  //   // // props.onPageNumberChange(page);
  //   // // console.log(`Children sending from handlePageChange: reqObj = `, reqObj);
  //   // props.onPageParamsChange(reqObj);
  // };

  // const handleLimitChange = (event) => {
  //   // console.log(props);

  //   setLimit(parseInt(event.target.value));

  //   const reqObj = {
  //     "firstResult": 1,
  //     "fullName": "",
  //     "maxResults": event.target.value,
  //     "suspended": 0
  //   }
  //   setPage(0);

  //   // props.onPageSizeChange(limit);
  //   // console.log(`Children sending from handleLimitChange: reqObj = `, reqObj);
  //   props.onPageParamsChange(reqObj);
  // };

  // useEffect(() => {
  //   localStorage.setItem('disable', disable);
  //   localStorage.setItem('block', block);

  // }, [props.numberOfResults, memberId, disable, block])
  // const aceptarRequest = async () =>{
  //   // console.log("Hola soy el cliente");
  //   // console.log(soy);
  //   const reqObj ={
  //   //  "id_cliente":soy.id_cliente,
  //   //  "tipo":0
  //   };

  //   try{
  //   const response= await certifyAxios.post('/person/client/update/mini', reqObj);
  //   console.log(response);
  //   props.getAsociadas();
  //   handleClose();
  //   }
  //       catch (err) {
  //     console.error(err);

  //     if (err.response) {
  //       console.log(err.response);
  //     } else if (err.request) {
  //       console.error(err.request);
  //     } else {
  //       console.error('Some other unknown error');
  //     }
  //   }
  // }

  // const dispatch = useDispatch();
  // const { empleado} = useSelector(
  //   (state) => state.empleadoRed
  //   // Solo para sacar estados
  // )
  
  // const navigate = useNavigate();
  // const modificarEmpleado = (associated) =>{
  //   // El store me traicionó
  //   // console.log(associated);
  //   // dispatch(setEmpleado(associated));
  //   // console.log("Hola soy el empleado");
  //   // console.log(empleado);
  //   // let a = JSON.parse(localStorage.getItem("empleado"));
  //   // console.log(a);
  //   localStorage.setItem("cliente",JSON.stringify(associated));
  //   navigate('/sapt/manager/client/modify');
  // }


  const filteredAssociated = applyFilters(props.associated, query, filters);
  const paginatedAssociated = filteredAssociated;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box p={1}>
            <TextField
              sx={{
                m: 0
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                )
              }}
              onChange={handleQueryChange}
              placeholder="Busque por nombres"
              value={query}

              variant="outlined"
              style={{display:'none'}}
            />
          </Box>
        </Grid>
      </Grid>

      <Card>
        
        <Divider />

        {paginatedAssociated.length === 0 ? (
          <>
            <Typography
              sx={{
                py: 10
              }}
              variant="h3"
              fontWeight="normal"
              color="text.secondary"
              align="center"
            >
              No se encontraron registros
            </Typography>
          </>
        ) : (
          <>
            <List sx={{ width: '100%', maxWidth: "100%", bgcolor: 'background.paper' }}>
              

              {paginatedAssociated.slice(0 * 5, (0 * 5) + 5).map((associated) => {
                    return (
                      <>
                        <ListItem alignItems="flex-start">
                          <ListItemText 
                            primaryTypographyProps={{fontSize: '20px'}} 
                            secondaryTypographyProps={{fontSize: '17px'}} 
                            primary={associated.nombres}
                            // secondary={associated.tags}
                          />
                          <Button variant="contained" onClick={()=>{
                             setOpen(true);
                        }}>
                             Descripcion
                          </Button>
                          </ListItem>
                        <Divider />
                      </>
                    );
                  })}
            </List>
            <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    Actividades
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
                    Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!
                    Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!
                    Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Aceptar</Button>
                    {/* <Button onClick={aceptarRequest} autoFocus>
                      Aceptar
                    </Button> */}
                  </DialogActions>
                </Dialog>
            <Box
          p={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography component="span" variant="subtitle1">
              Total:
            </Typography>{' '}
            <b>{paginatedAssociated.length}</b>
          </Box>
          {/* <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={props.numberOfResults}
            rowsPerPage={limit}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}         
          /> */}
        </Box>
          </>
        )}
      </Card>
    </>
  );
};

ResultsActive.propTypes = {
  associated: PropTypes.array.isRequired,
  // onPageParamsChange: PropTypes.func,
  // numberOfResults: PropTypes.number
};

ResultsActive.defaultProps = {
  associated: [],
  numberOfResults: 555
};

export default ResultsActive;
