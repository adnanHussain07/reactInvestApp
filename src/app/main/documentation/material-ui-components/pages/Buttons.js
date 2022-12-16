import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ButtonsDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/buttons"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Button
      </Typography>
      <Typography className="description">
        Buttons allow users to take actions, and make choices, with a single tap.
      </Typography>

      <Typography className="mb-40" component="div">
        Buttons communicate actions that users can take. They are typically placed throughout your
        UI, in places like:
      </Typography>
      <ul>
        <li>Modal windows</li>
        <li>Forms</li>
        <li>Cards</li>
        <li>Toolbars</li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic button
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>Button</code> comes with three variants: text (default), contained, and outlined.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/BasicButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/BasicButtons.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Text button
      </Typography>
      <Typography className="mb-40" component="div">
        <a href="https://material.io/components/buttons#text-button">Text buttons</a>
        are typically used for less-pronounced actions, including those located: in dialogs, in
        cards. In cards, text buttons help maintain an emphasis on card content.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/TextButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/TextButtons.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Contained button
      </Typography>
      <Typography className="mb-40" component="div">
        <a href="https://material.io/components/buttons#contained-button">Contained buttons</a>
        are high-emphasis, distinguished by their use of elevation and fill. They contain actions
        that are primary to your app.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/ContainedButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/ContainedButtons.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        You can remove the elevation with the <code>disableElevation</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/DisableElevation.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/DisableElevation.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Outlined button
      </Typography>
      <Typography className="mb-40" component="div">
        <a href="https://material.io/components/buttons#outlined-button">Outlined buttons</a> are
        medium-emphasis buttons. They contain actions that are important but aren&#39;t the primary
        action in an app.
      </Typography>
      <Typography className="mb-40" component="div">
        Outlined buttons are also a lower emphasis alternative to contained buttons, or a higher
        emphasis alternative to text buttons.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/OutlinedButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/OutlinedButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Handling clicks
      </Typography>
      <Typography className="mb-40" component="div">
        All components accept an <code>onClick</code> handler that is applied to the root DOM
        element.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Button
  onClick={() => {
    alert('clicked');

>
  Click me
</Button>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        Note that the documentation <a href="/guides/api/#native-properties">avoids</a> mentioning
        native props (there are a lot) in the API section of the components.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Color
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/ColorButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/ColorButtons.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        In addition to using the default button colors, you can add custom ones, or disable any you
        don&#39;t need. See the{' '}
        <a href="/customization/palette/#adding-new-colors">Adding new colors</a> example for more
        info.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Sizes
      </Typography>
      <Typography className="mb-40" component="div">
        For larger or smaller buttons, use the <code>size</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/ButtonSizes.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/ButtonSizes.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Upload button
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/UploadButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/UploadButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Buttons with icons and label
      </Typography>
      <Typography className="mb-40" component="div">
        Sometimes you might want to have icons for certain buttons to enhance the UX of the
        application as we recognize logos more easily than plain text. For example, if you have a
        delete button you can label it with a dustbin icon.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/IconLabelButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/IconLabelButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Icon button
      </Typography>
      <Typography className="mb-40" component="div">
        Icon buttons are commonly found in app bars and toolbars.
      </Typography>
      <Typography className="mb-40" component="div">
        Icons are also appropriate for toggle buttons that allow a single choice to be selected or
        deselected, such as adding or removing a star to an item.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/IconButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/IconButtons.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Sizes
      </Typography>
      <Typography className="mb-40" component="div">
        For larger or smaller icon buttons, use the <code>size</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/IconButtonSizes.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/IconButtonSizes.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Colors
      </Typography>
      <Typography className="mb-40" component="div">
        Use <code>color</code> prop to apply theme color palette to component.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/IconButtonColors.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/IconButtonColors.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Customization
      </Typography>
      <Typography className="mb-40" component="div">
        Here are some examples of customizing the component. You can learn more about this in the{' '}
        <a href="/customization/how-to-customize/">overrides documentation page</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/CustomizedButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/CustomizedButtons.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        🎨 If you are looking for inspiration, you can check{' '}
        <a href="https://mui-treasury.com/styles/button">
          MUI Treasury&#39;s customization examples
        </a>
        .
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Loading button
      </Typography>
      <Typography className="mb-40" component="div">
        The loading buttons can show loading state and disable interactions.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/LoadingButtons.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/LoadingButtons.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        Toggle the loading switch to see the transition between the different states.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/LoadingButtonsTransition.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/LoadingButtonsTransition.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Complex button
      </Typography>
      <Typography className="mb-40" component="div">
        The Text Buttons, Contained Buttons, Floating Action Buttons and Icon Buttons are built on
        top of the same component: the <code>ButtonBase</code>. You can take advantage of this
        lower-level component to build custom interactions.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/ButtonBase.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/ButtonBase.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Third-party routing library
      </Typography>
      <Typography className="mb-40" component="div">
        One frequent use case is to perform navigation on the client only, without an HTTP
        round-trip to the server. The <code>ButtonBase</code> component provides the{' '}
        <code>component</code> prop to handle this use case. Here is a{' '}
        <a href="/guides/routing/#button">more detailed guide</a>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Limitations
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Cursor not-allowed
      </Typography>
      <Typography className="mb-40" component="div">
        The ButtonBase component sets <code>pointer-events: none;</code> on disabled buttons, which
        prevents the appearance of a disabled cursor.
      </Typography>
      <Typography className="mb-40" component="div">
        If you wish to use <code>not-allowed</code>, you have two options:
      </Typography>
      <ol>
        <li>
          <strong>CSS only</strong>. You can remove the pointer-events style on the disabled state
          of the <code>{`<button>`}</code> element:
        </li>
      </ol>

      <FuseHighlight component="pre" className="language-css">
        {` 
.MuiButtonBase-root:disabled {
  cursor: not-allowed;
  pointer-events: auto;
}
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        However:
      </Typography>
      <ul>
        <li>
          You should add <code>pointer-events: none;</code> back when you need to display{' '}
          <a href="/components/tooltips/#disabled-elements">tooltips on disabled elements</a>.
        </li>
        <li>
          The cursor won&#39;t change if you render something other than a button element, for
          instance, a link <code>{`<a>`}</code> element.
        </li>
      </ul>
      <ol start="2">
        <li>
          <strong>DOM change</strong>. You can wrap the button:
        </li>
      </ol>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<span style={{ cursor: 'not-allowed' }}>
  <Button component={Link} disabled>
    disabled
  </Button>
</span>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        This has the advantage of supporting any element, for instance, a link <code>{`<a>`}</code>{' '}
        element.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Unstyled
      </Typography>
      <Typography className="mb-40" component="div">
        The button also comes with an unstyled version. It&#39;s ideal for doing heavy
        customizations and minimizing bundle size.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Unstyled component
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import ButtonUnstyled from '@mui/core/ButtonUnstyled';
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/UnstyledButtonsSimple.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/UnstyledButtonsSimple.js')}
        />
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Customizing the root element
      </Typography>
      <Typography className="mb-40" component="div">
        By default, the <code>ButtonUnstyled</code> renders a native <code>button</code> element.
        You are free to override this by setting the <code>component</code> or{' '}
        <code>components.Root</code> prop. If a non-interactive element (such as a span) is provided
        this way, the <code>ButtonUnstyled</code> will take care of adding accessibility attributes.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/UnstyledButtonsSpan.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/UnstyledButtonsSpan.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        Compare the attributes on the span with the button from the previous demo.
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Complex customization
      </Typography>
      <Typography className="mb-40" component="div">
        You are not limited to using HTML elements for the button structure. SVG elements, even with
        complex structure, are equally acceptable.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/UnstyledButtonCustom.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/UnstyledButtonCustom.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        useButton hook
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import { useButton } from '@mui/core/ButtonUnstyled';
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        If you need to use Button&#39;s functionality in another component, you can use the{' '}
        <code>useButton</code> hook. It returns props to be placed on a custom button element and
        fields representing the internal state of the button.
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>useButton</code> hook requires the ref of the element it&#39;ll be used on.
        Additionally, you need to provide the <code>component</code> prop (unless you intend to use
        the plain <code>button</code>).
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/buttons/UseButton.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/buttons/UseButton.js')}
        />
      </Typography>
    </>
  );
}

export default ButtonsDoc;
