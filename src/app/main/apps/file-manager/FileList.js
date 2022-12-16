import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { setSelectedItem, selectFiles } from './store/filesSlice';
import StyledIcon from './StyledIcon';

function FileList(props) {
  const dispatch = useDispatch();
  const files = useSelector(selectFiles);
  const selectedItemId = useSelector(({ fileManagerApp }) => fileManagerApp.files.selectedItemId);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0.8 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
    >
      <Table className="simple borderless">
        <TableHead>
          <TableRow>
            <TableCell className="max-w-64 w-64 p-0 text-center"> </TableCell>
            <TableCell>Name</TableCell>
            <TableCell className="hidden sm:table-cell">Type</TableCell>
            <TableCell className="hidden sm:table-cell">Owner</TableCell>
            <TableCell className="text-center hidden sm:table-cell">Size</TableCell>
            <TableCell className="hidden sm:table-cell">Modified</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {files.map((item) => {
            return (
              <TableRow
                key={item.id}
                hover
                onClick={(event) => dispatch(setSelectedItem(item.id))}
                selected={item.id === selectedItemId}
                className="cursor-pointer h-64"
              >
                <TableCell className="max-w-64 w-64 p-0 text-center">
                  <StyledIcon type={item.type} />
                </TableCell>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell className="hidden sm:table-cell">{item.type}</TableCell>
                <TableCell className="hidden sm:table-cell">{item.owner}</TableCell>
                <TableCell className="text-center hidden sm:table-cell">
                  {item.size === '' ? '-' : item.size}
                </TableCell>
                <TableCell className="hidden sm:table-cell">{item.modified}</TableCell>
                <Hidden lgUp>
                  <TableCell>
                    <IconButton
                      onClick={(ev) => props.pageLayout.current.toggleRightSidebar()}
                      aria-label="open right sidebar"
                      size="large"
                    >
                      <Icon>info</Icon>
                    </IconButton>
                  </TableCell>
                </Hidden>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </motion.div>
  );
}

export default FileList;
