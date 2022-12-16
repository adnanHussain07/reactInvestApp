import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function BoxDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/box"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Box
      </Typography>
      <Typography className="description">
        The Box component serves as a wrapper component for most of the CSS utility needs.
      </Typography>

      <Typography className="mb-40" component="div">
        The Box component packages{' '}
        <a href="/system/basics/#all-inclusive">all the style functions</a> that are exposed in{' '}
        <code>@mui/system</code>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Example
      </Typography>
      <Typography className="mb-40" component="div">
        <a href="/system/palette/">The palette</a> style function.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        The <code>sx</code> prop
      </Typography>
      <Typography className="mb-40" component="div">
        All system properties are available via the{' '}
        <a href="/system/basics/#the-sx-prop">
          <code>sx</code> prop
        </a>
        . In addition, the <code>sx</code> prop allows you to specify any other CSS rules you may
        need. Here&#39;s an example of how you can use it:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/box/BoxSx.js').default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/box/BoxSx.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Overriding MUI components
      </Typography>
      <Typography className="mb-40" component="div">
        The Box component wraps your component. It creates a new DOM element, a{' '}
        <code>{`<div>`}</code> that by default can be changed with the <code>component</code> prop.
        Let&#39;s say you want to use a <code>{`<span>`}</code> instead:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/box/BoxComponent.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/box/BoxComponent.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        This works great when the changes can be isolated to a new DOM element. For instance, you
        can change the margin this way.
      </Typography>
      <Typography className="mb-40" component="div">
        However, sometimes you have to target the underlying DOM element. As an example, you may
        want to change the border of the Button. The Button component defines its own styles. CSS
        inheritance doesn&#39;t help. To workaround the problem, you can use the{' '}
        <a href="/system/basics/#the-sx-prop">
          <code>sx</code>
        </a>{' '}
        prop directly on the child if it is a MUI component.
      </Typography>

      <FuseHighlight component="pre" className="language-diff">
        {` 
-<Box sx={{ border: '1px dashed grey' }}>
-  <Button>Save</Button>
-</Box>
+<Button sx={{ border: '1px dashed grey' }}>Save</Button>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        For non-MUI components, use the <code>component</code> prop.
      </Typography>

      <FuseHighlight component="pre" className="language-diff">
        {` 
-<Box sx={{ border: '1px dashed grey' }}>
-  <button>Save</button>
-</Box>
+<Box component="button" sx={{ border: '1px dashed grey' }}>Save</Box>
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        API
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import Box from '@mui/material/Box';
`}
      </FuseHighlight>
      <table>
        <thead>
          <tr>
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Default</th>
            <th align="left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="left">
              <span className="prop-name">children</span>
            </td>
            <td align="left">
              <span className="prop-type">
                node
                <br />
              </span>
            </td>
            <td align="left" />
            <td align="left">Box render function or node.</td>
          </tr>
          <tr>
            <td align="left">
              <span className="prop-name">component</span>
            </td>
            <td align="left">
              <span className="prop-type">
                union:&nbsp;string&nbsp;&#124;
                <br />
                &nbsp;func&nbsp;&#124;
                <br />
                &nbsp;object
                <br />
              </span>
            </td>
            <td align="left">
              <span className="prop-default">&#39;div&#39;</span>
            </td>
            <td align="left">
              The component used for the root node. Either a string to use a DOM element or a
              component.
            </td>
          </tr>
          <tr>
            <td align="left">
              <span className="prop-name">sx</span>
            </td>
            <td align="left">
              <span className="prop-type">object</span>
            </td>
            <td align="left">
              <span className="prop-default">{}</span>
            </td>
            <td align="left">
              Accepts all system properties, as well as any valid CSS properties.
            </td>
          </tr>
        </tbody>
      </table>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        System props
      </Typography>
      <Typography className="mb-40" component="div">
        As a CSS utility component, the <code>Box</code> also supports all{' '}
        <a href="/system/properties/">
          <code>system</code>
        </a>{' '}
        properties. You can use them as prop directly on the component. For instance, a margin-top:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Box mt={2}>
`}
      </FuseHighlight>
    </>
  );
}

export default BoxDoc;
