import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputBase from '@mui/material/InputBase';
import { sendMessage } from './store/chatSlice';
import { selectContacts } from './store/contactsSlice';
import i18next from 'i18next';

const StyledMessageRow = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  padding: '0 16px 4px 16px',
  flex: '0 0 auto',

  '& .avatar': {
    position: 'absolute',
    left: -32,
    margin: 0,
  },

  '& .bubble': {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    maxWidth: '100%',
  },

  '& .message': {
    whiteSpace: 'pre-wrap',
    lineHeight: 1.2,
  },

  '& .time': {
    position: 'absolute',
    display: 'none',
    width: '100%',
    fontSize: 11,
    marginTop: 8,
    top: '100%',
    left: 0,
    whiteSpace: 'nowrap',
  },

  '&.contact': {
    '& .bubble': {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.getContrastText(theme.palette.background.paper),
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      '& .time': {
        marginLeft: 12,
      },
    },
    '&.first-of-group': {
      '& .bubble': {
        borderTopLeftRadius: 20,
      },
    },
    '&.last-of-group': {
      '& .bubble': {
        borderBottomLeftRadius: 20,
      },
    },
  },
  '&.me': {
    paddingLeft: 40,

    '& .avatar': {
      order: 2,
      margin: '0 0 0 16px',
    },

    '& .bubble': {
      marginLeft: 'auto',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      '& .time': {
        justifyContent: 'flex-end',
        right: 0,
        marginRight: 12,
      },
    },
    '&.first-of-group': {
      '& .bubble': {
        borderTopRightRadius: 20,
      },
    },

    '&.last-of-group': {
      '& .bubble': {
        borderBottomRightRadius: 20,
      },
    },
  },
  '&.contact + .me, &.me + .contact': {
    paddingTop: 20,
    marginTop: 20,
  },
  '&.first-of-group': {
    '& .bubble': {
      borderTopLeftRadius: 20,
      paddingTop: 13,
    },
  },
  '&.last-of-group': {
    '& .bubble': {
      borderBottomLeftRadius: 20,
      paddingBottom: 13,
      '& .time': {
        display: 'flex',
      },
    },
  },
}));

function Chat(props) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const selectedContactId = useSelector(({ chatPanel }) => chatPanel.contacts.selectedContactId);
  const chat = useSelector(({ chatPanel }) => chatPanel.chat);
  const user = useSelector(({ chatPanel }) => chatPanel.user);

  const chatScroll = useRef(null);
  const [messageText, setMessageText] = useState('');
  const [getMsgList, setMsgList] = useState([]);

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  function scrollToBottom() {
    chatScroll.current.scrollTop = chatScroll.current.scrollHeight;
  }

  const onInputChange = (ev) => {
    setMessageText(ev.target.value);
  };

  const onMessageSubmit = (ev) => {
    
    ev.preventDefault();
    if (messageText === '') {
      return;
    }
    setMsgList(getMsgList.concat(messageText));
    setMessageText('');
    // dispatch(
    //   sendMessage({
    //     messageText,
    //     chatId: chat.id,
    //     // chatId: "9e6edacc",
    //     contactId: selectedContactId,
    //   })
    // ).then(() => {
    //   setMessageText('');
    // });
  };

  return (
    <Paper
      className={clsx('flex flex-col relative pb-64 shadow', props.className)}
      sx={{ background: (theme) => theme.palette.background.default }}
    >
      {useMemo(() => {
        const shouldShowContactAvatar = (item, i) => {
          return (
            item.who === selectedContactId &&
            ((chat.dialog[i + 1] && chat.dialog[i + 1].who !== selectedContactId) ||
              !chat.dialog[i + 1])
          );
        };

        const isFirstMessageOfGroup = (item, i) => {
          return i === 0 || (chat.dialog[i - 1] && chat.dialog[i - 1].who !== item.who);
        };

        const isLastMessageOfGroup = (item, i) => {
          return (
            i === chat.dialog.length - 1 ||
            (chat.dialog[i + 1] && chat.dialog[i + 1].who !== item.who)
          );
        };
        return (
          <FuseScrollbars
            ref={chatScroll}
            className="flex flex-1 flex-col overflow-y-auto overscroll-contain"
            option={{ suppressScrollX: true, wheelPropagation: false }}
          >
            {!chat && (
              <div className="flex flex-col flex-1 items-center justify-center p-24">
                <Icon className="text-128" color="disabled">
                  chat
                </Icon>
                <Typography className="px-16 pb-24 mt-24 text-center" color="textSecondary">
                  {i18next.t(`navigation:SENDMSG`)}
                </Typography>
              </div>
            )}

            {getMsgList && getMsgList.length > 0 && (
              <div className="flex flex-col pt-16 ltr:pl-40 rtl:pr-40 pb-40">
                {getMsgList.map((item, i) => {
                  return (
                    <StyledMessageRow
                      key={i}
                      className={clsx(
                        { me: true },
                        // { me: item.who === user.id },
                        // { contact: item.who !== user.id },
                        // { 'first-of-group': isFirstMessageOfGroup(item, i) },
                        // { 'last-of-group': isLastMessageOfGroup(item, i) }
                      )}
                    >
                      {/* {shouldShowContactAvatar(item, i) && (
                        <Avatar className="avatar" src={contact.avatar} />
                      )} */}
                      <div className="bubble shadow">
                        <div className="message">{item}</div>
                        {/* <Typography className="time" color="textSecondary">
                          {formatDistanceToNow(new Date(item.time), { addSuffix: true })}
                        </Typography> */}
                      </div>
                    </StyledMessageRow>
                  );
                })}
              </div>
            )}

            {/* {chat?.dialog.length > 0 && (
              <div className="flex flex-col pt-16 ltr:pl-40 rtl:pr-40 pb-40">
                {chat.dialog.map((item, i) => {
                  const contact =
                    item.who === user.id
                      ? user
                      : contacts.find((_contact) => _contact.id === item.who);
                  return (
                    <StyledMessageRow
                      key={item.time}
                      className={clsx(
                        { me: item.who === user.id },
                        { contact: item.who !== user.id },
                        { 'first-of-group': isFirstMessageOfGroup(item, i) },
                        { 'last-of-group': isLastMessageOfGroup(item, i) }
                      )}
                    >
                      {shouldShowContactAvatar(item, i) && (
                        <Avatar className="avatar" src={contact.avatar} />
                      )}
                      <div className="bubble shadow">
                        <div className="message">{item.message}</div>
                        <Typography className="time" color="textSecondary">
                          {formatDistanceToNow(new Date(item.time), { addSuffix: true })}
                        </Typography>
                      </div>
                    </StyledMessageRow>
                  );
                })}
              </div>
            )} */}

            {/* {chat?.dialog.length === 0 && (
              <div className="flex flex-col flex-1">
                <div className="flex flex-col flex-1 items-center justify-center">
                  <Icon className="text-128" color="disabled">
                    chat
                  </Icon>
                </div>
                <Typography className="px-16 pb-24 text-center" color="textSecondary">
                  {i18next.t(`navigation:STARTCONVO`)}
                </Typography>
              </div>
            )} */}
          </FuseScrollbars>
        );
      }, [chat, contacts, selectedContactId, user, getMsgList])}

      <form onSubmit={onMessageSubmit} className="pb-16 px-8 absolute bottom-0 left-0 right-0">
        <Paper className="rounded-24 flex items-center relative shadow">
          <InputBase
            autoFocus={false}
            id="message-input"
            className="flex flex-1 flex-grow flex-shrink-0 mx-16 ltr:mr-48 rtl:ml-48 my-8"
            placeholder="Type your message"
            onChange={onInputChange}
            value={messageText}
          />
          <IconButton
            className="absolute ltr:right-0 rtl:left-0 top-0"
            type="submit"
            size="large"
          >
            <Icon className="text-24" color="action">
              send
            </Icon>
          </IconButton>
        </Paper>
      </form>

      {/* {chat && (
        <form onSubmit={onMessageSubmit} className="pb-16 px-8 absolute bottom-0 left-0 right-0">
          <Paper className="rounded-24 flex items-center relative shadow">
            <InputBase
              autoFocus={false}
              id="message-input"
              className="flex flex-1 flex-grow flex-shrink-0 mx-16 ltr:mr-48 rtl:ml-48 my-8"
              placeholder="Type your message"
              onChange={onInputChange}
              value={messageText}
            />
            <IconButton
              className="absolute ltr:right-0 rtl:left-0 top-0"
              type="submit"
              size="large"
            >
              <Icon className="text-24" color="action">
                send
              </Icon>
            </IconButton>
          </Paper>
        </form>
      )} */}
    </Paper>
  );
}

export default Chat;
