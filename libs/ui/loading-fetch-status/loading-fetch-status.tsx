import React from 'react';
import { FetchStatus } from '@white-label-airline/store';

import Loading from '../loading/loading';

import { LoadingFetchStatusProps } from './loading-fetch-status.props';

const LoadingFetchStatus: React.FunctionComponent<LoadingFetchStatusProps> = ({
  fetchStatus,
  children,
}: LoadingFetchStatusProps) => {
  return fetchStatus === FetchStatus.Loading ||
    fetchStatus === FetchStatus.Initial ? (
    <Loading />
  ) : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  );
};

export default LoadingFetchStatus;
