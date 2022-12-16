import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function AppBarDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/app-bar"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        App Bar
      </Typography>
      <Typography className="description">
        The App Bar displays information and actions relating to the current screen.
      </Typography>

      <Typography className="mb-40" component="div">
        The top App Bar provides content and actions related to the current screen. It&#39;s used
        for branding, screen titles, navigation, and actions.
      </Typography>
      <Typography className="mb-40" component="div">
        It can transform into a contextual action bar or be used as a navbar.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic App Bar
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/app-bar/ButtonAppBar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/ButtonAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        App Bar with a primary search field
      </Typography>
      <Typography className="mb-40" component="div">
        A primary searchbar.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/app-bar/PrimarySearchAppBar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/PrimarySearchAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        App Bar with menu
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/app-bar/MenuAppBar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/MenuAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        App Bar with search field
      </Typography>
      <Typography className="mb-40" component="div">
        A side searchbar.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/app-bar/SearchAppBar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/SearchAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Dense (desktop only)
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/app-bar/DenseAppBar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/DenseAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Prominent
      </Typography>
      <Typography className="mb-40" component="div">
        A prominent app bar.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/app-bar/ProminentAppBar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/ProminentAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Bottom App Bar
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/app-bar/BottomAppBar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/BottomAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Fixed placement
      </Typography>
      <Typography className="mb-40" component="div">
        When you render the app bar position fixed, the dimension of the element doesn&#39;t impact
        the rest of the page. This can cause some part of your content to be invisible, behind the
        app bar. Here are 3 possible solutions:
      </Typography>
      <ol>
        <li>
          You can use <code>position="sticky"</code> instead of fixed. ⚠️ sticky is not supported by
          IE11.
        </li>
        <li>
          You can render a second <code>{`<Toolbar />`}</code> component:
        </li>
      </ol>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
function App() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>{/* content */}</Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
`}
      </FuseHighlight>
      <ol start="3">
        <li>
          You can use <code>theme.mixins.toolbar</code> CSS:
        </li>
      </ol>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function App() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>{/* content */}</Toolbar>
      </AppBar>
      <Offset />
    </React.Fragment>
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Scrolling
      </Typography>
      <Typography className="mb-40" component="div">
        You can use the <code>useScrollTrigger()</code> hook to respond to user scroll actions.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Hide App Bar
      </Typography>
      <Typography className="mb-40" component="div">
        The app bar hides on scroll down to leave more space for reading.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/app-bar/HideAppBar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/HideAppBar.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Elevate App Bar
      </Typography>
      <Typography className="mb-40" component="div">
        The app bar elevates on scroll to communicate that the user is not at the top of the page.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/app-bar/ElevateAppBar.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/ElevateAppBar.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Back to top
      </Typography>
      <Typography className="mb-40" component="div">
        A floating action buttons appears on scroll to make it easy to get back to the top of the
        page.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe
          component={
            require('app/main/documentation/material-ui-components/components/app-bar/BackToTop.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/app-bar/BackToTop.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        <code>{`useScrollTrigger([options]) => trigger`}</code>
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Arguments
      </Typography>
      <ol>
        <li>
          <Typography className="mb-40" component="div">
            <code>options</code> (<em>object</em> [optional]):
          </Typography>
          <ul>
            <li>
              <code>options.disableHysteresis</code> (<em>bool</em> [optional]): Defaults to{' '}
              <code>false</code>. Disable the hysteresis. Ignore the scroll direction when
              determining the <code>trigger</code> value.
            </li>
            <li>
              <code>options.target</code> (<em>Node</em> [optional]): Defaults to{' '}
              <code>window</code>.
            </li>
            <li>
              <code>options.threshold</code> (<em>number</em> [optional]): Defaults to{' '}
              <code>100</code>. Change the <code>trigger</code> value when the vertical scroll
              strictly crosses this threshold (exclusive).
            </li>
          </ul>
        </li>
      </ol>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Returns
      </Typography>
      <Typography className="mb-40" component="div">
        <code>trigger</code>: Does the scroll position match the criteria?
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Examples
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import useScrollTrigger from '@mui/material/useScrollTrigger';

function HideOnScroll(props) {
  const trigger = useScrollTrigger();
  return (
    <Slide in={!trigger}>
      <div>Hello</div>
    </Slide>
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Enable Color on Dark
      </Typography>
      <Typography className="mb-40" component="div">
        Following the{' '}
        <a href="https://material.io/design/color/dark-theme.html">Material Design guidelines</a>,
        the <code>color</code> prop has no effect on the appearance of the AppBar in dark mode. You
        can override this behavior by setting the <code>enableColorOnDark</code> prop to{' '}
        <code>true</code>.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
// Specific element via prop
<AppBar enableColorOnDark />

// Affect all AppBars via theme
<ThemeProvider
  theme={createTheme({
    components: {
      MuiAppBar: {
        defaultProps: {
          enableColorOnDark: true,
        },
      },
    },
  })}
>
  <AppBar />
</ThemeProvider>
`}
      </FuseHighlight>
    </>
  );
}

export default AppBarDoc;
