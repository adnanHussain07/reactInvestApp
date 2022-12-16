import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function StackDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/stack"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Stack
      </Typography>
      <Typography className="description">
        The Stack component manages layout of immediate children along the vertical or horizontal
        axis with optional spacing and/or dividers between each child.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Usage
      </Typography>
      <Typography className="mb-40" component="div">
        <code>Stack</code> is concerned with one-dimensional layouts, while{' '}
        <a href="/components/grid/">Grid</a> that handles two-dimensional layouts. The default
        direction is <code>column</code> which stacks children vertically.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/stack/BasicStack.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/stack/BasicStack.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        To control space between children, use the <code>spacing</code> prop. The spacing value can
        be any number, including decimals and any string. The prop is converted into a CSS property
        using the{' '}
        <a href="/customization/spacing/">
          <code>theme.spacing()</code>
        </a>{' '}
        helper.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Direction
      </Typography>
      <Typography className="mb-40" component="div">
        By default, <code>Stack</code> arranges items vertically in a <code>column</code>. However,
        the <code>direction</code> prop can be used to position items horizontally in a{' '}
        <code>row</code> as well.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/stack/DirectionStack.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/stack/DirectionStack.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Dividers
      </Typography>
      <Typography className="mb-40" component="div">
        Use the <code>divider</code> prop to insert an element between each child. This works
        particularly well with the <a href="/components/dividers/">Divider</a> component.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/stack/DividerStack.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/stack/DividerStack.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Responsive values
      </Typography>
      <Typography className="mb-40" component="div">
        You can switch the <code>direction</code> or <code>spacing</code> values based on the active
        breakpoint.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/stack/ResponsiveStack.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/stack/ResponsiveStack.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Interactive
      </Typography>
      <Typography className="mb-40" component="div">
        Below is an interactive demo that lets you explore the visual results of the different
        settings:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/stack/InteractiveStack.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/stack/InteractiveStack.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        System props
      </Typography>
      <Typography className="mb-40" component="div">
        As a CSS utility component, the <code>Stack</code> supports all{' '}
        <a href="/system/properties/">
          <code>system</code>
        </a>{' '}
        properties. You can use them as props directly on the component. For instance, a margin-top:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Stack mt={2}>
`}
      </FuseHighlight>
    </>
  );
}

export default StackDoc;
