import Icon from '@mui/material/Icon';
import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { memo, useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import FuseNavBadge from '../../FuseNavBadge';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none!important',
  minHeight: 48,
  '&.active': {
    backgroundColor: `${theme.palette.secondary.main}!important`,
    color: `${theme.palette.secondary.contrastText}!important`,
    pointerEvents: 'none',
    '& .fuse-list-item-text-primary': {
      color: 'inherit',
    },
    '& .fuse-list-item-icon': {
      color: 'inherit',
    },
  },
  '& .fuse-list-item-icon': {},
  '& .fuse-list-item-text': {
    padding: '0 0 0 16px',
  },
}));

function FuseNavHorizontalLink(props) {
  const { item } = props;

  return useMemo(
    () => (
      <StyledListItem
        button
        component="a"
        href={item.url}
        target={item.target ? item.target : '_blank'}
        className={clsx('fuse-list-item')}
        role="button"
      >
        {item.icon && (
          <Icon
            className={clsx('fuse-list-item-icon text-16 flex-shrink-0', item.iconClass)}
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

        {item.badge && <FuseNavBadge className="ltr:ml-8 rtl:mr-8" badge={item.badge} />}
      </StyledListItem>
    ),
    [item.badge, item.icon, item.iconClass, item.target, item.title, item.url]
  );
}

FuseNavHorizontalLink.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.string,
    url: PropTypes.string,
    target: PropTypes.string,
  }),
};

FuseNavHorizontalLink.defaultProps = {};

const NavHorizontalLink = withRouter(memo(FuseNavHorizontalLink));

export default NavHorizontalLink;
