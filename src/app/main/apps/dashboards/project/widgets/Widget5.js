import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import _ from '@lodash';
import { memo, useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import Box from '@mui/material/Box';

function Widget5(props) {
  const theme = useTheme();
  const [awaitRender, setAwaitRender] = useState(true);
  const [tabValue, setTabValue] = useState(0);
  const widget = _.merge({}, props.widget);
  const currentRange = Object.keys(widget.ranges)[tabValue];

  _.setWith(widget, 'mainChart.options.colors', [
    theme.palette.primary.main,
    theme.palette.secondary.main,
  ]);

  useEffect(() => {
    setAwaitRender(false);
  }, []);

  if (awaitRender) {
    return null;
  }
  return (
    <Paper className="w-full rounded-20 shadow">
      <div className="flex items-center justify-between p-20">
        <Typography className="text-16 font-medium">{widget.title}</Typography>
        <Tabs
          value={tabValue}
          onChange={(ev, value) => setTabValue(value)}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons={false}
          className="-mx-4 min-h-40"
          classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
          TabIndicatorProps={{
            children: (
              <Box
                sx={{ bgcolor: 'text.disabled' }}
                className="w-full h-full rounded-full opacity-20"
              />
            ),
          }}
        >
          {Object.entries(widget.ranges).map(([key, n]) => (
            <Tab
              className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
              disableRipple
              key={key}
              label={n}
            />
          ))}
        </Tabs>
      </div>
      <div className="flex flex-row flex-wrap">
        <div className="w-full md:w-1/2 p-16 min-h-420 h-420">
          <ReactApexChart
            options={widget.mainChart.options}
            series={widget.mainChart[currentRange].series}
            type={widget.mainChart.options.chart.type}
            height={widget.mainChart.options.chart.height}
          />
        </div>
        <div className="flex w-full md:w-1/2 flex-wrap p-8">
          {Object.entries(widget.supporting).map(([key, item]) => {
            return (
              <div key={key} className="w-full sm:w-1/2 p-12">
                <Typography
                  className="text-12 font-semibold whitespace-nowrap"
                  color="textSecondary"
                >
                  {item.name}
                </Typography>
                <Typography className="text-32 font-semibold tracking-tighter">
                  {item.count[currentRange]}
                </Typography>
                <div className="h-64 w-full overflow-hidden">
                  <ReactApexChart
                    options={{ ...item.chart.options, colors: [theme.palette.secondary.main] }}
                    series={item.chart[currentRange].series}
                    type={item.chart.options.chart.type}
                    height={item.chart.options.chart.height}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Paper>
  );
}

export default memo(Widget5);
