import { BreadcrumbLink } from '../../search-breadcrumbs/search-breadcrumbs.props';

import { RoutesPath } from './routes-path.enum';

export const searchBreadcrumb: BreadcrumbLink = {
  text: 'breadcrumbs.search',
  url: RoutesPath.Search,
};

export const outboundBreadcrumb: BreadcrumbLink = {
  text: 'breadcrumbs.departFlight',
  url: RoutesPath.Outbound,
};

export const inboundBreadcrumb: BreadcrumbLink = {
  text: 'breadcrumbs.returnFlight',
  url: RoutesPath.Inbound,
};

export const bookingBreadcrumb: BreadcrumbLink = {
  text: 'breadcrumbs.booking',
  url: RoutesPath.Booking,
};
