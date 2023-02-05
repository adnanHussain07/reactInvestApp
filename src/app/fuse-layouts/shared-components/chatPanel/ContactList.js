import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { motion } from 'framer-motion';
import { memo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChat } from './store/chatSlice';
import { selectContacts } from './store/contactsSlice';
import { openChatPanel } from './store/stateSlice';
import ContactButton from './ContactButton';

const Root = styled(FuseScrollbars)(({ theme }) => ({
  background: theme.palette.background.paper,
}));

function ContactList(props) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const selectedContactId = useSelector(({ chatPanel }) => chatPanel.contacts.selectedContactId);
  const user = useSelector(({ chatPanel }) => chatPanel.user);

  const contactListScroll = useRef(null);

  const handleContactClick = (contactId) => {
    
    dispatch(openChatPanel());
    dispatch(getChat({ contactId }));
    scrollToTop();
  };

  const scrollToTop = () => {
    contactListScroll.current.scrollTop = 0;
  };

  const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.6 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <Root
      className="flex flex-shrink-0 flex-col overflow-y-auto py-8 overscroll-contain"
      ref={contactListScroll}
      option={{ suppressScrollX: true, wheelPropagation: false }}
    >
      {contacts.length > 0 && (
        <>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col flex-shrink-0"
          >
            {user &&
              user.chatList &&
              user.chatList.map((chat) => {
                const contact = contacts.find((_contact) => _contact.id === chat.contactId);
                return (
                  <motion.div variants={item} key={contact.id}>
                    <ContactButton
                      contact={contact}
                      selectedContactId={selectedContactId}
                      onClick={handleContactClick}
                    />
                  </motion.div>
                );
              })}
            <Divider className="mx-24 my-8" />
            {contacts.map((contact) => {
              const chatContact = user.chatList.find((_chat) => _chat.contactId === contact.id);
              return !chatContact ? (
                <motion.div variants={item} key={contact.id}>
                  <ContactButton
                    contact={contact}
                    selectedContactId={selectedContactId}
                    onClick={handleContactClick}
                  />
                </motion.div>
              ) : (
                ''
              );
            })}
          </motion.div>
        </>
      )}
    </Root>
  );
}

export default memo(ContactList);
