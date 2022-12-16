import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function DateRangePickerDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/date-range-picker"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Date Range Picker{' '}
        <a href="https://material-ui.com/store/items/material-ui-pro/">
          <span role="img" title="Enterprise">
            ⚡️
          </span>
        </a>
      </Typography>
      <Typography className="description">
        Date pickers let the user select a range of dates.
      </Typography>

      <blockquote>
        <Typography className="mb-40" component="div">
          ⚠️ Pro component
          <br />
          <br />
          The date range picker is intended for MUI X Pro, a commercial set of advanced components
          built on top of the community edition (MIT license).
          <br />
          <br />
          This paid extension will include more advanced components (rich data grid, date range
          picker, tree view drag &amp; drop, etc.).{' '}
          <a href="https://material-ui.com/store/items/material-ui-pro/">Early access</a> starts at
          an affordable price.
        </Typography>
      </blockquote>
      <Typography className="mb-40" component="div">
        The date range pickers let the user select a range of dates.
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
// or @mui/lab/dateAdapter/{dayjs,luxon,moment} or any valid date-io adapter
import DateFnsAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

function App() {
  return (
    <LocalizationProvider dateAdapter={DateFnsAdapter}>...</LocalizationProvider>
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic usage
      </Typography>
      <Typography className="mb-40" component="div">
        Note that you can pass almost any prop from <a href="/api/date-picker/">DatePicker</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-range-picker/BasicDateRangePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-range-picker/BasicDateRangePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Static mode
      </Typography>
      <Typography className="mb-40" component="div">
        It&#39;s possible to render any picker inline. This will enable building custom
        popover/modal containers.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-range-picker/StaticDateRangePickerDemo.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-range-picker/StaticDateRangePickerDemo.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Responsiveness
      </Typography>
      <Typography className="mb-40" component="div">
        The date range picker component is designed to be optimized for the device it runs on.
      </Typography>
      <ul>
        <li>
          The <code>MobileDateRangePicker</code> component works best for touch devices and small
          screens.
        </li>
        <li>
          The <code>DesktopDateRangePicker</code> component works best for mouse devices and large
          screens.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        By default, the <code>DateRangePicker</code> component renders the desktop version if the
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
            require('app/main/documentation/material-ui-components/components/date-range-picker/ResponsiveDateRangePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-range-picker/ResponsiveDateRangePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Form props
      </Typography>
      <Typography className="mb-40" component="div">
        The date range picker component can be disabled or read-only.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-range-picker/FormPropsDateRangePickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-range-picker/FormPropsDateRangePickers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Different number of months
      </Typography>
      <Typography className="mb-40" component="div">
        Note that the <code>calendars</code> prop only works in desktop mode.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-range-picker/CalendarsDateRangePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-range-picker/CalendarsDateRangePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Disabling dates
      </Typography>
      <Typography className="mb-40" component="div">
        Disabling dates behaves the same as the simple <code>DatePicker</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-range-picker/MinMaxDateRangePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-range-picker/MinMaxDateRangePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Custom input component
      </Typography>
      <Typography className="mb-40" component="div">
        You can customize the rendered input with the <code>renderInput</code> prop. For{' '}
        <code>DateRangePicker</code> it takes <strong>2</strong> parameters – for start and end
        input respectively. If you need to render custom inputs make sure to spread <code>ref</code>{' '}
        and <code>inputProps</code> correctly to the input components.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-range-picker/CustomDateRangeInputs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-range-picker/CustomDateRangeInputs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Customized day rendering
      </Typography>
      <Typography className="mb-40" component="div">
        The displayed days are customizable with the <code>renderDay</code> function prop. You can
        take advantage of the internal <a href="/api/date-range-picker-day/">DateRangePickerDay</a>{' '}
        component.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-range-picker/CustomDateRangePickerDay.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-range-picker/CustomDateRangePickerDay.js')}
        />
      </Typography>
    </>
  );
}

export default DateRangePickerDoc;
