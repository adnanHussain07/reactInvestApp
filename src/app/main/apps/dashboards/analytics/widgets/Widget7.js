import _ from '@lodash';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import FormControl from '@mui/material/FormControl';
import Icon from '@mui/material/Icon';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import { memo, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import i18next from 'i18next';

function Widget7(props) {
  const theme = useTheme();
  const [serie, setSerie] = useState('Today');
  const data = _.merge({}, props.data);
  const dashData = useSelector(({ auth }) => auth.sharedData.dashboardData);

  _.setWith(data, 'options.theme.monochrome.color', theme.palette.primary.main);

  return (
    <Card className="w-full rounded-20 shadow p-20">
      <div className="pb-24">
        <Typography className="h3 font-medium text-center">
          {i18next.t(`navigation:DEPTRADEINT`)}
        </Typography>
      </div>

      <div className="h-256 relative">
        <ReactApexChart
          options={data.options}
          series={[
            dashData && dashData.totaldeposit ? dashData.totaldeposit : 0,
            dashData && dashData.totaltrades ? dashData.totaltrades : 0,
            dashData && dashData.interestwallet ? dashData.interestwallet : 0,
          ]}
          // series={data.series[serie][0].data}
          type={data.options.chart.type}
          height={data.options.chart.height}
        />
      </div>

      <div className="mb-24 flex flex-row items-center justify-center">
        {['Deposit', 'Trade', 'Interest'].map((label, index) => (
          // {data.options.labels.map((label, index) => (
          <div key={label} className="px-16 flex flex-col items-center">
            <Typography className="h4 font-semibold" color="textSecondary">
              {label}
            </Typography>
            <Typography className="text-18 font-semibold py-8">
              {index == 0 && dashData && dashData.totaldeposit ? dashData.totaldeposit :
                index == 1 && dashData && dashData.totaltrades ? dashData.totaltrades :
                  index == 2 && dashData && dashData.interestwallet ? dashData.interestwallet : 0}
              {/* {data.series[serie][0].data[index]}% */}
            </Typography>

            <div className="flex flex-row items-start justify-center">
              {index == 0 && dashData && dashData.totaldeposit ? <Icon className="text-18 text-green">arrow_upward</Icon> :
                index == 1 && dashData && dashData.totaltrades ? <Icon className="text-18 text-green">arrow_upward</Icon> :
                  index == 2 && dashData && dashData.interestwallet ? <Icon className="text-18 text-green">arrow_upward</Icon> : <Icon className="text-18 text-red">arrow_downward</Icon>}
              {/* {data.series[serie][0].change[index] < 0 && (
                <Icon className="text-18 text-red">arrow_downward</Icon>
              )}

              {data.series[serie][0].change[index] > 0 && (
                <Icon className="text-18 text-green">arrow_upward</Icon>
              )} */}
              <Typography className="h5 px-4 font-semibold" color="textSecondary">
                UP
                {/* {data.series[serie][0].change[index]}% */}
              </Typography>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-row items-center justify-between">
        <div>
          <FormControl className="" variant="filled">
            <Select
              classes={{ select: 'py-8' }}
              value={1}
            // onChange={(ev) => setSerie(ev.target.value)}
            >
              <MenuItem key={1} value={1}>
                {i18next.t(`navigation:TOTFLOW`)}
              </MenuItem>
              {/* {Object.keys(data.series).map((key) => (
                <MenuItem key={key} value={key}>
                  {key}
                </MenuItem>
              ))} */}
            </Select>
          </FormControl>
        </div>
      </div>
    </Card>
  );
}

export default memo(Widget7);
