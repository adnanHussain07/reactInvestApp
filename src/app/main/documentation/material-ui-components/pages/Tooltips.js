import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TooltipsDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/tooltips"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Tooltip
      </Typography>
      <Typography className="description">
        Tooltips display informative text when users hover over, focus on, or tap an element.
      </Typography>

      <Typography className="mb-40" component="div">
        When activated, Tooltips display a text label identifying an element, such as a description
        of its function.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic tooltip
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/BasicTooltip.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/BasicTooltip.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Positioned tooltips
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>Tooltip</code> has 12 <strong>placements</strong> choice. They don&#39;t have
        directional arrows; instead, they rely on motion emanating from the source to convey
        direction.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/PositionedTooltips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/PositionedTooltips.js')}
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
            require('app/main/documentation/material-ui-components/components/tooltips/CustomizedTooltips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/CustomizedTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Arrow tooltips
      </Typography>
      <Typography className="mb-40" component="div">
        You can use the <code>arrow</code> prop to give your tooltip an arrow indicating which
        element it refers to.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/ArrowTooltips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/ArrowTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Custom child element
      </Typography>
      <Typography className="mb-40" component="div">
        The tooltip needs to apply DOM event listeners to its child element. If the child is a
        custom React element, you need to make sure that it spreads its props to the underlying DOM
        element.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
const MyComponent = React.forwardRef(function MyComponent(props, ref) {
  //  Spread the props to the underlying DOM element.
  return <div {...props} ref={ref}>Bin</div>
});

// ...

<Tooltip title="Delete">
  <MyComponent>
</Tooltip>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        You can find a similar concept in the{' '}
        <a href="/guides/composition/#wrapping-components">wrapping components</a> guide.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Triggers
      </Typography>
      <Typography className="mb-40" component="div">
        You can define the types of events that cause a tooltip to show.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/TriggersTooltips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/TriggersTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Controlled tooltips
      </Typography>
      <Typography className="mb-40" component="div">
        You can use the <code>open</code>, <code>onOpen</code> and <code>onClose</code> props to
        control the behavior of the tooltip.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/ControlledTooltips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/ControlledTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Variable width
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>Tooltip</code> wraps long text by default to make it readable.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/VariableWidth.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/VariableWidth.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Interactive
      </Typography>
      <Typography className="mb-40" component="div">
        Tooltips are interactive by default (to pass{' '}
        <a href="https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus">
          WCAG 2.1 success criterion 1.4.13
        </a>
        ). It won&#39;t close when the user hovers over the tooltip before the{' '}
        <code>leaveDelay</code> is expired. You can disable this behavior (thus failing the success
        criterion which is required to reach level AA) by passing <code>disableInteractive</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/NonInteractiveTooltips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/NonInteractiveTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Disabled elements
      </Typography>
      <Typography className="mb-40" component="div">
        By default disabled elements like <code>{`<button>`}</code> do not trigger user interactions
        so a <code>Tooltip</code> will not activate on normal events like hover. To accommodate
        disabled elements, add a simple wrapper element, such as a <code>span</code>.
      </Typography>
      <blockquote>
        <Typography className="mb-40" component="div">
          ⚠️ In order to work with Safari, you need at least one display block or flex item below
          the tooltip wrapper.
        </Typography>
      </blockquote>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/DisabledTooltips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/DisabledTooltips.js')}
        />
      </Typography>
      <blockquote>
        <Typography className="mb-40" component="div">
          If you&#39;re not wrapping a MUI component that inherits from <code>ButtonBase</code>, for
          instance, a native <code>{`<button>`}</code> element, you should also add the CSS property{' '}
          <em>pointer-events: none;</em> to your element when disabled:
        </Typography>
      </blockquote>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Tooltip title="You don't have permission to do this">
  <span>
    <button disabled={disabled} style={disabled ? { pointerEvents: 'none' } : {}}>
      A disabled button
    </button>
  </span>
</Tooltip>
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Transitions
      </Typography>
      <Typography className="mb-40" component="div">
        Use a different transition.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/TransitionsTooltips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/TransitionsTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Follow cursor
      </Typography>
      <Typography className="mb-40" component="div">
        You can enable the tooltip to follow the cursor by setting{' '}
        <code>{`followCursor={true}`}</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/FollowCursorTooltips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/FollowCursorTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Virtual element
      </Typography>
      <Typography className="mb-40" component="div">
        In the event you need to implement a custom placement, you can use the <code>anchorEl</code>{' '}
        prop: The value of the <code>anchorEl</code> prop can be a reference to a fake DOM element.
        You need to create an object shaped like the{' '}
        <a href="https://popper.js.org/docs/v2/virtual-elements/">
          <code>VirtualElement</code>
        </a>
        .
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/AnchorElTooltips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/AnchorElTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Showing and hiding
      </Typography>
      <Typography className="mb-40" component="div">
        The tooltip is normally shown immediately when the user&#39;s mouse hovers over the element,
        and hides immediately when the user&#39;s mouse leaves. A delay in showing or hiding the
        tooltip can be added through the <code>enterDelay</code> and <code>leaveDelay</code> props,
        as shown in the Controlled Tooltips demo above.
      </Typography>
      <Typography className="mb-40" component="div">
        On mobile, the tooltip is displayed when the user longpresses the element and hides after a
        delay of 1500ms. You can disable this feature with the <code>disableTouchListener</code>{' '}
        prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/DelayTooltips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/DelayTooltips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#tooltip">
          https://www.w3.org/TR/wai-aria-practices/#tooltip
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
        By default, the tooltip only labels its child element. This is notably different from{' '}
        <code>title</code> which can either label <strong>or</strong> describe its child depending
        on whether the child already has a label. For example, in:
      </Typography>

      <FuseHighlight component="pre" className="language-html">
        {` 
<button title="some more information">A button</button>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        the <code>title</code> acts as an accessible description. If you want the tooltip to act as
        an accessible description you can pass <code>describeChild</code>. Note that you
        shouldn&#39;t use <code>describeChild</code> if the tooltip provides the only visual label.
        Otherwise, the child would have no accessible name and the tooltip would violate{' '}
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">
          success criterion 2.5.3 in WCAG 2.1
        </a>
        .
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/tooltips/AccessibilityTooltips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/tooltips/AccessibilityTooltips.js')}
        />
      </Typography>
    </>
  );
}

export default TooltipsDoc;
