import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function RatingDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/rating"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Rating
      </Typography>
      <Typography className="description">
        Ratings provide insight regarding others' opinions and experiences, and can allow the user
        to submit a rating of their own.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic rating
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/rating/BasicRating.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/rating/BasicRating.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Rating precision
      </Typography>
      <Typography className="mb-40" component="div">
        The rating can display any float number with the <code>value</code> prop. Use the{' '}
        <code>precision</code> prop to define the minimum increment value change allowed.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/rating/HalfRating.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/rating/HalfRating.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Hover feedback
      </Typography>
      <Typography className="mb-40" component="div">
        You can display a label on hover to help the user pick the correct rating value. The demo
        uses the <code>onChangeActive</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/rating/HoverRating.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/rating/HoverRating.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Sizes
      </Typography>
      <Typography className="mb-40" component="div">
        For larger or smaller ratings use the <code>size</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/rating/RatingSize.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/rating/RatingSize.js')}
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
            require('app/main/documentation/material-ui-components/components/rating/CustomizedRating.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/rating/CustomizedRating.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Radio group
      </Typography>
      <Typography className="mb-40" component="div">
        The rating is implemented with a radio group, set <code>highlightSelectedOnly</code> to
        restore the natural behavior.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/rating/RadioGroupRating.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/rating/RadioGroupRating.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-40" component="div">
        (
        <a href="https://www.w3.org/WAI/tutorials/forms/custom-controls/#a-star-rating">
          WAI tutorial
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
        The accessibility of this component relies on:
      </Typography>
      <ul>
        <li>
          A radio group with its fields visually hidden. It contains six radio buttons, one for each
          star, and another for 0 stars that is checked by default. Be sure to provide a value for
          the <code>name</code> prop that is unique to the parent form.
        </li>
        <li>
          Labels for the radio buttons containing actual text (“1 Star”, “2 Stars”, …). Be sure to
          provide a suitable function to the <code>getLabelText</code> prop when the page is in a
          language other than English. You can use the{' '}
          <a href="https://mui.com/guides/localization/">included locales</a>, or provide your own.
        </li>
        <li>
          A visually distinct appearance for the rating icons. By default, the rating component uses
          both a difference of color and shape (filled and empty icons) to indicate the value. In
          the event that you are using color as the only means to indicate the value, the
          information should also be also displayed as text, as in this demo. This is important to
          match <a href="https://www.w3.org/TR/WCAG21/#use-of-color">success Criterion 1.4.1</a> of
          WCAG2.1.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/rating/TextRating.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/rating/TextRating.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        ARIA
      </Typography>
      <Typography className="mb-40" component="div">
        The read only rating has a role of &quot;img&quot;, and an aria-label that describes the
        displayed rating.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Keyboard
      </Typography>
      <Typography className="mb-40" component="div">
        Because the rating component uses radio buttons, keyboard interaction follows the native
        browser behavior. Tab will focus the current rating, and cursor keys control the selected
        rating.
      </Typography>
      <Typography className="mb-40" component="div">
        The read only rating is not focusable.
      </Typography>
    </>
  );
}

export default RatingDoc;
