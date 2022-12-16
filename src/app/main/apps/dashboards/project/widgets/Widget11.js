import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

function Widget11(props) {
  return (
    <Paper className="w-full rounded-20 shadow overflow-hidden">
      <div className="flex items-center justify-between p-20 h-64">
        <Typography className="text-16 font-medium">{props.widget.title}</Typography>
        <Typography className="text-11 font-500 rounded-4 text-white bg-blue px-8 py-4">
          {`${props.widget.table.rows.length} Members`}
        </Typography>
      </div>
      <div className="table-responsive">
        <Table className="w-full min-w-full" size="small">
          <TableHead>
            <TableRow>
              {props.widget.table.columns.map((column) => {
                switch (column.id) {
                  case 'avatar': {
                    return (
                      <TableCell key={column.id} className="whitespace-nowrap p-8 px-16">
                        {column.title}
                      </TableCell>
                    );
                  }
                  default: {
                    return (
                      <TableCell key={column.id}>
                        <Typography
                          color="textSecondary"
                          className="font-semibold whitespace-nowrap p-8 px-16"
                        >
                          {column.title}
                        </Typography>
                      </TableCell>
                    );
                  }
                }
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.widget.table.rows.map((row) => (
              <TableRow key={row.id} className="h-64">
                {row.cells.map((cell) => {
                  switch (cell.id) {
                    case 'avatar': {
                      return (
                        <TableCell key={cell.id} component="th" scope="row" className="px-16">
                          <Avatar src={cell.value} />
                        </TableCell>
                      );
                    }
                    case 'name': {
                      return (
                        <TableCell
                          key={cell.id}
                          component="th"
                          scope="row"
                          className="truncate font-semibold"
                        >
                          {cell.value}
                        </TableCell>
                      );
                    }
                    default: {
                      return (
                        <TableCell key={cell.id} component="th" scope="row" className="truncate">
                          {cell.value}
                        </TableCell>
                      );
                    }
                  }
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Paper>
  );
}

export default memo(Widget11);
