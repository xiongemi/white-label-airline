export interface SearchBreadcrumbsProps {
  previousBreadcrumbs: {
    text: string;
    url: string;
  }[];
  currentBreadcrumb: string;
}
