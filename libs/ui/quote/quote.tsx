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

import QuoteDetails from './components/quote-details/quote-details';
import QuoteHeader from './components/quote-header/quote-header';
import { QuoteProps } from './quote.props';

const Quote: React.FunctionComponent<QuoteProps> = ({
  quote,
  language,
  currency,
  date,
  selectQuote,
  headerButtonText,
  headerButtonClick,
}: QuoteProps) => {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleQuoteClick = () => {
    if (selectQuote) {
      selectQuote(quote);
    } else {
      toggleOpen();
    }
  };

  return (
    <>
      <ListItem button onClick={handleQuoteClick} data-testid="quote-list-item">
        <QuoteHeader
          quote={quote}
          language={language}
          currency={currency}
          date={date}
          buttonText={headerButtonText}
          buttonClick={headerButtonClick || handleQuoteClick}
        />
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
