import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function DialogsDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/dialogs"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Dialog
      </Typography>
      <Typography className="description">
        Dialogs inform users about a task and can contain critical information, require decisions,
        or involve multiple tasks.
      </Typography>

      <Typography className="mb-40" component="div">
        A Dialog is a type of <a href="/components/modal/">modal</a> window that appears in front of
        app content to provide critical information or ask for a decision. Dialogs disable all app
        functionality when they appear, and remain on screen until confirmed, dismissed, or a
        required action has been taken.
      </Typography>
      <Typography className="mb-40" component="div">
        Dialogs are purposefully interruptive, so they should be used sparingly.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic dialog
      </Typography>
      <Typography className="mb-40" component="div">
        Simple dialogs can provide additional details or actions about a list item. For example,
        they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding
        an account).
      </Typography>
      <Typography className="mb-40" component="div">
        Touch mechanics:
      </Typography>
      <ul>
        <li>Choosing an option immediately commits the option and closes the menu</li>
        <li>
          Touching outside of the dialog, or pressing Back, cancels the action and closes the dialog
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dialogs/SimpleDialog.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dialogs/SimpleDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Alerts
      </Typography>
      <Typography className="mb-40" component="div">
        Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a
        situation.
      </Typography>
      <Typography className="mb-40" component="div">
        Most alerts don&#39;t need titles. They summarize a decision in a sentence or two by either:
      </Typography>
      <ul>
        <li>Asking a question (e.g. &quot;Delete this conversation?&quot;)</li>
        <li>Making a statement related to the action buttons</li>
      </ul>
      <Typography className="mb-40" component="div">
        Use title bar alerts only for high-risk situations, such as the potential loss of
        connectivity. Users should be able to understand the choices based on the title and button
        text alone.
      </Typography>
      <Typography className="mb-40" component="div">
        If a title is required:
      </Typography>
      <ul>
        <li>
          Use a clear question or statement with an explanation in the content area, such as
          &quot;Erase USB storage?&quot;.
        </li>
        <li>
          Avoid apologies, ambiguity, or questions, such as &quot;Warning!&quot; or &quot;Are you
          sure?&quot;
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dialogs/AlertDialog.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dialogs/AlertDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Transitions
      </Typography>
      <Typography className="mb-40" component="div">
        You can also swap out the transition, the next example uses <code>Slide</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dialogs/AlertDialogSlide.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dialogs/AlertDialogSlide.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Form dialogs
      </Typography>
      <Typography className="mb-40" component="div">
        Form dialogs allow users to fill out form fields within a dialog. For example, if your site
        prompts for potential subscribers to fill in their email address, they can fill out the
        email field and touch &#39;Submit&#39;.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dialogs/FormDialog.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dialogs/FormDialog.js')}
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
        The dialog has a close button added to aid usability.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dialogs/CustomizedDialogs.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dialogs/CustomizedDialogs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Full-screen dialogs
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dialogs/FullScreenDialog.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dialogs/FullScreenDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Optional sizes
      </Typography>
      <Typography className="mb-40" component="div">
        You can set a dialog maximum width by using the <code>maxWidth</code> enumerable in
        combination with the <code>fullWidth</code> boolean. When the <code>fullWidth</code> prop is
        true, the dialog will adapt based on the <code>maxWidth</code> value.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dialogs/MaxWidthDialog.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dialogs/MaxWidthDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Responsive full-screen
      </Typography>
      <Typography className="mb-40" component="div">
        You may make a dialog responsively full screen using{' '}
        <a href="/components/use-media-query/#usemediaquery">
          <code>useMediaQuery</code>
        </a>
        .
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import useMediaQuery from '@mui/material/useMediaQuery';

function MyComponent() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return <Dialog fullScreen={fullScreen} />;
}
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dialogs/ResponsiveDialog.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dialogs/ResponsiveDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Confirmation dialogs
      </Typography>
      <Typography className="mb-40" component="div">
        Confirmation dialogs require users to explicitly confirm their choice before an option is
        committed. For example, users can listen to multiple ringtones but only make a final
        selection upon touching &quot;OK&quot;.
      </Typography>
      <Typography className="mb-40" component="div">
        Touching &quot;Cancel&quot; in a confirmation dialog, or pressing Back, cancels the action,
        discards any changes, and closes the dialog.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dialogs/ConfirmationDialog.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dialogs/ConfirmationDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Draggable dialog
      </Typography>
      <Typography className="mb-40" component="div">
        You can create a draggable dialog by using{' '}
        <a href="https://github.com/mzabriskie/react-draggable">react-draggable</a>. To do so, you
        can pass the imported <code>Draggable</code> component as the <code>PaperComponent</code> of
        the <code>Dialog</code> component. This will make the entire dialog draggable.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dialogs/DraggableDialog.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dialogs/DraggableDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Scrolling long content
      </Typography>
      <Typography className="mb-40" component="div">
        When dialogs become too long for the user&#39;s viewport or device, they scroll.
      </Typography>
      <ul>
        <li>
          <code>scroll=paper</code> the content of the dialog scrolls within the paper element.
        </li>
        <li>
          <code>scroll=body</code> the content of the dialog scrolls within the body element.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        Try the demo below to see what we mean:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/dialogs/ScrollDialog.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/dialogs/ScrollDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Performance
      </Typography>
      <Typography className="mb-40" component="div">
        Follow the <a href="/components/modal/#performance">Modal performance section</a>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Limitations
      </Typography>
      <Typography className="mb-40" component="div">
        Follow the <a href="/components/modal/#limitations">Modal limitations section</a>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-40" component="div">
        Follow the <a href="/components/modal/#accessibility">Modal accessibility section</a>.
      </Typography>
    </>
  );
}

export default DialogsDoc;
