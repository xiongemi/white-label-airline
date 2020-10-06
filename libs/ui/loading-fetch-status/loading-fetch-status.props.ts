import { FetchStatus } from '@white-label-airline/store';
import { ReactNode } from 'react';

export interface LoadingFetchStatusProps {
  fetchStatus: FetchStatus;
  children: ReactNode;
}
