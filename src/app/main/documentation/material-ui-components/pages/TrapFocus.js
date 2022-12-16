import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TrapFocusDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/trap-focus"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Trap Focus
      </Typography>
      <Typography className="description">Trap focus within a DOM node.</Typography>

      <Typography className="mb-40" component="div">
        TrapFocus is a component that manages focus for its descendants. This is useful when
        implementing overlays such as modal dialogs, which should not allow the focus to escape
        while open.
      </Typography>
      <Typography className="mb-40" component="div">
        When <code>{`open={true}`}</code> the trap is enabled, and pressing{' '}
        <kbd className="key">Tab</kbd> or{' '}
        <kbd>
          <kbd className="key">Shift</kbd>+<kbd className="key">Tab</kbd>
        </kbd>{' '}
        will rotate focus within the inner focusable elements of the component.
      </Typography>
      <blockquote>
        <Typography className="mb-40" component="div">
          ⚠️ The component is experimental and unstable.
        </Typography>
      </blockquote>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Example
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/trap-focus/BasicTrapFocus.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/trap-focus/BasicTrapFocus.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Unstyled
      </Typography>
      <ul>
        <li>
          📦 <a href="https://bundlephobia.com/result?p=@mui/core@latest">2.0 kB gzipped</a>
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        As the component does not have any styles, it also comes with the unstyled package.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import TrapFocus from '@mui/core/Unstable_TrapFocus';
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Disable enforce focus
      </Typography>
      <Typography className="mb-40" component="div">
        Clicks within the focus trap behave normally, but clicks outside the focus trap are blocked.
      </Typography>
      <Typography className="mb-40" component="div">
        You can disable this behavior with the <code>disableEnforceFocus</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/trap-focus/DisableEnforceFocus.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/trap-focus/DisableEnforceFocus.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Lazy activation
      </Typography>
      <Typography className="mb-40" component="div">
        By default, the component moves the focus to its descendants as soon as it opens:{' '}
        <code>{`open={true}`}</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        You can disable this behavior and make it lazy with the <code>disableAutoFocus</code> prop.
        When auto focus is disabled, as in the demo below, the component only traps the focus once
        it gets focused.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/trap-focus/LazyTrapFocus.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/trap-focus/LazyTrapFocus.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Portal
      </Typography>
      <Typography className="mb-40" component="div">
        The following demo uses the{' '}
        <a href="/components/portal/">
          <code>Portal</code>
        </a>{' '}
        component to render a subset of the trap focus children into a new &quot;subtree&quot;
        outside of the current DOM hierarchy; so that they no longer form part of the focus loop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/trap-focus/PortalTrapFocus.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/trap-focus/PortalTrapFocus.js')}
        />
      </Typography>
    </>
  );
}

export default TrapFocusDoc;
