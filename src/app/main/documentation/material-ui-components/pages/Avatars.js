import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function AvatarsDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/avatars"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Avatar
      </Typography>
      <Typography className="description">
        Avatars are found throughout material design with uses in everything from tables to dialog
        menus.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Image avatars
      </Typography>
      <Typography className="mb-40" component="div">
        Image avatars can be created by passing standard <code>img</code> props <code>src</code> or{' '}
        <code>srcSet</code> to the component.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/avatars/ImageAvatars.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/avatars/ImageAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Letter avatars
      </Typography>
      <Typography className="mb-40" component="div">
        Avatars containing simple characters can be created by passing a string as{' '}
        <code>children</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/avatars/LetterAvatars.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/avatars/LetterAvatars.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        You can use different background colors for the avatar. The following demo generates the
        color based on the name of the person.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/avatars/BackgroundLetterAvatars.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/avatars/BackgroundLetterAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Sizes
      </Typography>
      <Typography className="mb-40" component="div">
        You can change the size of the avatar with the <code>height</code> and <code>width</code>{' '}
        CSS properties.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/avatars/SizeAvatars.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/avatars/SizeAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Icon avatars
      </Typography>
      <Typography className="mb-40" component="div">
        Icon avatars are created by passing an icon as <code>children</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/avatars/IconAvatars.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/avatars/IconAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Variants
      </Typography>
      <Typography className="mb-40" component="div">
        If you need square or rounded avatars, use the <code>variant</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/avatars/VariantAvatars.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/avatars/VariantAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Fallbacks
      </Typography>
      <Typography className="mb-40" component="div">
        If there is an error loading the avatar image, the component falls back to an alternative in
        the following order:
      </Typography>
      <ul>
        <li>the provided children</li>
        <li>
          the first letter of the <code>alt</code> text
        </li>
        <li>a generic avatar icon</li>
      </ul>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/avatars/FallbackAvatars.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/avatars/FallbackAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Grouped
      </Typography>
      <Typography className="mb-40" component="div">
        <code>AvatarGroup</code> renders its children as a stack.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/avatars/GroupAvatars.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/avatars/GroupAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        With badge
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/avatars/BadgeAvatars.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/avatars/BadgeAvatars.js')}
        />
      </Typography>
    </>
  );
}

export default AvatarsDoc;
