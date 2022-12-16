import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function MasonryDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/masonry"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Masonry
      </Typography>
      <Typography className="description">
        Masonry lays out contents of different sizes as blocks of the same width and variable height
        with configurable gaps.
      </Typography>

      <Typography className="mb-40" component="div">
        Masonry maintains a list of content blocks with a consistent width but variable height. The
        contents are ordered by row. If a row is already filled with the specified number of
        columns, the next item starts another row, and it is added to the shortest column.
      </Typography>
      <blockquote>
        <Typography className="mb-40" component="div">
          Warning: This component has been developed with the use of CSS Grid Level 2.
          Unfortunately, Chrome only allows to render at most 1,000 rows for each grid. Hence, with
          the current design, a masonry component has a maximum height of 2,000px, and the items
          beyond this height will fail to be rendered. An{' '}
          <a href="https://github.com/mui-org/material-ui/issues/27934">issue</a> has been created
          on GitHub to gather workarounds for this limitation. It is worth noting that this
          limitation does not exist on Firefox or Safari.
        </Typography>
      </blockquote>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic masonry
      </Typography>
      <Typography className="mb-40" component="div">
        A simple example of a <code>{`<Masonry />`}</code>. <code>{`<Masonry />`}</code> is a
        container for one or more <code>{`<MasonryItem />`}</code>s.{' '}
        <code>{`<MasonryItem />`}</code> can receive any element including <code>{`<div />`}</code>{' '}
        and <code>{`<img />`}</code>. Also, it is important to note that each{' '}
        <code>{`<MasonryItem />`}</code> accepts only one element.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/masonry/BasicMasonry.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/masonry/BasicMasonry.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Image masonry
      </Typography>
      <Typography className="mb-40" component="div">
        This example demonstrates the use of <code>{`<Masonry />`}</code> for images.{' '}
        <code>{`<Masonry />`}</code> orders its children by row. If you would like to order images
        by column, you can use <code>{`<ImageList variant="masonry" />`}</code>. More details on
        this component can be found in{' '}
        <a href="/components/image-list/#masonry-image-list">Masonry Image List</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/masonry/ImageMasonry.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/masonry/ImageMasonry.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Columns
      </Typography>
      <Typography className="mb-40" component="div">
        This example demonstrates the use of the <code>columns</code> to configure the number of
        columns of a <code>{`<Masonry />`}</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/masonry/FixedColumns.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/masonry/FixedColumns.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        <code>columns</code> accepts responsive values:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/masonry/ResponsiveColumns.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/masonry/ResponsiveColumns.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Spacing
      </Typography>
      <Typography className="mb-40" component="div">
        This example demonstrates the use of the <code>spacing</code> to configure the spacing
        between <code>{`<MasonryItem />`}</code>s. It is important to note that <code>spacing</code>{' '}
        is a factor of the theme&#39;s spacing.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/masonry/FixedSpacing.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/masonry/FixedSpacing.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        <code>spacing</code> accepts responsive values:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/masonry/ResponsiveSpacing.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/masonry/ResponsiveSpacing.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Column spanning
      </Typography>
      <Typography className="mb-40" component="div">
        This example demonstrates the use of the <code>columnSpan</code> to configure the number of
        columns taken up by each <code>{`<MasonryItem />`}</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/masonry/DiffColSizeMasonry.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/masonry/DiffColSizeMasonry.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        However, you have to choose the value of <code>columnSpan</code> for each item carefully or
        fine-tune heights of items so that your masonry does not break.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/masonry/DiffColSizeMasonryBroken.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/masonry/DiffColSizeMasonryBroken.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Server-side rendering
      </Typography>
      <Typography className="mb-40" component="div">
        This example demonstrates the use of the <code>defaultHeight</code> to configure a fixed
        height of each <code>{`<MasonryItem />`}</code>. This is used for server-side rendering. By
        default, <code>height: 100%</code> will be set to the content of{' '}
        <code>{`<MasonryItem />`}</code>. If you change this, there can be unwanted gap between{' '}
        <code>{`<MasonryItem />`}</code> and the content that you pass to it.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/masonry/SSRMasonry.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/masonry/SSRMasonry.js')}
        />
      </Typography>
    </>
  );
}

export default MasonryDoc;
