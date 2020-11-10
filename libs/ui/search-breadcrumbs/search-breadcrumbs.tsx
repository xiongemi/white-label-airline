import { Typography, Breadcrumbs, Link, Box } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { SearchBreadcrumbsProps } from './search-breadcrumbs.props';

const SearchBreadcrumbs: React.FunctionComponent<SearchBreadcrumbsProps> = ({
  breadcrumbs,
}: SearchBreadcrumbsProps) => {
  const { t } = useTranslation();
  const { search } = useLocation();
  const lastBreadcrumb = breadcrumbs.pop();

  return (
    lastBreadcrumb && (
      <Box mb={3}>
        <Breadcrumbs aria-label="breadcrumb">
          {breadcrumbs.map((breadcrumb) => (
            <RouterLink
              to={{ pathname: breadcrumb.url, search }}
              component={Link}
              color="inherit"
              key={breadcrumb.text}
            >
              {t(breadcrumb.text)}
            </RouterLink>
          ))}
          <Typography color="textPrimary">{t(lastBreadcrumb.text)}</Typography>
        </Breadcrumbs>
      </Box>
    )
  );
};

export default SearchBreadcrumbs;
