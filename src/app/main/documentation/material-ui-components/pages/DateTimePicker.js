import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function DateTimePickerDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/date-time-picker"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Date Time Picker
      </Typography>
      <Typography className="description">Combined date & time picker.</Typography>

      <Typography className="mb-40" component="div">
        This component combines the date &amp; time pickers. It allows the user to select both date
        and time with the same control.
      </Typography>
      <Typography className="mb-40" component="div">
        Note that this component is the <a href="/components/date-picker/">DatePicker</a> and{' '}
        <a href="/components/time-picker/">TimePicker</a>
        component combined, so any of these components&#39; props can be passed to the
        DateTimePicker.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Requirements
      </Typography>
      <Typography className="mb-40" component="div">
        This component relies on the date management library of your choice. It supports{' '}
        <a href="https://date-fns.org/">date-fns</a>,{' '}
        <a href="https://moment.github.io/luxon/">luxon</a>,{' '}
        <a href="https://github.com/iamkun/dayjs">dayjs</a>,{' '}
        <a href="https://momentjs.com/">moment</a> and any other library via a public{' '}
        <code>dateAdapter</code> interface.
      </Typography>
      <Typography className="mb-40" component="div">
        Please install any of these libraries and set up the right date engine by wrapping your root
        (or the highest level you wish the pickers to be available) with{' '}
        <code>LocalizationProvider</code>:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
// or @mui/lab/Adapter{Dayjs,Luxon,Moment} or any valid date-io adapter
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>...</LocalizationProvider>
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic usage
      </Typography>
      <Typography className="mb-40" component="div">
        Allows choosing date then time. There are 4 steps available (year, date, hour and minute),
        so tabs are required to visually distinguish date/time steps.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-time-picker/BasicDateTimePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-time-picker/BasicDateTimePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Responsiveness
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>DateTimePicker</code> component is designed and optimized for the device it runs
        on.
      </Typography>
      <ul>
        <li>
          The <code>MobileDateTimePicker</code> component works best for touch devices and small
          screens.
        </li>
        <li>
          The <code>DesktopDateTimePicker</code> component works best for mouse devices and large
          screens.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        By default, the <code>DateTimePicker</code> component renders the desktop version if the
        media query{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer">
          <code>@media (pointer: fine)</code>
        </a>{' '}
        matches. This can be customized with the <code>desktopModeMediaQuery</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-time-picker/ResponsiveDateTimePickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-time-picker/ResponsiveDateTimePickers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Form props
      </Typography>
      <Typography className="mb-40" component="div">
        The date time picker component can be disabled or read-only.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-time-picker/FormPropsDateTimePickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-time-picker/FormPropsDateTimePickers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Date and time validation
      </Typography>
      <Typography className="mb-40" component="div">
        It is possible to restrict date and time selection in two ways:
      </Typography>
      <ul>
        <li>
          by using <code>minDateTime</code>/<code>maxDateTime</code> its possible to restrict time
          selection to before or after a particular moment in time
        </li>
        <li>
          using <code>minTime</code>/<code>maxTime</code>, you can disable selecting times before or
          after a certain time each day respectively
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-time-picker/DateTimeValidation.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-time-picker/DateTimeValidation.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Static mode
      </Typography>
      <Typography className="mb-40" component="div">
        It&#39;s possible to render any date &amp; time picker inline. This will enable building
        custom popover/modal containers.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-time-picker/StaticDateTimePickerDemo.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-time-picker/StaticDateTimePickerDemo.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Customization
      </Typography>
      <Typography className="mb-40" component="div">
        Here are some examples of heavily customized date &amp; time pickers:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-time-picker/CustomDateTimePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-time-picker/CustomDateTimePicker.js')}
        />
      </Typography>
    </>
  );
}

export default DateTimePickerDoc;
