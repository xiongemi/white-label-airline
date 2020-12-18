import { Typography, Breadcrumbs, Link, Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import {
  BreadcrumbLink,
  SearchBreadcrumbsProps,
} from './search-breadcrumbs.props';

const SearchBreadcrumbs: React.FunctionComponent<SearchBreadcrumbsProps> = ({
  breadcrumbs,
}: SearchBreadcrumbsProps) => {
  const { t } = useTranslation();
  const { search } = useLocation();
  const [lastBreadcrumb, setLastBreadcrumb] = useState<BreadcrumbLink>();

  useEffect(() => {
    setLastBreadcrumb(breadcrumbs.pop());
  }, [breadcrumbs]);

  return lastBreadcrumb ? (
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
  ) : null;
};

export default SearchBreadcrumbs;
