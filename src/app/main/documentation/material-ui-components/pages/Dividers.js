import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function DividersDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/dividers"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Divider
      </Typography>
      <Typography className="description">
        A divider is a thin line that groups content in lists and layouts.
      </Typography>

      <Typography className="mb-40" component="div">
        Dividers separate content into clear groups.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        List dividers
      </Typography>
      <Typography className="mb-40" component="div">
        The divider renders as an <code>{`<hr>`}</code> by default. You can save rendering this DOM
        element by using the <code>divider</code> prop on the <code>ListItem</code> component.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dividers/ListDividers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dividers/ListDividers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        HTML5 specification
      </Typography>
      <Typography className="mb-40" component="div">
        In a list, you should ensure the <code>Divider</code> is rendered as an{' '}
        <code>{`<li>`}</code> to match the HTML5 specification. The examples below show two ways of
        achieving this.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Inset dividers
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dividers/InsetDividers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dividers/InsetDividers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Subheader dividers
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dividers/SubheaderDividers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dividers/SubheaderDividers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Middle divider
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dividers/MiddleDividers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dividers/MiddleDividers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Dividers with text
      </Typography>
      <Typography className="mb-40" component="div">
        You can also render a divider with content.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dividers/DividerText.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dividers/DividerText.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Vertical divider
      </Typography>
      <Typography className="mb-40" component="div">
        You can also render a divider vertically using the <code>orientation</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dividers/VerticalDividers.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dividers/VerticalDividers.js')}
        />
      </Typography>
      <blockquote>
        <Typography className="mb-40" component="div">
          Note the use of the <code>flexItem</code> prop to accommodate for the flex container.
        </Typography>
      </blockquote>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Vertical with variant middle
      </Typography>
      <Typography className="mb-40" component="div">
        You can also render a vertical divider with <code>variant="middle"</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dividers/VerticalDividerMiddle.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dividers/VerticalDividerMiddle.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Vertical with text
      </Typography>
      <Typography className="mb-40" component="div">
        You can also render a vertical divider with content.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dividers/VerticalDividerText.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dividers/VerticalDividerText.js')}
        />
      </Typography>
    </>
  );
}

export default DividersDoc;
