import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function PickersDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/pickers"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Date / Time pickers
      </Typography>
      <Typography className="description">
        Date pickers and Time pickers allow selecting a single value from a pre-determined set.
      </Typography>

      <ul>
        <li>On mobile, pickers are best suited for display in a confirmation dialog.</li>
        <li>
          For inline display, such as on a form, consider using compact controls such as segmented
          dropdown buttons.
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        React components
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/pickers/MaterialUIPickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/pickers/MaterialUIPickers.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Setup
      </Typography>
      <Typography className="mb-40" component="div">
        You need to provide a date-library that is used by the pickers by setting the{' '}
        <code>dateAdapter</code> to an adapter of your choosing.
      </Typography>
      <Typography className="mb-40" component="div">
        We currently support 4 different date-libraries:
      </Typography>
      <ul>
        <li>
          <a href="https://date-fns.org/">date-fns</a>
        </li>
        <li>
          <a href="https://day.js.org/">Day.js</a>
        </li>
        <li>
          <a href="https://moment.github.io/luxon/#/">Luxon</a>
        </li>
        <li>
          <a href="https://momentjs.com/">Moment.js</a>
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        First you have to install the adapter package for the date-library you want to use:
      </Typography>

      <FuseHighlight component="pre" className="language-sh">
        {` 
// date-fns
npm install @date-io/date-fns
// or for Day.js
npm install -s @date-io/dayjs
// or for Luxon
npm install -s @date-io/luxon
// or for Moment.js
npm install @date-io/moment
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        Then you have to set the <code>dateAdapter</code> prop of the{' '}
        <code>LocalizationProvider</code> accordingly:
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
// date-fns
import DateAdapter from '@mui/lab/AdapterDateFns';
// or for Day.js
import DateAdapter from '@mui/lab/AdapterDayjs';
// or for Luxon
import DateAdapter from '@mui/lab/AdapterLuxon';
// or for Moment.js
import DateAdapter from '@mui/lab/AdapterMoment';

function App({ children }) {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>{children}</LocalizationProvider>
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Native pickers
      </Typography>
      <Typography className="mb-40" component="div">
        ⚠️ Native input controls support by browsers{' '}
        <a href="https://caniuse.com/#feat=input-datetime">isn&#39;t perfect</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        Native date (<code>type="date"</code>), time (<code>type="time"</code>) and date&amp;time (
        <code>type="datetime-local"</code>) pickers.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/pickers/NativePickers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/pickers/NativePickers.js')}
        />
      </Typography>
    </>
  );
}

export default PickersDoc;
