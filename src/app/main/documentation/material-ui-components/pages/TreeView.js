import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TreeViewDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/tree-view"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Tree View
      </Typography>
      <Typography className="description">
        A tree view widget presents a hierarchical list.
      </Typography>

      <Typography className="mb-40" component="div">
        Tree views can be used to represent a file system navigator displaying folders and files, an
        item representing a folder can be expanded to reveal the contents of the folder, which may
        be files, folders, or both.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic tree view
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tree-view/FileSystemNavigator.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tree-view/FileSystemNavigator.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Multi-selection
      </Typography>
      <Typography className="mb-40" component="div">
        Tree views also support multi-selection.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tree-view/MultiSelectTreeView.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tree-view/MultiSelectTreeView.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Controlled tree view
      </Typography>
      <Typography className="mb-40" component="div">
        The tree view also offers a controlled API.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tree-view/ControlledTreeView.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tree-view/ControlledTreeView.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Rich object
      </Typography>
      <Typography className="mb-40" component="div">
        While the <code>TreeView</code>/<code>TreeItem</code> component API maximizes flexibility,
        an extra step is needed to handle a rich object.
      </Typography>
      <Typography className="mb-40" component="div">
        Let&#39;s consider a data variable with the following shape, recursion can be used to handle
        it.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
const data = {
  id: 'root',
  name: 'Parent',
  children: [
    {
      id: '1',
      name: 'Child - 1',
    },
    // …
  ],
};
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tree-view/RichObjectTreeView.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tree-view/RichObjectTreeView.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        ContentComponent prop
      </Typography>
      <Typography className="mb-40" component="div">
        You can use the <code>ContentComponent</code> prop and the <code>useTreeItem</code> hook to
        further customize the behavior of the TreeItem.
      </Typography>
      <Typography className="mb-40" component="div">
        Such as limiting expansion to clicking the icon:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tree-view/IconExpansionTreeView.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tree-view/IconExpansionTreeView.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        Or increasing the width of the state indicator:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tree-view/BarTreeView.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tree-view/BarTreeView.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Customization
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Custom icons, border and animation
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tree-view/CustomizedTreeView.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tree-view/CustomizedTreeView.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Gmail clone
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tree-view/GmailTreeView.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tree-view/GmailTreeView.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Disabled tree items
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tree-view/DisabledTreeItems.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tree-view/DisabledTreeItems.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        The behavior of disabled tree items depends on the <code>disabledItemsFocusable</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        If it is false:
      </Typography>
      <ul>
        <li>
          Arrow keys will not focus disabled items and, the next non-disabled item will be focused.
        </li>
        <li>Typing the first character of a disabled item&#39;s label will not focus the item.</li>
        <li>Mouse or keyboard interaction will not expand/collapse disabled items.</li>
        <li>Mouse or keyboard interaction will not select disabled items.</li>
        <li>
          Shift + arrow keys will skip disabled items and, the next non-disabled item will be
          selected.
        </li>
        <li>Programmatic focus will not focus disabled items.</li>
      </ul>
      <Typography className="mb-40" component="div">
        If it is true:
      </Typography>
      <ul>
        <li>Arrow keys will focus disabled items.</li>
        <li>Typing the first character of a disabled item&#39;s label will focus the item.</li>
        <li>Mouse or keyboard interaction will not expand/collapse disabled items.</li>
        <li>Mouse or keyboard interaction will not select disabled items.</li>
        <li>
          Shift + arrow keys will not skip disabled items but, the disabled item will not be
          selected.
        </li>
        <li>Programmatic focus will focus disabled items.</li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#TreeView">
          https://www.w3.org/TR/wai-aria-practices/#TreeView
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
        The component follows the WAI-ARIA authoring practices.
      </Typography>
      <Typography className="mb-40" component="div">
        To have an accessible tree view you must use <code>aria-labelledby</code> or{' '}
        <code>aria-label</code> to reference or provide a label on the TreeView, otherwise screen
        readers will announce it as &quot;tree&quot;, making it hard to understand the context of a
        specific tree item.
      </Typography>
    </>
  );
}

export default TreeViewDoc;
