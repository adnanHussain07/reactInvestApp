import FusePageSimple from '@fuse/core/FusePageSimple';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { blue, green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function ClassicSearchPage() {
  const theme = useTheme();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/search').then((res) => {
      setData(res.data);
    });
  }, []);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <FusePageSimple
      header={
        <div className="flex flex-1 items-center p-16 sm:p-24 max-w-md">
          <ThemeProvider theme={theme}>
            <Paper className="flex items-center h-44 w-full px-16 rounded-16 shadow">
              <Input
                placeholder="Search..."
                disableUnderline
                fullWidth
                inputProps={{
                  'aria-label': 'Search',
                }}
              />
              <Icon color="action">search</Icon>
            </Paper>
          </ThemeProvider>
        </div>
      }
      content={
        <div className="p-16 pt-0 sm:p-24 sm:pt-0 max-w-md">
          {data.length > 0 && (
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.div variants={item}>
                <Typography color="textSecondary" className="text-13 mt-12 mb-24">
                  {data.length} results
                </Typography>
              </motion.div>

              {data.map((_item) => (
                <motion.div variants={item} className="mb-28" key={_item.id}>
                  <Typography
                    className="text-18 cursor-pointer"
                    sx={{
                      color: blue[800],
                    }}
                  >
                    {_item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: green[800],
                    }}
                  >
                    {_item.url}
                  </Typography>
                  <Typography className="text-13">{_item.excerpt}</Typography>
                </motion.div>
              ))}
            </motion.div>
          )}

          <div className="flex justify-center mt-32">
            <div className="flex item-center">
              <IconButton className="w-32" size="large">
                <Icon className="text-20">
                  {theme.direction === 'ltr' ? 'chevron_left' : 'chevron_right'}
                </Icon>
              </IconButton>
              <Button className="font-normal min-w-32 h-48 p-0 px-8">1</Button>
              <Button className="font-normal min-w-32 h-48 p-0 px-8">2</Button>
              <Button className="font-normal min-w-32 h-48 p-0 px-8">3</Button>
              <Button className="font-normal min-w-32 h-48 p-0 px-8">4</Button>
              <Button className="font-normal min-w-32 h-48 p-0 px-8">5</Button>
              <IconButton className="w-32" size="large">
                <Icon className="text-20">
                  {theme.direction === 'ltr' ? 'chevron_right' : 'chevron_left'}
                </Icon>
              </IconButton>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default ClassicSearchPage;
