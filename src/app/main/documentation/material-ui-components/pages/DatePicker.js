import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function DatePickerDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/date-picker"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Date Picker
      </Typography>
      <Typography className="description">Date pickers let the user select a date.</Typography>

      <Typography className="mb-40" component="div">
        Date pickers let the user select a date. Date pickers are displayed with:
      </Typography>
      <ul>
        <li>Dialogs on mobile</li>
        <li>Text field dropdowns on desktop</li>
      </ul>
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
        The date picker is rendered as a modal dialog on mobile, and a textbox with a popup on
        desktop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/BasicDatePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/BasicDatePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Static mode
      </Typography>
      <Typography className="mb-40" component="div">
        It&#39;s possible to render any date picker without the modal/popover and text field. This
        can be helpful when building custom popover/modal containers.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/StaticDatePickerDemo.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/StaticDatePickerDemo.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Responsiveness
      </Typography>
      <Typography className="mb-40" component="div">
        The date picker component is designed and optimized for the device it runs on.
      </Typography>
      <ul>
        <li>
          The <code>MobileDatePicker</code> component works best for touch devices and small
          screens.
        </li>
        <li>
          The <code>DesktopDatePicker</code> component works best for mouse devices and large
          screens.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        By default, the <code>DatePicker</code> component renders the desktop version if the media
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
            require('app/main/documentation/material-ui-components/components/date-picker/ResponsiveDatePickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/ResponsiveDatePickers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Form props
      </Typography>
      <Typography className="mb-40" component="div">
        The date picker component can be disabled or read-only.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/FormPropsDatePickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/FormPropsDatePickers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Localization
      </Typography>
      <Typography className="mb-40" component="div">
        Use <code>LocalizationProvider</code> to change the date-engine locale that is used to
        render the date picker. Here is an example of changing the locale for the{' '}
        <code>date-fns</code> adapter:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/LocalizedDatePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/LocalizedDatePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Jalali calendar system
      </Typography>
      <Typography className="mb-40" component="div">
        Install <code>date-fns-jalali</code> and use <code>@date-io/date-fns-jalali</code> adapter
        to support <a href="https://en.wikipedia.org/wiki/Jalali_calendar">Jalali calendar</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/JalaliDatePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/JalaliDatePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Views playground
      </Typography>
      <Typography className="mb-40" component="div">
        It&#39;s possible to combine <code>year</code>, <code>month</code>, and <code>date</code>{' '}
        selection views. Views will appear in the order they&#39;re included in the{' '}
        <code>views</code> array.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/ViewsDatePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/ViewsDatePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Landscape orientation
      </Typography>
      <Typography className="mb-40" component="div">
        For ease of use, the date picker will automatically change the layout between portrait and
        landscape by subscription to the <code>window.orientation</code> change. You can force a
        specific layout using the <code>orientation</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/StaticDatePickerLandscape.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/StaticDatePickerLandscape.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Sub-components
      </Typography>
      <Typography className="mb-40" component="div">
        Some lower-level sub-components (<code>CalendarPicker</code>, <code>MonthPicker</code>, and{' '}
        <code>YearPicker</code>) are also exported. These are rendered without a wrapper or outer
        logic (masked input, date values parsing and validation, etc.).
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/SubComponentsPickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/SubComponentsPickers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Custom input component
      </Typography>
      <Typography className="mb-40" component="div">
        You can customize the rendering of the input with the <code>renderInput</code> prop. Make
        sure to spread <code>ref</code> and <code>inputProps</code> correctly to the custom input
        component.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/CustomInput.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/CustomInput.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Customized day rendering
      </Typography>
      <Typography className="mb-40" component="div">
        The displayed days are customizable with the <code>renderDay</code> function prop. You can
        take advantage of the <a href="/api/pickers-day/">PickersDay</a> component.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/CustomDay.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/CustomDay.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Dynamic data
      </Typography>
      <Typography className="mb-40" component="div">
        Sometimes it may be necessary to display additional info right in the calendar. Here&#39;s
        an example of prefetching and displaying server-side data using the{' '}
        <code>onMonthChange</code>, <code>loading</code>, and <code>renderDay</code> props.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/ServerRequestDatePicker.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/ServerRequestDatePicker.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Helper text
      </Typography>
      <Typography className="mb-40" component="div">
        You can show a helper text with the date format accepted.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/date-picker/HelperText.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/date-picker/HelperText.js')}
        />
      </Typography>
    </>
  );
}

export default DatePickerDoc;
