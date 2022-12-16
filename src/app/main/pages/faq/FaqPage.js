import FuseUtils from '@fuse/utils';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Icon from '@mui/material/Icon';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

const Root = styled('div')(({ theme }) => ({
  '& .FaqPage-header': {
    background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    color: theme.palette.primary.contrastText,
  },

  '& .FaqPage-panel': {
    margin: 0,
    border: 'none',
    '&:before': {
      display: 'none',
    },
    '&:first-of-type': {
      borderRadius: '20px 20px 0 0',
    },
    '&:last-of-type': {
      borderRadius: '0 0 20px 20px',
    },

    '&.Mui-expanded': {
      margin: 'auto',
    },
  },
}));

function FaqPage() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    axios.get('/api/faq').then((res) => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    function getFilteredArray(arr, _searchText) {
      if (_searchText.length === 0) {
        return arr;
      }
      return FuseUtils.filterArrayByString(arr, _searchText);
    }

    setFilteredData(getFilteredArray(data, searchText));
  }, [data, searchText]);

  const toggleAccordion = (panel) => (event, _expanded) => {
    setExpanded(_expanded ? panel : false);
  };

  function handleSearch(event) {
    setSearchText(event.target.value);
  }

  return (
    <Root className="w-full flex flex-col flex-auto">
      <div className="FaqPage-header flex flex-col flex-shrink-0 items-center justify-center text-center p-16 sm:p-24 h-200 sm:h-360">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3 } }}>
          <Typography
            variant="subtitle1"
            color="inherit"
            className="opacity-75 mt-8 sm:mt-16 mx-auto max-w-512 font-medium"
          >
            Frequently asked questions
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
        >
          <Typography color="inherit" className="text-32 sm:text-56 font-bold tracking-tight">
            We're here to help
          </Typography>
        </motion.div>

        <Paper className="flex flex-shrink-0 items-center h-56 w-full max-w-md mt-16 sm:mt-32 rounded-16 shadow">
          <Icon color="action" className="mx-16">
            search
          </Icon>
          <Input
            placeholder="Search in faqs..."
            className=""
            disableUnderline
            fullWidth
            inputProps={{
              'aria-label': 'Search',
            }}
            value={searchText}
            onChange={handleSearch}
          />
        </Paper>
      </div>

      <div className="flex flex-col flex-1 flex-shrink-0 max-w-xl w-full mx-auto px-16 sm:px-24 py-24 sm:py-32">
        {filteredData.length === 0 && (
          <div className="flex flex-auto items-center justify-center w-full h-full">
            <Typography color="textSecondary" variant="h5">
              There are no faqs!
            </Typography>
          </div>
        )}
        {useMemo(() => {
          const container = {
            show: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          };

          const item = {
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          };

          return (
            filteredData.length > 0 && (
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="shadow rounded-20"
              >
                {filteredData.map((faq) => (
                  <Accordion
                    component={motion.div}
                    variants={item}
                    key={faq.id}
                    classes={{
                      root: 'FaqPage-panel shadow-0',
                    }}
                    expanded={expanded === faq.id}
                    onChange={toggleAccordion(faq.id)}
                  >
                    <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
                      <div className="flex items-center py-4">
                        <Icon color="action">help_outline</Icon>
                        <Typography className="px-12 font-medium">{faq.question}</Typography>
                      </div>
                    </AccordionSummary>

                    <AccordionDetails>
                      <Typography className="text-14 px-32 pb-8 -mt-8">{faq.answer}</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </motion.div>
            )
          );
        }, [filteredData, expanded])}
      </div>
    </Root>
  );
}

export default FaqPage;
