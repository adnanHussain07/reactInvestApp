import _ from '@lodash';
import { styled, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import Icon from '@mui/material/Icon';
import InputLabel from '@mui/material/InputLabel';
import LinearProgress from '@mui/material/LinearProgress';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import withReducer from 'app/store/withReducer';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import reducer from '../store';
import { getCategories, selectCategories } from '../store/categoriesSlice';
import { getCourses, selectCourses } from '../store/coursesSlice';
import i18next from 'i18next';
import history from '@history';
import { Hidden } from '@mui/material';
import CryptoData from 'app/fuse-layouts/shared-components/cryptoData/CryptoData';
import PricingStyle2Page from 'app/main/pages/pricing/style-2/PricingStyle2Page';

const Root = styled('div')(({ theme }) => ({
  '& .header': {
    background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    '& .header-icon': {
      position: 'absolute',
      top: -64,
      left: 0,
      opacity: 0.04,
      fontSize: 512,
      width: 512,
      height: 512,
      pointerEvents: 'none',
    },
  },
}));

function Courses(props) {
  const dispatch = useDispatch();
  const courses = useSelector(selectCourses);
  const categories = useSelector(selectCategories);

  const theme = useTheme();
  const [filteredData, setFilteredData] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getCourses());
  }, [dispatch]);

  useEffect(() => {
    function getFilteredArray() {
      if (searchText.length === 0 && selectedCategory === 'all') {
        return courses;
      }

      return _.filter(courses, (item) => {
        if (selectedCategory !== 'all' && item.category !== selectedCategory) {
          return false;
        }
        return item.title.toLowerCase().includes(searchText.toLowerCase());
      });
    }

    if (courses) {
      setFilteredData(getFilteredArray());
    }
  }, [courses, searchText, selectedCategory]);

  function handleSelectedCategory(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchText(event) {
    setSearchText(event.target.value);
  }

  function buttonStatus(course) {
    switch (course.activeStep) {
      case course.totalSteps:
        return 'Completed';
      case 0:
        return 'Start';
      default:
        return 'Continue';
    }
  }

  return (
    <Root className="flex flex-col flex-auto flex-shrink-0 w-full">
      <div
        style={{ backgroundImage: 'url(assets/images/background.jpg)' }}
        className="header relative overflow-hidden flex flex-shrink-0 items-center justify-center h-200 sm:h-288">
        <div className="flex flex-col max-w-2xl mx-auto w-full p-24 sm:p-32">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0 } }}>
            <Typography color="inherit" className="text-24 sm:text-44 font-bold tracking-tight text-center">
              {i18next.t(`navigation:WELVENAX`)}
            </Typography>
          </motion.div>
          <Hidden lgDown>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3 } }}>
              <Typography
                color="inherit"
                className="text-12 sm:text-14 mt-8 sm:mt-16 opacity-75 leading-tight sm:leading-loose text-center"
              >
                {i18next.t(`navigation:VENAXWORLD`)}
              </Typography>
            </motion.div>
          </Hidden>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.4 } }}>
            <Typography color="inherit" className="text-18 sm:text-20 mt-8 sm:mt-16 opacity-75 leading-tight sm:leading-loose text-center">
              {i18next.t(`navigation:WELSUBHEAD`)}
            </Typography>
          </motion.div>
        </div>

        {/* <Icon className="header-icon">attach_money</Icon> */}
      </div>
      {/* 2xl */}
      <div className="flex flex-col flex-1 max-w-full w-full mx-auto px-8 sm:px-16 py-24">
        <div className="flex flex-col sm:flex-row items-center justify-between py-24">
          <div className='mx-6'>
            <Typography color="inherit" className="text-18 font-bold sm:text-20 mt-8 sm:mt-16 opacity-75 leading-tight sm:leading-loose text-center">
              {i18next.t(`navigation:WELPICHEAD1`)}
            </Typography>
            <Typography color="inherit" className="text-12 sm:text-16 mt-8 sm:mt-16 opacity-75 leading-tight sm:leading-loose text-center">
              {i18next.t(`navigation:WELPICHEAD2`)}
            </Typography>
          </div>

          <img
            className='w-full'
            src='assets/images/header.png'
          />
        </div>

        <div className="flex sm:flex-row items-center justify-center py-24">
          <div className='mx-6'>
            <Typography color="inherit" className="text-24 font-bold sm:text-32 mt-8 sm:mt-16 opacity-75 leading-tight sm:leading-loose text-center">
              {i18next.t(`navigation:MARKETCAPWIDG`)}
            </Typography>
            <Typography color="inherit" className="text-18 font-semibold sm:text-24 mt-8 sm:mt-16 opacity-75 leading-tight sm:leading-loose text-center">
              {i18next.t(`navigation:MARKETCAP1`)}
            </Typography>
            <Typography color="inherit" className="text-12 sm:text-18 mt-8 sm:mt-16 opacity-75 leading-tight sm:leading-loose text-center">
              {i18next.t(`navigation:MARKETCAP2`)}
            </Typography>
          </div>
        </div>

        <CryptoData />

        <PricingStyle2Page />
      </div>
    </Root>
  );
}

export default withReducer('academyApp', reducer)(Courses);
