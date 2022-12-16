import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { closeCardDialog } from '../../../store/cardSlice';
import BoardCardForm from './BoardCardForm';

function BoardCardDialog(props) {
  const dispatch = useDispatch();
  const cardDialogOpen = useSelector(({ scrumboardApp }) => scrumboardApp.card.dialogOpen);

  return (
    <Dialog
      classes={{
        paper: 'max-w-lg w-full m-24',
      }}
      onClose={(ev) => dispatch(closeCardDialog())}
      open={cardDialogOpen}
    >
      <BoardCardForm />
    </Dialog>
  );
}

export default BoardCardDialog;
