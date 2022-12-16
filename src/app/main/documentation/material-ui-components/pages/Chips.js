import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ChipsDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/chips"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Chip
      </Typography>
      <Typography className="description">
        Chips are compact elements that represent an input, attribute, or action.
      </Typography>

      <Typography className="mb-40" component="div">
        Chips allow users to enter information, make selections, filter content, or trigger actions.
      </Typography>
      <Typography className="mb-40" component="div">
        While included here as a standalone component, the most common use will be in some form of
        input, so some of the behavior demonstrated here is not shown in context.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic chip
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>Chip</code> component supports outlined and filled styling.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/BasicChips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/BasicChips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Chip actions
      </Typography>
      <Typography className="mb-40" component="div">
        You can use the following actions.
      </Typography>
      <ul>
        <li>
          Chips with the <code>onClick</code> prop defined change appearance on focus, hover, and
          click.
        </li>
        <li>
          Chips with the <code>onDelete</code> prop defined will display a delete icon which changes
          appearance on hover.
        </li>
      </ul>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Clickable
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/ClickeableChips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/ClickeableChips.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Deletable
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/DeleteableChips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/DeleteableChips.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Clickable and deletable
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/ClickeableAndDeleteableChips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/ClickeableAndDeleteableChips.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Clickable link
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/ClickeableLinkChips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/ClickeableLinkChips.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Custom delete icon
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/CustomDeleteIconChips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/CustomDeleteIconChips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Chip adornments
      </Typography>
      <Typography className="mb-40" component="div">
        You can add ornaments to the beginning of the component.
      </Typography>
      <Typography className="mb-40" component="div">
        Use the <code>avatar</code> prop to added a avatar or use the <code>icon</code> prop to
        added a icon.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Avatar chip
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/AvatarChips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/AvatarChips.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Icon chip
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/IconChips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/IconChips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Color chip
      </Typography>
      <Typography className="mb-40" component="div">
        You can use the <code>color</code> prop to define a color from theme palette.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/ColorChips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/ColorChips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Sizes chip
      </Typography>
      <Typography className="mb-40" component="div">
        You can use the <code>size</code> prop to define a small Chip.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/SizesChips.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/SizesChips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Chip array
      </Typography>
      <Typography className="mb-40" component="div">
        An example of rendering multiple chips from an array of values. Deleting a chip removes it
        from the array. Note that since no
        <code>onClick</code> prop is defined, the <code>Chip</code> can be focused, but does not
        gain depth while clicked or touched.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/ChipsArray.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/ChipsArray.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Chip playground
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/chips/ChipsPlayground.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/chips/ChipsPlayground.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-40" component="div">
        If the Chip is deletable or clickable then it is a button in tab order. When the Chip is
        focused (e.g. when tabbing) releasing (<code>keyup</code> event) <code>Backspace</code> or{' '}
        <code>Delete</code> will call the <code>onDelete</code> handler while releasing{' '}
        <code>Escape</code> will blur the Chip.
      </Typography>
    </>
  );
}

export default ChipsDoc;
