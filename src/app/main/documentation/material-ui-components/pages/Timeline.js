import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TimelineDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/timeline"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Timeline
      </Typography>
      <Typography className="description">
        The timeline displays a list of events in chronological order.
      </Typography>

      <Typography className="mb-40" component="div">
        <strong>Note:</strong> This component is not documented in the{' '}
        <a href="https://material.io/">Material Design guidelines</a>, but MUI supports it.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic timeline
      </Typography>
      <Typography className="mb-40" component="div">
        A basic timeline showing list of events.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/timeline/BasicTimeline.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/timeline/BasicTimeline.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Left-positioned timeline
      </Typography>
      <Typography className="mb-40" component="div">
        The main content of the timeline can be positioned on the left side relative to the time
        axis.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/timeline/LeftPositionedTimeline.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/timeline/LeftPositionedTimeline.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Alternating timeline
      </Typography>
      <Typography className="mb-40" component="div">
        The timeline can display the events on alternating sides.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/timeline/AlternateTimeline.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/timeline/AlternateTimeline.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Color
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>TimelineDot</code> can appear in different colors from theme palette.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/timeline/ColorsTimeline.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/timeline/ColorsTimeline.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Outlined
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/timeline/OutlinedTimeline.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/timeline/OutlinedTimeline.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Opposite content
      </Typography>
      <Typography className="mb-40" component="div">
        The timeline can display content on opposite sides.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/timeline/OppositeContentTimeline.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/timeline/OppositeContentTimeline.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Customization
      </Typography>
      <Typography className="mb-40" component="div">
        Here is an example of customizing the component. You can learn more about this in the{' '}
        <a href="/customization/how-to-customize/">overrides documentation page</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/timeline/CustomizedTimeline.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/timeline/CustomizedTimeline.js')}
        />
      </Typography>
    </>
  );
}

export default TimelineDoc;
