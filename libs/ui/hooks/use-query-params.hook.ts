import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SearchFormInterface } from '@white-label-airline/store';
import { parse } from 'query-string';

import { searchFormDataTransform } from '../search-form/search-form.data-transform';
import { QuotesQueryParams } from '../models/quotes-query-params.interface';

export function useQueryParamsAsSearchForm(): {
  queryParams: QuotesQueryParams;
  searchForm: SearchFormInterface;
} {
  const { search } = useLocation();
  const [queryParams, setQueryParams] = useState<QuotesQueryParams>();
  const [searchForm, setSearchForm] = useState<SearchFormInterface>();

  useEffect(() => {
    if (search) {
      const query = (parse(search) as unknown) as QuotesQueryParams;

      setQueryParams(query);
      setSearchForm(
        searchFormDataTransform.transfromQuotesQueryParamsToSearchFormValues(
          query
        )
      );
    }
  }, [search]);

  return { queryParams, searchForm };
}
