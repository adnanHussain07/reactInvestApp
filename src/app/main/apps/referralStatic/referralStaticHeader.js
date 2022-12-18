import * as React from 'react';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import i18next from 'i18next';
import { isEmptyObject } from 'app/auth/store/commonMethods';
import moment from 'moment';
import Tooltip from '@mui/material/Tooltip';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// import { changeItemStatus, changeStoreNbr } from 'app/auth/store/sharedData';
// import { checkPermission } from 'app/auth/store/loginSlice';
// import { Permissions } from 'app/auth/store/constants';

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function ReferralStaticHeader(props) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const mainTheme = useSelector(selectMainTheme);
  // const driverPagination = useSelector(({ auth }) => auth.common.driverPagination);
  // const itemPagination = useSelector(({ auth }) => auth.shared.itemPagination);
  // const itemStatus = useSelector(({ auth }) => auth.shared.itemStatus);
  // const storeNbr = useSelector(({ auth }) => auth.shared.storeNbr);
  // const itemRentee = useSelector(({ auth }) => auth.shared.itemRentee);
  // const itemName = useSelector(({ auth }) => auth.shared.itemName);
  // const itemID = useSelector(({ auth }) => auth.shared.itemID);

  const mdDown = useMediaQuery(theme.breakpoints.down('lg'));

  const [valueFrom, setValueFrom] = React.useState(moment().subtract(6, 'months'));
  const [valueTo, setValueTo] = React.useState(moment());
  const [getSearchRentee, setSearchRentee] = React.useState("");
  const [getSearchID, setSearchID] = React.useState("");
  const [getSearchName, setSearchName] = React.useState("");
  const [getSerialNo, setSerialNo] = React.useState("");

  // React.useEffect(() => {
  //   let mounted = true;
  //   if (mounted) {
  //     callGo();
  //     dispatch(rentUsersService('?isall=1'));
  //   }

  //   return () => mounted = false;
  // }, []);

  // React.useEffect(() => {
  //   let mounted = true;
  //   if (mounted) {
  //     if (itemPagination && !isEmptyObject(itemPagination) && driverPagination.pageNo && driverPagination.pageSize) {
  //       callGo();
  //     }
  //   }

  //   return () => mounted = false;
  // }, [itemPagination]);

  // function callGo() {
  //   dispatch(setProductsLoader(true));
  //   const status = itemStatus && itemStatus != '0' ? `&status=${itemStatus}` : "";
  //   const store = storeNbr && storeNbr != '0' ? `&present_storenumber=${storeNbr}` : "";
  //   const rentee = getSearchRentee && getSearchRentee != '' ? `&rentee=${getSearchRentee}` : "";
  //   const itemid = getSearchID && getSearchID != '' ? `&itemid=${getSearchID}` : "";
  //   const itemName = getSearchName && getSearchName != '' ? `&name=${getSearchName}` : "";
  //   const serNo = getSerialNo && getSerialNo != '' ? `&SerialNo=${getSerialNo}` : "";
  //   const body = `?pageNo=${itemPagination.pageNo}&count=${itemPagination.pageSize}${status + rentee + store + itemid + itemName + serNo}`;
  //   dispatch(getProducts(body));
  // }

  const handleChangeFrom = (newValue) => {
    setValueFrom(newValue);
  };
  const handleChangeTo = (newValue) => {
    setValueTo(newValue);
  };

  // function exportSheet() {
  //   const status = itemStatus && itemStatus != '0' ? itemStatus : false;
  //   const store = storeNbr && storeNbr != '0' ? storeNbr : false;
  //   const rentee = getSearchRentee && getSearchRentee != '' ? getSearchRentee : false;
  //   const itemid = getSearchID && getSearchID != '' ? getSearchID : false;
  //   const itemName = getSearchName && getSearchName != '' ? getSearchName : false;
  //   const serNo = getSerialNo && getSerialNo != '' ? getSerialNo : false;
  //   const body = {
  //     SerialNo: serNo,
  //     status: status,
  //     present_storenumber: store,
  //     rentee: rentee,
  //     name: itemName,
  //     itemid: itemid,
  //     rentee_id: false,
  //     type: false,
  //   };
  //   dispatch(exportService(body));
  // }

  return (
    // mdDown ? <FuseScrollbars className="">
    //   <motion.div variants={item} className="widget flex w-full">
    //     <div className="w-full flex flex-col justify-between">
    //       <div className="">
    //         <Icon
    //           component={motion.span}
    //           initial={{ scale: 0 }}
    //           animate={{ scale: 1, transition: { delay: 0.2 } }}
    //           className="text-15 md:text-18"
    //         >
    //           developer_board
    //         </Icon>
    //         <Typography
    //           component={motion.span}
    //           initial={{ x: -20 }}
    //           animate={{ x: 0, transition: { delay: 0.2 } }}
    //           delay={300}
    //           className="text-12 md:text-24 mx-2 font-semibold"
    //         >
    //           {i18next.t(`navigation:ITEMS`)}
    //         </Typography>
    //       </div>
    //       <div className="flex px-64 mt-8">
    //         <motion.div initial={{ x: -20 }} animate={{ x: 0, transition: { delay: 0.3 } }}>
    //           <Box className="mx-4 mt-8">
    //             <FormControl fullWidth>
    //               <InputLabel id="demo-simple-select-label">
    //                 {i18next.t(`navigation:SELECTSTATUS`)}
    //               </InputLabel>
    //               <Select
    //                 labelId="demo-simple-select-label"
    //                 id="demo-simple-select"
    //                 value={itemStatus}
    //                 label={i18next.t(`navigation:SELECTSTATUS`)}
    //                 onChange={(e) => dispatch(changeItemStatus(e.target.value))}
    //                 size="small"
    //               >
    //                 <MenuItem autoFocus={false} value="0">{i18next.t(`navigation:ALLSTATUS`)}</MenuItem>
    //                 <MenuItem autoFocus={false} value="rented">{i18next.t(`navigation:RENTED`)}</MenuItem>
    //                 <MenuItem autoFocus={false} value="available">{i18next.t(`navigation:NONRENTED`)}</MenuItem>
    //                 <MenuItem autoFocus={false} value="maintenance">{i18next.t(`navigation:MAINTE`)}</MenuItem>
    //               </Select>
    //             </FormControl>
    //           </Box>
    //         </motion.div>
    //         <motion.div initial={{ x: -20 }} animate={{ x: 0, transition: { delay: 0.3 } }}>
    //           <Box className="mx-4 mt-8">
    //             <FormControl fullWidth>
    //               <InputLabel id="demo-simple-select-label">
    //                 {i18next.t(`navigation:SELECTSTORE`)}
    //               </InputLabel>
    //               <Select
    //                 labelId="demo-simple-select-label"
    //                 id="demo-simple-select"
    //                 value={storeNbr}
    //                 label={i18next.t(`navigation:SELECTSTORE`)}
    //                 onChange={(e) => dispatch(changeStoreNbr(e.target.value))}
    //                 size="small"
    //               >
    //                 <MenuItem autoFocus={false} value="0">{i18next.t(`navigation:ALLSTORE`)}</MenuItem>
    //                 <MenuItem autoFocus={false} value="1">{i18next.t(`navigation:STORE1`)}</MenuItem>
    //                 <MenuItem autoFocus={false} value="2">{i18next.t(`navigation:STORE2`)}</MenuItem>
    //                 <MenuItem autoFocus={false} value="3">{i18next.t(`navigation:STORE3`)}</MenuItem>
    //                 <MenuItem autoFocus={false} value="4">{i18next.t(`navigation:STORE4`)}</MenuItem>
    //               </Select>
    //             </FormControl>
    //           </Box>
    //         </motion.div>
    //       </div>
    //       {/* <div className="flex px-64 mt-8">
    //         <motion.div initial={{ x: -20 }} animate={{ x: 0, transition: { delay: 0.3 } }}>
    //           <Box className="mx-4 mt-8">
    //             <FormControl fullWidth>
    //               <InputLabel id="demo-simple-select-label">
    //                 {i18next.t(`navigation:SELECTSTORE`)}
    //               </InputLabel>
    //               <Select
    //                 labelId="demo-simple-select-label"
    //                 id="demo-simple-select"
    //                 value={storeNbr}
    //                 label={i18next.t(`navigation:SELECTSTORE`)}
    //                 onChange={(e) => dispatch(changeStoreNbr(e.target.value))}
    //                 size="small"
    //               >
    //                 <MenuItem autoFocus={false} value="0">{i18next.t(`navigation:NONE`)}</MenuItem>
    //                 <MenuItem autoFocus={false} value="1">{i18next.t(`navigation:STORE1`)}</MenuItem>
    //                 <MenuItem autoFocus={false} value="2">{i18next.t(`navigation:STORE2`)}</MenuItem>
    //                 <MenuItem autoFocus={false} value="3">{i18next.t(`navigation:STORE3`)}</MenuItem>
    //                 <MenuItem autoFocus={false} value="4">{i18next.t(`navigation:STORE4`)}</MenuItem>
    //               </Select>
    //             </FormControl>
    //           </Box>
    //         </motion.div>
    //       </div> */}
    //       <div className="flex px-64 mt-8">
    //         <ThemeProvider theme={mainTheme}>
    //           <Tooltip
    //             title={i18next.t(`navigation:PRESSENTER`)}
    //             placement={'top'}
    //           >
    //             <Paper
    //               component={motion.div}
    //               initial={{ y: -20, opacity: 0 }}
    //               animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
    //               className="flex items-center w-full max-w-224 px-8 py-4 rounded-16 shadow"
    //             >
    //               <Icon color="action">search</Icon>
    //               <Input
    //                 placeholder="Search Item Name"
    //                 className="flex flex-1 mx-8"
    //                 disableUnderline
    //                 fullWidth
    //                 onChange={(e) => setSearchName(e.target.value)}
    //                 onKeyPress={(e) => {
    //                   if (e.key == 'Enter') {
    //                     callGo();
    //                   }
    //                 }}
    //                 value={getSearchName}
    //                 inputProps={{
    //                   'aria-label': 'Search',
    //                 }}
    //                 size='small'
    //               />
    //             </Paper>
    //           </Tooltip>
    //         </ThemeProvider>
    //       </div>
    //       <div className="flex px-64 mt-8">
    //         <ThemeProvider theme={mainTheme}>
    //           <Tooltip
    //             title={i18next.t(`navigation:PRESSENTER`)}
    //             placement={'top'}
    //           >
    //             <Paper
    //               component={motion.div}
    //               initial={{ y: -20, opacity: 0 }}
    //               animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
    //               className="flex items-center w-full max-w-224 px-8 py-4 rounded-16 shadow"
    //             >
    //               <Icon color="action">search</Icon>
    //               <Input
    //                 placeholder="Search Item ID"
    //                 className="flex flex-1 mx-8"
    //                 disableUnderline
    //                 fullWidth
    //                 onChange={(e) => setSearchID(e.target.value)}
    //                 onKeyPress={(e) => {
    //                   if (e.key == 'Enter') {
    //                     callGo();
    //                   }
    //                 }}
    //                 value={getSearchID}
    //                 inputProps={{
    //                   'aria-label': 'Search',
    //                 }}
    //                 size='small'
    //               />
    //             </Paper>
    //           </Tooltip>
    //         </ThemeProvider>
    //       </div>
    //       <div className="flex px-64 mt-8">
    //         <ThemeProvider theme={mainTheme}>
    //           <Tooltip
    //             title={i18next.t(`navigation:PRESSENTER`)}
    //             placement={'top'}
    //           >
    //             <Paper
    //               component={motion.div}
    //               initial={{ y: -20, opacity: 0 }}
    //               animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
    //               className="flex items-center w-full max-w-224 px-8 py-4 rounded-16 shadow"
    //             >
    //               <Icon color="action">search</Icon>
    //               <Input
    //                 placeholder="Search Rentee"
    //                 className="flex flex-1 mx-8"
    //                 disableUnderline
    //                 fullWidth
    //                 onChange={(e) => setSearchRentee(e.target.value)}
    //                 onKeyPress={(e) => {
    //                   if (e.key == 'Enter') {
    //                     callGo();
    //                   }
    //                 }}
    //                 value={getSearchRentee}
    //                 inputProps={{
    //                   'aria-label': 'Search',
    //                 }}
    //                 size='small'
    //               />
    //             </Paper>
    //           </Tooltip>
    //         </ThemeProvider>
    //       </div>
    //       <div className="text-right">
    //         <motion.div
    //           initial={{ opacity: 0, x: 20 }}
    //           animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
    //         >
    //           <Button
    //             className="whitespace-nowrap"
    //             variant="contained"
    //             color="secondary"
    //             size='small'
    //             onClick={callGo}
    //           >
    //             {i18next.t(`navigation:GO`)}
    //           </Button>
    //           {dispatch(checkPermission(Permissions.EXPORT)) && dispatch(checkPermission(Permissions.EXPORT)) == "allowed" && (
    //             <Button
    //               className="whitespace-nowrap ml-6"
    //               variant="contained"
    //               color="info"
    //               size='small'
    //               onClick={exportSheet}
    //             >
    //               {i18next.t(`navigation:EXPORT`)}
    //             </Button>
    //           )}
    //         </motion.div>
    //       </div>
    //     </div>
    //   </motion.div>
    // </FuseScrollbars>

    //   :




    <div className="flex flex-1 w-full items-center justify-between">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="flex items-center">
          <Icon
            component={motion.span}
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { delay: 0.2 } }}
            className="text-54 md:text-72"
          >
            family_restroom
          </Icon>
          <div className="flex flex-col items-center sm:items-start mb-16 sm:mb-0">
            <Typography
              component={motion.span}
              initial={{ x: -20 }}
              animate={{ x: 0, transition: { delay: 0.2 } }}
              delay={300}
              className="text-16 md:text-24 mx-12 font-semibold"
            >
              {i18next.t(`navigation:REFERRALSTATS`)}
            </Typography>
          </div>
        </div>
      </motion.div>

      {/* <div className="flex flex-1 items-center justify-center px-12">
          <div className='mx-8'>
            <motion.div initial={{ x: -20 }} animate={{ x: 0, transition: { delay: 0.3 } }}>
              <Box className="mx-4 mt-8">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    {i18next.t(`navigation:SELECTSTATUS`)}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={itemStatus}
                    label={i18next.t(`navigation:SELECTSTATUS`)}
                    // onChange={(e) => dispatch(changeItemStatus(e.target.value))}
                    size="small"
                  >
                    <MenuItem autoFocus={false} value="0">{i18next.t(`navigation:ALLSTATUS`)}</MenuItem>
                    <MenuItem autoFocus={false} value="rented">{i18next.t(`navigation:RENTED`)}</MenuItem>
                    <MenuItem autoFocus={false} value="available">{i18next.t(`navigation:NONRENTED`)}</MenuItem>
                    <MenuItem autoFocus={false} value="maintenance">{i18next.t(`navigation:MAINTE`)}</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </motion.div>
          </div>
          <div className='mx-8'>
            <motion.div initial={{ x: -20 }} animate={{ x: 0, transition: { delay: 0.3 } }}>
              <Box className="mx-4 mt-8">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    {i18next.t(`navigation:SELECTSTORE`)}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={storeNbr}
                    label={i18next.t(`navigation:SELECTSTORE`)}
                    // onChange={(e) => dispatch(changeStoreNbr(e.target.value))}
                    size="small"
                  >
                    <MenuItem autoFocus={false} value="0">{i18next.t(`navigation:ALLSTORE`)}</MenuItem>
                    <MenuItem autoFocus={false} value="1">{i18next.t(`navigation:STORE1`)}</MenuItem>
                    <MenuItem autoFocus={false} value="2">{i18next.t(`navigation:STORE2`)}</MenuItem>
                    <MenuItem autoFocus={false} value="3">{i18next.t(`navigation:STORE3`)}</MenuItem>
                    <MenuItem autoFocus={false} value="4">{i18next.t(`navigation:STORE4`)}</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </motion.div>
          </div>
          <ThemeProvider theme={mainTheme}>
            <Tooltip
              title={i18next.t(`navigation:PRESSENTER`)}
              placement={'top'}
            >
              <Paper
                component={motion.div}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
                className="flex items-center w-full max-w-224 px-8 py-4 rounded-16 shadow mx-8"
              >
                <Icon color="action">search</Icon>
                <Input
                  placeholder="Search Item Name"
                  className="flex flex-1 mx-8"
                  disableUnderline
                  fullWidth
                  // onChange={(e) => setSearchName(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key == 'Enter') {
                      // callGo();
                    }
                  }}
                  value={getSearchName}
                  inputProps={{
                    'aria-label': 'Search',
                  }}
                  size='small'
                />
              </Paper>
            </Tooltip>
          </ThemeProvider>
          <ThemeProvider theme={mainTheme}>
            <Tooltip
              title={i18next.t(`navigation:PRESSENTER`)}
              placement={'top'}
            >
              <Paper
                component={motion.div}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
                className="flex items-center w-full max-w-224 px-8 py-4 rounded-16 shadow  mx-8"
              >
                <Icon color="action">search</Icon>
                <Input
                  placeholder="Search Item ID"
                  className="flex flex-1 mx-8"
                  disableUnderline
                  fullWidth
                  // onChange={(e) => setSearchID(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key == 'Enter') {
                      // callGo();
                    }
                  }}
                  value={getSearchID}
                  inputProps={{
                    'aria-label': 'Search',
                  }}
                  size='small'
                />
              </Paper>
            </Tooltip>
          </ThemeProvider>
          <ThemeProvider theme={mainTheme}>
            <Tooltip
              title={i18next.t(`navigation:PRESSENTER`)}
              placement={'top'}
            >
              <Paper
                component={motion.div}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
                className="flex items-center w-full max-w-224 px-8 py-4 rounded-16 shadow  mx-8"
              >
                <Icon color="action">search</Icon>
                <Input
                  placeholder="Search Rentee"
                  className="flex flex-1 mx-8"
                  disableUnderline
                  fullWidth
                  // onChange={(e) => setSearchRentee(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key == 'Enter') {
                      // callGo();
                    }
                  }}
                  value={getSearchRentee}
                  inputProps={{
                    'aria-label': 'Search',
                  }}
                  size='small'
                />
              </Paper>
            </Tooltip>
          </ThemeProvider>
          <ThemeProvider theme={mainTheme}>
            <Tooltip
              title={i18next.t(`navigation:SERNO`)}
              placement={'top'}
            >
              <Paper
                component={motion.div}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
                className="flex items-center w-full max-w-224 px-8 py-4 rounded-16 shadow  mx-8"
              >
                <Icon color="action">search</Icon>
                <Input
                  placeholder="Search Serial No"
                  className="flex flex-1 mx-8"
                  disableUnderline
                  fullWidth
                  // onChange={(e) => setSerialNo(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key == 'Enter') {
                      // callGo();
                    }
                  }}
                  value={getSerialNo}
                  inputProps={{
                    'aria-label': 'Search',
                  }}
                  size='small'
                />
              </Paper>
            </Tooltip>
          </ThemeProvider>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
        >
          <Button
            className="whitespace-nowrap"
            variant="contained"
            color="secondary"
            size='medium'
            // onClick={callGo}
          >
            {i18next.t(`navigation:GO`)}
          </Button>
        </motion.div> */}
    </div>
  );
}

export default ReferralStaticHeader;
