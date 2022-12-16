import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { styled, alpha } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import FuseNavBadge from '../../FuseNavBadge';
import FuseNavItem from '../../FuseNavItem';

const Root = styled('ul')(({ theme, ...props }) => ({
  padding: 0,
  '&.open': {},
  '& > .fuse-list-item': {
    height: 40,
    width: '100%',
    borderRadius: '6px',
    margin: '0 0 4px 0',
    paddingRight: 12,
    paddingLeft: props.itempadding > 80 ? 80 : props.itempadding,
    color: alpha(theme.palette.text.primary, 0.7),
    '&:hover': {
      color: theme.palette.text.primary,
    },
    '& > .fuse-list-item-icon': {
      marginRight: 12,
      color: 'inherit',
    },
  },
}));

function needsToBeOpened(location, item) {
  return location && isUrlInChildren(item, location.pathname);
}

function isUrlInChildren(parent, url) {
  if (!parent.children) {
    return false;
  }

  for (let i = 0; i < parent.children.length; i += 1) {
    if (parent.children[i].children) {
      if (isUrlInChildren(parent.children[i], url)) {
        return true;
      }
    }

    if (parent.children[i].url === url || url.includes(parent.children[i].url)) {
      return true;
    }
  }

  return false;
}

function FuseNavVerticalCollapse(props) {
  const [open, setOpen] = useState(() => needsToBeOpened(props.location, props.item));
  const { item, nestedLevel, onItemClick } = props;
  const itempadding = nestedLevel > 0 ? 28 + nestedLevel * 16 : 12;

  const location = useLocation();

  useEffect(() => {
    if (needsToBeOpened(location, props.item)) {
      if (!open) {
        setOpen(true);
      }
    }
    // eslint-disable-next-line
	}, [location, props.item]);

  return useMemo(
    () => (
      <Root className={clsx(open && 'open')} itempadding={itempadding}>
        <ListItem
          button
          className="fuse-list-item"
          onClick={() => setOpen(!open)}
          component={item.url ? NavLinkAdapter : 'li'}
          to={item.url}
          role="button"
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
            classes={{ primary: 'text-13 font-medium' }}
          />

          {item.badge && <FuseNavBadge className="mx-4" badge={item.badge} />}

          <IconButton
            disableRipple
            className="w-40 h-40 -mx-12 p-0 focus:bg-transparent hover:bg-transparent"
            onClick={(ev) => ev.preventDefault()}
            size="large"
          >
            <Icon className="text-16 arrow-icon" color="inherit">
              {open ? 'expand_less' : 'expand_more'}
            </Icon>
          </IconButton>
        </ListItem>

        {item.children && (
          <Collapse in={open} className="collapse-children">
            {item.children.map((_item) => (
              <FuseNavItem
                key={_item.id}
                type={`vertical-${_item.type}`}
                item={_item}
                nestedLevel={nestedLevel + 1}
                onItemClick={onItemClick}
              />
            ))}
          </Collapse>
        )}
      </Root>
    ),
    [
      item.badge,
      item.children,
      item.icon,
      item.iconClass,
      item.title,
      item.url,
      itempadding,
      nestedLevel,
      onItemClick,
      open,
    ]
  );
}

FuseNavVerticalCollapse.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.string,
    children: PropTypes.array,
  }),
};
FuseNavVerticalCollapse.defaultProps = {};

const NavVerticalCollapse = FuseNavVerticalCollapse;

export default NavVerticalCollapse;
