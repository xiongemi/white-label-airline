import React from 'react';
import { Typography, Breadcrumbs, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import { SearchBreadcrumbsProps } from './search-breadcrumbs.props';

const SearchBreadcrumbs: React.FunctionComponent<SearchBreadcrumbsProps> = ({
  previousBreadcrumbs,
  currentBreadcrumb,
}: SearchBreadcrumbsProps) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {previousBreadcrumbs.map((breadcrumb) => (
        <RouterLink to={breadcrumb.url} component={Link} color="inherit">
          {breadcrumb.text}
        </RouterLink>
      ))}
      <Typography color="textPrimary">{currentBreadcrumb}</Typography>
    </Breadcrumbs>
  );
};

export default SearchBreadcrumbs;
