import React from 'react';
import {
  ListItem,
  Collapse,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Box,
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import QuoteDetails from '../quote-details/quote-details';
import QuoteHeader from '../quote-header/quote-header';

import { QuoteProps } from './quote.props';

const Quote: React.FunctionComponent<QuoteProps> = ({
  quote,
  language,
  currency,
}: QuoteProps) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <QuoteHeader quote={quote} language={language} currency={currency} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="view details"
            onClick={handleClick}
          >
            {open ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider variant="middle" />
        <Box p={3}>
          <QuoteDetails quote={quote} />
        </Box>
      </Collapse>
    </>
  );
};

export default Quote;
