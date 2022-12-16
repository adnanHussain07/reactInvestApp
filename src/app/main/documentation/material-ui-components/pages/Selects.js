import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function SelectsDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/selects"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Select
      </Typography>
      <Typography className="description">
        Select components are used for collecting user provided information from a list of options.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic select
      </Typography>
      <Typography className="mb-40" component="div">
        Menus are positioned under their emitting elements, unless they are close to the bottom of
        the viewport.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/BasicSelect.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/BasicSelect.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Advanced features
      </Typography>
      <Typography className="mb-40" component="div">
        The Select component is meant to be interchangeable with a native <code>{`<select>`}</code>{' '}
        element.
      </Typography>
      <Typography className="mb-40" component="div">
        If you are looking for more advanced features, like combobox, multiselect, autocomplete,
        async or creatable support, head to the{' '}
        <a href="/components/autocomplete/">
          <code>Autocomplete</code> component
        </a>
        . It&#39;s meant to be an improved version of the &quot;react-select&quot; and
        &quot;downshift&quot; packages.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Props
      </Typography>
      <Typography className="mb-40" component="div">
        The Select component is implemented as a custom <code>{`<input>`}</code> element of the{' '}
        <a href="/api/input-base/">InputBase</a>. It extends the{' '}
        <a href="/components/text-fields">text field components</a> sub-components, either the{' '}
        <a href="/api/outlined-input/">OutlinedInput</a>, <a href="/api/input/">Input</a>, or{' '}
        <a href="/api/filled-input/">FilledInput</a>, depending on the variant selected. It shares
        the same styles and many of the same props. Refer to the respective component&#39;s API page
        for details.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Filled and standard variants
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/SelectVariants.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/SelectVariants.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Labels and helper text
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/SelectLabels.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/SelectLabels.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Auto width
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/SelectAutoWidth.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/SelectAutoWidth.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Other props
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/SelectOtherProps.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/SelectOtherProps.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Native select
      </Typography>
      <Typography className="mb-40" component="div">
        As the user experience can be improved on mobile using the native select of the platform, we
        allow such pattern.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/NativeSelect.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/NativeSelect.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        TextField
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>TextField</code> wrapper component is a complete form control including a label,
        input and help text. You can find an example with the select mode{' '}
        <a href="/components/text-fields/#select">in this section</a>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Customization
      </Typography>
      <Typography className="mb-40" component="div">
        Here are some examples of customizing the component. You can learn more about this in the{' '}
        <a href="/customization/how-to-customize/">overrides documentation page</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        The first step is to style the <code>InputBase</code> component. Once it&#39;s styled, you
        can either use it directly as a text field or provide it to the select <code>input</code>{' '}
        prop to have a <code>select</code> field. Notice that the <code>"standard"</code> variant is
        easier to customize, since it does not wrap the contents in a <code>fieldset</code>/
        <code>legend</code> markup.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/CustomizedSelects.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/CustomizedSelects.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        🎨 If you are looking for inspiration, you can check{' '}
        <a href="https://mui-treasury.com/styles/select">
          MUI Treasury&#39;s customization examples
        </a>
        .
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Multiple select
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>Select</code> component can handle multiple selections. It&#39;s enabled with the{' '}
        <code>multiple</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        Like with the single selection, you can pull out the new value by accessing{' '}
        <code>event.target.value</code> in the <code>onChange</code> callback. It&#39;s always an
        array.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Default
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/MultipleSelect.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/MultipleSelect.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Checkmarks
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/MultipleSelectCheckmarks.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/MultipleSelectCheckmarks.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Chip
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/MultipleSelectChip.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/MultipleSelectChip.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Placeholder
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/MultipleSelectPlaceholder.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/MultipleSelectPlaceholder.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Native
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/MultipleSelectNative.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/MultipleSelectNative.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Controlled open select
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/ControlledOpenSelect.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/ControlledOpenSelect.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        With a dialog
      </Typography>
      <Typography className="mb-40" component="div">
        While it&#39;s discouraged by the Material Design guidelines, you can use a select inside a
        dialog.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/DialogSelect.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/DialogSelect.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Grouping
      </Typography>
      <Typography className="mb-40" component="div">
        Display categories with the <code>ListSubheader</code> component or the native{' '}
        <code>{`<optgroup>`}</code> element.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/GroupedSelect.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/GroupedSelect.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-40" component="div">
        To properly label your <code>Select</code> input you need an extra element with an{' '}
        <code>id</code> that contains a label. That <code>id</code> needs to match the{' '}
        <code>labelId</code> of the <code>Select</code> e.g.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<InputLabel id="label">Age</InputLabel>
<Select labelId="label" id="select" value="20">
  <MenuItem value="10">Ten</MenuItem>
  <MenuItem value="20">Twenty</MenuItem>
</Select>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        Alternatively a <code>TextField</code> with an <code>id</code> and <code>label</code>{' '}
        creates the proper markup and ids for you:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<TextField id="select" label="Age" value="20" select>
  <MenuItem value="10">Ten</MenuItem>
  <MenuItem value="20">Twenty</MenuItem>
</TextField>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        For a <a href="#native-select">native select</a>, you should mention a label by giving the
        value of the <code>id</code> attribute of the select element to the <code>InputLabel</code>
        &#39;s <code>htmlFor</code> attribute:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<InputLabel htmlFor="select">Age</InputLabel>
<NativeSelect id="select">
  <option value="10">Ten</option>
  <option value="20">Twenty</option>
</NativeSelect>
`}
      </FuseHighlight>
    </>
  );
}

export default SelectsDoc;
