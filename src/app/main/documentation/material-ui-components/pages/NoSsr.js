import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function NoSsrDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/no-ssr"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        No SSR
      </Typography>
      <Typography className="description">
        NoSsr purposely removes components from the subject of Server Side Rendering (SSR).
      </Typography>

      <Typography className="mb-40" component="div">
        This component can be useful in a variety of situations:
      </Typography>
      <ul>
        <li>Escape hatch for broken dependencies not supporting SSR.</li>
        <li>Improve the time-to-first paint on the client by only rendering above the fold.</li>
        <li>Reduce the rendering time on the server.</li>
        <li>Under too heavy server load, you can turn on service degradation.</li>
        <li>
          Improve the time-to-interactive by only rendering what&#39;s important (with the{' '}
          <code>defer</code> property).
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Client-side deferring
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/no-ssr/SimpleNoSsr.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/no-ssr/SimpleNoSsr.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Frame deferring
      </Typography>
      <Typography className="mb-40" component="div">
        At its core, the NoSsr component&#39;s purpose is to <strong>defer rendering</strong>. As
        it&#39;s illustrated in the previous demo, you can use it to defer the rendering from the
        server to the client.
      </Typography>
      <Typography className="mb-40" component="div">
        But you can also use it to defer the rendering within the client itself. You can{' '}
        <strong>wait a screen frame</strong> with the <code>defer</code> property to render the
        children. React does{' '}
        <a href="https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects">
          2 commits
        </a>{' '}
        instead of 1.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/no-ssr/FrameDeferring.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/no-ssr/FrameDeferring.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Unstyled
      </Typography>
      <ul>
        <li>
          📦 <a href="https://bundlephobia.com/result?p=@mui/core@latest">784 B gzipped</a>
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        As the component does not have any styles, it also comes with the unstyled package.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import NoSsr from '@mui/core/NoSsr';
`}
      </FuseHighlight>
    </>
  );
}

export default NoSsrDoc;
