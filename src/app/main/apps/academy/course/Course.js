import FusePageSimple from '@fuse/core/FusePageSimple';
import { useTheme, styled } from '@mui/material/styles';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { green } from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import withReducer from 'app/store/withReducer';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import SwipeableViews from 'react-swipeable-views';
import reducer from '../store';
import { getCourse, updateCourse } from '../store/courseSlice';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    minHeight: 72,
    height: 72,
    [theme.breakpoints.up('lg')]: {
      borderBottomLeftRadius: 20,
    },
  },
  '& .FusePageSimple-content': {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  '& .FusePageSimple-sidebar': {
    padding: 24,
    border: 0,
  },
}));

function Course(props) {
  const dispatch = useDispatch();
  const course = useSelector(({ academyApp }) => academyApp.course);
  const theme = useTheme();

  const routeParams = useParams();

  const pageLayout = useRef(null);

  useDeepCompareEffect(() => {
    /**
     * Get the Course Data
     */
    dispatch(getCourse(routeParams));
  }, [dispatch, routeParams]);

  useEffect(() => {
    /**
     * If the course is opened for the first time
     * Change ActiveStep to 1
     */
    if (course && course.activeStep === 0) {
      dispatch(updateCourse({ activeStep: 1 }));
    }
  }, [dispatch, course]);

  function handleChangeActiveStep(index) {
    dispatch(updateCourse({ activeStep: index + 1 }));
  }

  function handleNext() {
    dispatch(updateCourse({ activeStep: course.activeStep + 1 }));
  }

  function handleBack() {
    dispatch(updateCourse({ activeStep: course.activeStep - 1 }));
  }

  const activeStep = course && course.activeStep !== 0 ? course.activeStep : 1;

  return (
    <Root
      header={
        <div className="flex flex-1 items-center px-16 lg:px-24">
          <Hidden lgUp>
            <IconButton
              onClick={(ev) => pageLayout.current.toggleLeftSidebar()}
              aria-label="open left sidebar"
              size="large"
            >
              <Icon>menu</Icon>
            </IconButton>
          </Hidden>
          <IconButton to="/apps/academy/courses" component={Link} size="large">
            <Icon>{theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}</Icon>
          </IconButton>
          {course && <Typography className="flex-1 text-20 mx-16">{course.title}</Typography>}
        </div>
      }
      content={
        course && (
          <div className="flex flex-1 relative overflow-hidden">
            <FuseScrollbars className="w-full overflow-auto">
              <SwipeableViews
                className="overflow-hidden"
                index={activeStep - 1}
                enableMouseEvents
                onChangeIndex={handleChangeActiveStep}
              >
                {course.steps.map((step, index) => (
                  <div
                    className="flex justify-center p-16 pb-64 sm:p-24 sm:pb-64 md:p-48 md:pb-64"
                    key={step.id}
                  >
                    <Paper className="w-full max-w-lg rounded-20 p-16 md:p-24 shadow text-14 leading-normal">
                      <div
                        dangerouslySetInnerHTML={{ __html: step.content }}
                        dir={theme.direction}
                      />
                    </Paper>
                  </div>
                ))}
              </SwipeableViews>
            </FuseScrollbars>

            <div className="flex justify-center w-full absolute left-0 right-0 bottom-0 pb-16 md:pb-32">
              <div className="flex justify-between w-full max-w-xl px-8">
                <div>
                  {activeStep !== 1 && (
                    <Fab className="" color="secondary" onClick={handleBack}>
                      <Icon>{theme.direction === 'ltr' ? 'chevron_left' : 'chevron_right'}</Icon>
                    </Fab>
                  )}
                </div>
                <div>
                  {activeStep < course.steps.length ? (
                    <Fab className="" color="secondary" onClick={handleNext}>
                      <Icon>{theme.direction === 'ltr' ? 'chevron_right' : 'chevron_left'}</Icon>
                    </Fab>
                  ) : (
                    <Fab
                      sx={{ background: `${green[500]}!important`, color: 'white!important' }}
                      to="/apps/academy/courses"
                      component={Link}
                    >
                      <Icon>check</Icon>
                    </Fab>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      }
      leftSidebarContent={
        course && (
          <Stepper
            classes={{ root: 'bg-transparent' }}
            activeStep={activeStep - 1}
            orientation="vertical"
          >
            {course.steps.map((step, index) => {
              return (
                <Step key={step.id} onClick={() => handleChangeActiveStep(index)}>
                  <StepLabel sx={{ cursor: 'pointer!important' }}>{step.title}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        )
      }
      innerScroll
      ref={pageLayout}
    />
  );
}

export default withReducer('academyApp', reducer)(Course);
