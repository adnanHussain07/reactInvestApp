import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import Chip from '@mui/material/Chip';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import i18next from 'i18next';
import { withRouter } from 'react-router-dom';
import FuseLoading from '@fuse/core/FuseLoading';
import DriverTableHead from './withdrawApproveTableHead';
// import { setRequestLoader } from 'app/auth/store/loadersSlice';
import { setWithdrawApprovePagination } from 'app/auth/store/sharedData';
import Button from '@mui/material/Button';
import history from '@history';
import { DateTimeFormatNew } from 'app/auth/store/constants';
import moment from 'moment';
// import { changeItemPagination, changeLogItemName } from 'app/auth/store/sharedData';
import { Icon, IconButton } from '@mui/material';
// import AlertDialog from 'app/fuse-layouts/shared-components/AlertDialog';
// import EditDialog from 'app/fuse-layouts/shared-components/EditDialog';
// import { checkPermission } from 'app/auth/store/loginSlice';

const msg = "ITEMDELMSG";
const headmsg = "ITEMDELHEAD";

function WithdrawApproveTable(props) {
  const dispatch = useDispatch();
  // const loader = useSelector(({ auth }) => auth.loaders.driversLoader);
  const loader = false;
  const data = useSelector(({ auth }) => auth.sharedData.withdrawApproveData ? auth.sharedData.withdrawApproveData : []);
  const language = useSelector(({ i18n }) => i18n.language ? i18n.language : "");
  const totalCount = useSelector(({ auth }) => auth.sharedData.withdrawApprovePagination ? auth.sharedData.withdrawApprovePagination : 0);

  const [selected, setSelected] = useState([]);
  const [detData, setDelData] = useState({});
  const [editData, setEditData] = useState({});
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState({
    direction: 'asc',
    id: null,
  });

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      // setTimeout(() => {
      //   dispatch(setRequestLoader(false));
      // }, 2000);
    }
  }, []);

  function handleChangePage(event, value) {
    const body = {
      pageNo: value + 1,
      pageSize: rowsPerPage
    }
    dispatch(setWithdrawApprovePagination(body));
    setPage(value);
  }

  function handleChangeRowsPerPage(event) {
    const body = {
      pageNo: page + 1,
      pageSize: event.target.value
    }
    dispatch(setWithdrawApprovePagination(body));
    setRowsPerPage(event.target.value);
  }

  function onDetailClick(n) {
    dispatch(setReqRadio(DefFilters.ALL));
    history.push({
      pathname: `/apps/redc/requests`,
      search: `?did=${n.id}`
    });
  }

  const handleClickOpen = (n) => {
    if (!open) {
      setDelData(n);
    } else {
      setDelData({});
    }
    setOpen(!open);
  };

  const handleEditOpen = (n) => {
    if (!open) {
      setEditData(n);
    } else {
      setEditData({});
    }
    setEditOpen(!editOpen);
  };

  function redirectLog(e) {
    const name = e && e.name ? e.name : "";
    if (name) {
      dispatch(changeLogItemName(name));
      history.push({
        pathname: '/apps/jic/logs',
      });
    }
  }

  return loader ? <FuseLoading /> : (
    <div className="w-full flex flex-col">
      <FuseScrollbars className="flex-grow overflow-x-auto">
        <Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
          <DriverTableHead />

          <TableBody>
            {data && data.length > 0 ? data.map((n, key) => {
              return (
                <TableRow
                  className="h-72 cursor-pointer"
                  hover
                  // tabIndex={-1}
                  key={key}
                >
                  <TableCell className="p-4 md:p-16" component="th" scope="row" style={{ paddingLeft: 22 }}
                  // onClick={() => {
                  //   onDetailClick(n);
                  // }}
                  >
                    <strong
                      // onClick={() => redirectLog(n)}
                      style={{ cursor: 'pointer', color: 'linear-gradient(to right, #194a4f 0%, #24585d 100%)', textDecoration: 'underline' }}
                    >
                      {n.firstname ? n.firstname : ""}
                    </strong>
                  </TableCell>
                  <TableCell className="p-4 md:p-16" component="th" scope="row" align='center'>
                    <strong
                      // onClick={() => redirectLog(n)}
                      style={{ cursor: 'pointer', color: 'linear-gradient(to right, #194a4f 0%, #24585d 100%)', textDecoration: 'underline' }}
                    >
                      {n.lastname ? n.lastname : ""}
                    </strong>
                  </TableCell>
                  <TableCell className="p-4 md:p-16" component="th" scope="row" align='center'>
                    {n.gateway && n.gateway == Gateways.btc ? "BTC" : "USDT"}
                  </TableCell>
                  <TableCell className="p-4 md:p-16" component="th" scope="row">
                    {n.amount ? n.amount : ""}
                    {/* {n.States && n.States.length > 0 && n.States.map((ee, io) => {
                      return (
                        <Chip
                          className='m-4'
                          key={io}
                          label={language && language == "ar" ? ee.StateNameAr : ee.StateNameEn}
                        />
                      )
                    })} */}
                  </TableCell>
                  <TableCell className="p-4 md:p-16" component="th" scope="row" align='center'>
                    {n.createdon ? moment(n.createdon).format(DateTimeFormatNew) : "--"}
                    {/* {n.Category && n.Category.length > 0 && n.Category.map((ee, io) => {
                      return (
                        <Chip
                          className='m-4'
                          key={io}
                          label={language && language == "ar" ? ee.CategoryNameAr : ee.CategoryNameEn}
                        />
                      )
                    })} */}
                  </TableCell>
                  <TableCell className="p-4 md:p-16" component="th" scope="row" align='center'>
                    <Chip
                      className='m-4'
                      label={i18next.t(`navigation:${"APPROVE"}`)}
                    />
                  </TableCell>
                </TableRow>
              );
            }) :
              <></>
            }
          </TableBody>
        </Table>
      </FuseScrollbars>

      <TablePagination
        className="flex-shrink-0 border-t-1"
        component="div"
        count={totalCount}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default withRouter(WithdrawApproveTable);
