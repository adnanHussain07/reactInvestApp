import Icon from '@mui/material/Icon';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const Root = styled('div')({
  fontSize: 13,
  backgroundColor: 'rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(0, 0, 0, 0.16)',
  paddingLeft: 16,
  marginBottom: 8,
  borderRadius: 2,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& .filename': {
    fontWeight: 600,
  },
  '& .size': {
    marginLeft: 8,
    fontWeight: 300,
  },
});

function MailAttachment(props) {
  return (
    <Root className={props.className}>
      <div className="flex">
        <Typography variant="caption" className="filename">
          {props.fileName}
        </Typography>
        <Typography variant="caption" className="size">
          ({props.size})
        </Typography>
      </div>
      <IconButton size="large">
        <Icon className="text-16">close</Icon>
      </IconButton>
    </Root>
  );
}

export default MailAttachment;
