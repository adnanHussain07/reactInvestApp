import Card from '@mui/material/Card';
import Icon from '@mui/material/Icon';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import _ from '@lodash';
import ReactApexChart from 'react-apexcharts';
import i18next from 'i18next';

function Widget2(props) {
  const theme = useTheme();
  const data = _.merge({}, props.data);
  const dashData = useSelector(({ auth }) => auth.sharedData.dashboardData);

  _.setWith(data, 'options.colors', [theme.palette.primary.main]);

  return (
    <Card className="w-full rounded-20 shadow">
      <div className="p-20 pb-0">
        <Typography className="h3 font-medium">
          {i18next.t(`navigation:TOTALPAY`)}
        </Typography>

        <div className="flex flex-row flex-wrap items-center mt-12">
          <Typography className="text-48 font-semibold leading-none tracking-tighter">
            <Icon className='text-32'>attach_money</Icon>
            {dashData && dashData.totalpayout ? parseFloat(dashData.totalpayout).toFixed(2) : '0.00'}
          </Typography>

          <div className="flex flex-col mx-8">
            <Icon className="text-green text-20">trending_up</Icon>
            {/* {data.conversion.ofTarget > 0 && (
              <Icon className="text-green text-20">trending_up</Icon>
            )}
            {data.conversion.ofTarget < 0 && (
              <Icon className="text-red text-20">trending_down</Icon>
            )} */}
            <div className="flex items-center">
              <Typography className="font-semibold" color="textSecondary">
                Payouts
              </Typography>
              <Typography className="whitespace-nowrap mx-4" color="textSecondary">
                of target
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="h-96 w-100-p">
        <ReactApexChart
          options={data.options}
          series={data.series}
          type={data.options.chart.type}
          height={data.options.chart.height}
        />
      </div>
    </Card>
  );
}

export default Widget2;
