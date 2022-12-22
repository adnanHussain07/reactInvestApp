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
        {/* {useMemo(() => {
          const container = {
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          };

          const item = {
            hidden: {
              opacity: 0,
              y: 20,
            },
            show: {
              opacity: 1,
              y: 0,
            },
          };

          return (
            filteredData &&
            (filteredData.length > 0 ? (
              <motion.div
                className="flex flex-wrap py-24"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {filteredData.map((course) => {
                  const category = categories.find((_cat) => _cat.value === course.category);
                  return (
                    <motion.div
                      variants={item}
                      className="w-full pb-24 sm:w-1/2 lg:w-1/3 sm:p-16"
                      key={course.id}
                    >
                      <Card className="flex flex-col h-256 shadow">
                        <div
                          className="flex flex-shrink-0 items-center justify-between px-24 h-64"
                          style={{
                            background: category.color,
                            color: theme.palette.getContrastText(category.color),
                          }}
                        >
                          <Typography className="font-medium truncate" color="inherit">
                            {category.label}
                          </Typography>
                          <div className="flex items-center justify-center opacity-75">
                            <Icon className="text-20 mx-8" color="inherit">
                              access_time
                            </Icon>
                            <div className="text-14 font-medium whitespace-nowrap">
                              {course.length}
                              min
                            </div>
                          </div>
                        </div>
                        <CardContent className="flex flex-col flex-auto items-center justify-center">
                          <Typography className="text-center text-16 font-medium">
                            {course.title}
                          </Typography>
                          <Typography
                            className="text-center text-13 mt-8 font-normal"
                            color="textSecondary"
                          >
                            {course.updated}
                          </Typography>
                        </CardContent>
                        <CardActions className="justify-center pb-24">
                          <Button
                            to={`/apps/academy/courses/${course.id}/${course.slug}`}
                            component={Link}
                            className="justify-start px-32"
                            color="primary"
                            variant="outlined"
                          >
                            {buttonStatus(course)}
                          </Button>
                        </CardActions>
                        <LinearProgress
                          className="w-full"
                          variant="determinate"
                          value={(course.activeStep * 100) / course.totalSteps}
                          color="secondary"
                        />
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <div className="flex flex-1 items-center justify-center">
                <Typography color="textSecondary" className="text-24 my-24">
                  No courses found!
                </Typography>
              </div>
            ))
          );
        }, [filteredData, categories, theme.palette])} */}
      </div>
    </Root>
  );
}

export default withReducer('academyApp', reducer)(Courses);
