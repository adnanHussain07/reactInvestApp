import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function PaperDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/paper"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Paper
      </Typography>
      <Typography className="description">
        In Material Design, the physical properties of paper are translated to the screen.{' '}
      </Typography>

      <Typography className="mb-40" component="div">
        The background of an application resembles the flat, opaque texture of a sheet of paper, and
        an application&#39;s behavior mimics paper&#39;s ability to be re-sized, shuffled, and bound
        together in multiple sheets.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic paper
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/paper/SimplePaper.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/paper/SimplePaper.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Variants
      </Typography>
      <Typography className="mb-40" component="div">
        If you need an outlined surface, use the <code>variant</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/paper/Variants.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/paper/Variants.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Elevation
      </Typography>
      <Typography className="mb-40" component="div">
        The elevation can be used to establish a hierachy between other content. In practical terms,
        the elevation controls the size of the shadow applied to the surface. In dark mode, raising
        the elevation also makes the surface lighter.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/paper/Elevation.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/paper/Elevation.js')}
        />
      </Typography>
    </>
  );
}

export default PaperDoc;
