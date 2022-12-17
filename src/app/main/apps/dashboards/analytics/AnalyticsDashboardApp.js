import Typography from '@mui/material/Typography';
import withReducer from 'app/store/withReducer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from '@lodash';
import { motion } from 'framer-motion';
import reducer from './store';
import { selectWidgetsEntities, getWidgets } from './store/widgetsSlice';
import Widget1 from './widgets/Widget1';
import Widget2 from './widgets/Widget2';
import Widget3 from './widgets/Widget3';
import Widget4 from './widgets/Widget4';
import Widget5 from './widgets/Widget5';
import Widget6 from './widgets/Widget6';
import Widget7 from './widgets/Widget7';
import Widget8 from './widgets/Widget8';
import Widget9 from './widgets/Widget9';
import Widget22 from './widgets/Widget22';
import Widget23 from './widgets/Widget23';
import Widget24 from './widgets/Widget24';
import i18next from 'i18next';

function AnalyticsDashboardApp() {
  const dispatch = useDispatch();
  const widgets = useSelector(selectWidgetsEntities);

  useEffect(() => {
    dispatch(getWidgets());
  }, [dispatch]);

  if (_.isEmpty(widgets)) {
    return null;
  }

  const container = {
    show: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full">
      <Widget1 data={widgets.widget1} />
      <motion.div
        className="flex flex-col md:flex-row sm:p-8 container"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-1 flex-col min-w-0 pt-16">
          <Typography
            component={motion.div}
            variants={item}
            className="px-16 pb-8 text-18 font-medium"
            color="textSecondary"
          >
            {i18next.t(`navigation:BRIEDDASH`)}
          </Typography>

          <div className="flex flex-col sm:flex sm:flex-row">
            <motion.div variants={item} className="widget flex w-full sm:w-1/3 p-16">
              <Widget2 data={widgets.widget2} />
            </motion.div>

            <motion.div variants={item} className="widget flex w-full sm:w-1/3 p-16">
              <Widget3 data={widgets.widget3} />
            </motion.div>

            <motion.div variants={item} className="widget w-full sm:w-1/3 p-16">
              <Widget4 data={widgets.widget4} />
            </motion.div>
          </div>
          <div className="flex flex-col sm:flex sm:flex-row pb-32">
            <motion.div variants={item} className="widget flex w-full sm:w-1/3 p-16">
              <Widget23 data={widgets.widget3} />
            </motion.div>

            <motion.div variants={item} className="widget flex w-full sm:w-1/3 p-16">
              <Widget22 data={widgets.widget2} />
            </motion.div>

            <motion.div variants={item} className="widget w-full sm:w-1/3 p-16">
              <Widget24 data={widgets.widget4} />
            </motion.div>
          </div>

          <Typography
            component={motion.div}
            variants={item}
            className="px-16 pb-8 text-18 font-medium"
            color="textSecondary"
          >
            {i18next.t(`navigation:STAYTUNED`)}
          </Typography>

          <motion.div variants={item} className="widget w-full p-16 pb-48">
            <Widget5 data={widgets.widget5} />
          </motion.div>

          {/* <Typography
            component={motion.div}
            variants={item}
            className="px-16 pb-8 text-18 font-medium"
            color="textSecondary"
          >
            Where are your users?
          </Typography>

          <motion.div variants={item} className="widget w-full p-16 pb-32">
            <Widget6 data={widgets.widget6} />
          </motion.div> */}
        </div>

        <div className="flex flex-wrap w-full md:w-320 pt-16">
          <div className="mb-32 w-full sm:w-1/2 md:w-full">
            <Typography
              component={motion.div}
              variants={item}
              className="px-16 pb-8 text-18 font-medium"
              color="textSecondary"
            >
              {i18next.t(`navigation:GLIMPSE`)}
            </Typography>

            <motion.div variants={item} className="widget w-full p-16">
              <Widget7 data={widgets.widget7} />
            </motion.div>
          </div>

          <div className="mb-32 w-full sm:w-1/2 md:w-full">
            <Typography
              component={motion.div}
              variants={item}
              className="px-16 pb-8 text-18 font-medium"
              color="textSecondary"
            >
              {i18next.t(`navigation:GLOBALCONTR`)}
            </Typography>

            <motion.div variants={item} className="widget w-full p-16">
              <Widget8 data={widgets.widget8} />
            </motion.div>
          </div>

          {/* <div className="mb-32 w-full sm:w-1/2 md:w-full">
            <Typography
              component={motion.div}
              variants={item}
              className="px-16 pb-8 text-18 font-medium lg:pt-0"
              color="textSecondary"
            >
              What are your top campaigns?
            </Typography>
            <motion.div variants={item} className="widget w-full p-16">
              <Widget9 data={widgets.widget9} />
            </motion.div>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
}

export default withReducer('analyticsDashboardApp', reducer)(AnalyticsDashboardApp);
