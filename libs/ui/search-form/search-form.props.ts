import { WlaSearchForm } from '@white-label-airline/models/search-form';

interface SearchProps {
  searchFormValues: WlaSearchForm;
  submitSearchForm: (values: WlaSearchForm) => void;
  resetSearchForm: () => void;
  locale: Locale;
}

export { SearchProps };
