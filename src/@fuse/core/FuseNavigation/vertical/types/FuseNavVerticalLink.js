import Icon from '@mui/material/Icon';
import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import FuseNavBadge from '../../FuseNavBadge';

const Root = styled(ListItem)(({ theme, ...props }) => ({
  height: 40,
  width: '100%',
  borderRadius: '6px',
  margin: '0 0 4px 0',
  paddingRight: 12,
  paddingLeft: props.itempadding > 80 ? 80 : props.itempadding,
  '&.active': {
    backgroundColor: `${theme.palette.secondary.main}!important`,
    color: `${theme.palette.secondary.contrastText}!important`,
    pointerEvents: 'none',
    transition: 'border-radius .15s cubic-bezier(0.4,0.0,0.2,1)',
    '& > .fuse-list-item-text-primary': {
      color: 'inherit',
    },
    '& > .fuse-list-item-icon': {
      color: 'inherit',
    },
  },
  '& > .fuse-list-item-icon': {
    marginRight: 12,
  },
  '& > .fuse-list-item-text': {},
  color: theme.palette.text.primary,
  textDecoration: 'none!important',
}));

function FuseNavVerticalLink(props) {
  const dispatch = useDispatch();
  const { item, nestedLevel, onItemClick } = props;

  const itempadding = nestedLevel > 0 ? 28 + nestedLevel * 16 : 12;

  return useMemo(
    () => (
      <Root
        button
        component="a"
        href={item.url}
        target={item.target ? item.target : '_blank'}
        className="fuse-list-item"
        onClick={() => onItemClick && onItemClick(item)}
        role="button"
        itempadding={itempadding}
      >
        {item.icon && (
          <Icon
            className={clsx('fuse-list-item-icon text-20 flex-shrink-0', item.iconClass)}
            color="action"
          >
            {item.icon}
          </Icon>
        )}

        <ListItemText
          className="fuse-list-item-text"
          primary={item.title}
          classes={{ primary: 'text-13 fuse-list-item-text-primary' }}
        />

        {item.badge && <FuseNavBadge badge={item.badge} />}
      </Root>
    ),
    [item, itempadding, onItemClick]
  );
}

FuseNavVerticalLink.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.string,
    url: PropTypes.string,
    target: PropTypes.string,
  }),
};
FuseNavVerticalLink.defaultProps = {};

const NavVerticalLink = FuseNavVerticalLink;

export default NavVerticalLink;
