import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TimePickerDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/time-picker"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Time Picker
      </Typography>
      <Typography className="description">
        Time pickers allow the user to select a single time.
      </Typography>

      <Typography className="mb-40" component="div">
        Time pickers allow the user to select a single time (in the hours:minutes format). The
        selected time is indicated by the filled circle at the end of the clock hand.
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
// or @mui/lab/Adapter{DayJS,Luxon,Moment} or any valid date-io adapter
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
        The date picker is rendered as a modal dialog on mobile, and a textbox with a popup on
        desktop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/time-picker/BasicTimePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/time-picker/BasicTimePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Static mode
      </Typography>
      <Typography className="mb-40" component="div">
        It&#39;s possible to render any time picker inline. This will enable building custom
        popover/modal containers.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/time-picker/StaticTimePickerDemo.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/time-picker/StaticTimePickerDemo.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Responsiveness
      </Typography>
      <Typography className="mb-40" component="div">
        The time picker component is designed and optimized for the device it runs on.
      </Typography>
      <ul>
        <li>
          The <code>MobileTimePicker</code> component works best for touch devices and small
          screens.
        </li>
        <li>
          The <code>DesktopTimePicker</code> component works best for mouse devices and large
          screens.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        By default, the <code>TimePicker</code> component renders the desktop version if the media
        query{' '}
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
            require('app/main/documentation/material-ui-components/components/time-picker/ResponsiveTimePickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/time-picker/ResponsiveTimePickers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Form props
      </Typography>
      <Typography className="mb-40" component="div">
        The time picker component can be disabled or read-only.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/time-picker/FormPropsTimePickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/time-picker/FormPropsTimePickers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Localization
      </Typography>
      <Typography className="mb-40" component="div">
        Use <code>LocalizationProvider</code> to change the date-engine locale that is used to
        render the time picker. The time picker will automatically adjust to the locale&#39;s time
        setting, i.e. the 12-hour or 24-hour format. This can be controlled with <code>ampm</code>{' '}
        prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/time-picker/LocalizedTimePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/time-picker/LocalizedTimePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Time validation
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/time-picker/TimeValidationTimePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/time-picker/TimeValidationTimePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Landscape
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/time-picker/StaticTimePickerLandscape.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/time-picker/StaticTimePickerLandscape.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Sub-components
      </Typography>
      <Typography className="mb-40" component="div">
        Some lower-level sub-components (<code>ClockPicker</code>) are also exported. These are
        rendered without a wrapper or outer logic (masked input, date values parsing and validation,
        etc.).
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/time-picker/SubComponentsTimePickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/time-picker/SubComponentsTimePickers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Seconds
      </Typography>
      <Typography className="mb-40" component="div">
        The seconds input can be used for selection of a precise time point.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/time-picker/SecondsTimePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/time-picker/SecondsTimePicker.js')}
        />
      </Typography>
    </>
  );
}

export default TimePickerDoc;
