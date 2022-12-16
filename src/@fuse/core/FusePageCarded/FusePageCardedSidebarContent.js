import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { useTheme, ThemeProvider } from '@mui/material/styles';
import { selectContrastMainTheme } from 'app/store/fuse/settingsSlice';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

function FusePageCardedSidebarContent(props) {
  const theme = useTheme();
  const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));

  return (
    <>
      {props.header && (
        <ThemeProvider theme={contrastTheme}>
          <div className={clsx('FusePageCarded-sidebarHeader', props.variant)}>{props.header}</div>
        </ThemeProvider>
      )}

      {props.content && (
        <FuseScrollbars className="FusePageCarded-sidebarContent" enable={props.innerScroll}>
          {props.content}
        </FuseScrollbars>
      )}
    </>
  );
}

export default FusePageCardedSidebarContent;
