import { FetchStatus } from '@white-label-airline/store/models';
import { ReactNode } from 'react';

export interface LoadingFetchStatusProps {
  fetchStatus: FetchStatus;
  children: ReactNode;
}
