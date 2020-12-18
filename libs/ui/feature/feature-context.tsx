import { createContext } from 'react';

import { defaultFeatureName } from './models/feature-name.default';
import { FeatureName } from './models/feature-name.enum';

export const FeaturesContext = createContext<Record<FeatureName, boolean>>(
  defaultFeatureName
);

export const FeaturesProvider = FeaturesContext.Provider;
