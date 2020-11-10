import React, { useState } from 'react';
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

import QuoteDetails from './components/quote-details/quote-details';
import { QuoteProps } from './quote.props';

const Quote: React.FunctionComponent<QuoteProps> = ({
  quote,
  header,
  onQuoteClick,
}: QuoteProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleQuoteClick = () => {
    if (onQuoteClick) {
      onQuoteClick(quote);
      return;
    }
    toggleOpen();
  };

  return (
    <>
      <ListItem button onClick={handleQuoteClick} data-testid="quote-list-item">
        {header}
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="view details" onClick={toggleOpen}>
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
