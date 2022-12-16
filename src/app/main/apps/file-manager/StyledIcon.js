import { styled } from '@mui/material/styles';
import Icon from '@mui/material/Icon';

const StyledIcon = styled(Icon)(({ theme, type }) => ({
  '&:before': {
    ...(type === 'folder' && {
      content: "'folder'",
      color: '#FFB300',
    }),
    ...(type === 'document' && {
      content: "'insert_drive_file'",
      color: '#1565C0',
    }),
    ...(type === 'spreadsheet' && {
      content: "'insert_chart'",
      color: '#4CAF50',
    }),
  },
}));

export default StyledIcon;
