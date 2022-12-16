import { useSelector } from 'react-redux';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { useTheme, ThemeProvider } from '@mui/material/styles';
import { selectContrastMainTheme } from 'app/store/fuse/settingsSlice';
import clsx from 'clsx';

function FusePageSimpleSidebarContent(props) {
  const theme = useTheme();
  const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));

  return (
    <FuseScrollbars enable={props.innerScroll}>
      {props.header && (
        <ThemeProvider theme={contrastTheme}>
          <div
            className={clsx(
              'FusePageSimple-sidebarHeader',
              props.variant,
              props.sidebarInner && 'FusePageSimple-sidebarHeaderInnerSidebar'
            )}
          >
            {props.header}
          </div>
        </ThemeProvider>
      )}

      {props.content && <div className="FusePageSimple-sidebarContent">{props.content}</div>}
    </FuseScrollbars>
  );
}

export default FusePageSimpleSidebarContent;
