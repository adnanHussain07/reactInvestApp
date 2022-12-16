import { useTheme, ThemeProvider } from '@mui/material/styles';
import { selectContrastMainTheme } from 'app/store/fuse/settingsSlice';
import { useSelector } from 'react-redux';

function FusePageCardedHeader(props) {
  const theme = useTheme();
  const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));

  return (
    <div className="FusePageCarded-header">
      {props.header && <ThemeProvider theme={contrastTheme}>{props.header}</ThemeProvider>}
    </div>
  );
}

export default FusePageCardedHeader;
