import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import clsx from 'clsx';

function PurchaseButton({ className }) {
  return (
    <Button
      component="a"
      href="https://1.envato.market/zDGL6"
      target="_blank"
      rel="noreferrer noopener"
      role="button"
      className={clsx('', className)}
      variant="contained"
      color="secondary"
    >
      <Icon className="text-16">shopping_cart</Icon>
      <span className="mx-4">Purchase FUSE React</span>
    </Button>
  );
}

export default PurchaseButton;
