import { ReactNode } from 'react';

import { FeatureName } from './models/feature-name.enum';

export interface FeatureProps {
  name: FeatureName;
  children: ReactNode;
}
