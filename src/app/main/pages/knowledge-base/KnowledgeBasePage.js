import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Icon from '@mui/material/Icon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { motion } from 'framer-motion';
import { forwardRef, useEffect, useMemo, useState } from 'react';

const Root = styled('div')(({ theme }) => ({
  '& .KnowledgeBasePage-header': {
    background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    color: theme.palette.primary.contrastText,
  },
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function KnowledgeBasePage() {
  const [data, setData] = useState([]);
  const [dialog, setDialog] = useState({
    open: false,
    title: null,
    content: null,
  });

  useEffect(() => {
    axios.get('/api/knowledge-base').then((res) => {
      setData(res.data);
    });
  }, []);

  function handleOpenDialog(dialogData) {
    setDialog({
      open: true,
      ...dialogData,
    });
  }

  return (
    <Root className="w-full">
      <div className="KnowledgeBasePage-header flex flex-col items-center justify-center text-center p-16 sm:p-24 h-200 sm:h-360">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3 } }}>
          <Typography
            variant="subtitle1"
            color="inherit"
            className="font-medium opacity-75 mt-16 mx-auto max-w-512"
          >
            Welcome to our knowledge base
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
        >
          <Typography color="inherit" className="text-32 sm:text-56 font-bold tracking-tight">
            How can we help?
          </Typography>
        </motion.div>
      </div>

      <div>
        {useMemo(() => {
          const container = {
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          };

          const item = {
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 },
          };

          return (
            data.length > 0 && (
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-wrap justify-center max-w-xl w-full mx-auto px-16 sm:px-24 py-32"
              >
                {data.map((category) => (
                  <motion.div
                    variants={item}
                    className="max-w-md w-full max-w-512 pb-24 md:w-1/2 md:p-16"
                    key={category.id}
                  >
                    <Card className="rounded-16 shadow">
                      <List component="nav" className="p-0 pt-8">
                        <Typography className="font-medium pl-32 py-16 text-16">
                          {category.title}
                        </Typography>

                        {category.featuredArticles.map((article, index) => (
                          <ListItem
                            key={article.id}
                            onClick={() => handleOpenDialog(article)}
                            className="pl-32"
                            button
                          >
                            <ListItemIcon className="min-w-40">
                              <Icon className="text-20">import_contacts</Icon>
                            </ListItemIcon>
                            <ListItemText primary={article.title} />
                          </ListItem>
                        ))}
                      </List>
                      <div className="w-full p-24 px-32">
                        <Button className="px-24" color="primary" variant="outlined">
                          {`See all articles (${category.articlesCount})`}
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )
          );
        }, [data])}
      </div>

      {useMemo(() => {
        function handleCloseDialog() {
          setDialog({
            ...dialog,
            open: false,
          });
        }

        return (
          <Dialog
            open={dialog.open}
            onClose={handleCloseDialog}
            aria-labelledby="knowledge-base-document"
            TransitionComponent={Transition}
          >
            <DialogTitle>
              <Typography className="pt-8 font-medium text-24">{dialog.title}</Typography>
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                className="leading-normal text-14"
                dangerouslySetInnerHTML={{ __html: dialog.content }}
              />
            </DialogContent>
            <DialogActions className="p-16">
              <Button onClick={handleCloseDialog} color="primary" variant="outlined">
                CLOSE
              </Button>
            </DialogActions>
          </Dialog>
        );
      }, [dialog])}
    </Root>
  );
}

export default KnowledgeBasePage;
