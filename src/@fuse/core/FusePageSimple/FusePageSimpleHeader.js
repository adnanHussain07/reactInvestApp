import { useSelector } from 'react-redux';
import { useTheme, ThemeProvider } from '@mui/material/styles';
import { selectContrastMainTheme } from 'app/store/fuse/settingsSlice';
import clsx from 'clsx';

function FusePageSimpleHeader(props) {
  const theme = useTheme();
  const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));

  return (
    <div className={clsx('FusePageSimple-header')}>
      {props.header && <ThemeProvider theme={contrastTheme}>{props.header}</ThemeProvider>}
    </div>
  );
}

export default FusePageSimpleHeader;
