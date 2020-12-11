import { createContext } from 'react';

import { FeatureName } from './models/feature-name.enum';
import { defaultFeatureNames } from './models/feature-names.default';

export const FeaturesContext = createContext<Record<FeatureName, boolean>>(
  defaultFeatureNames
);

export const FeaturesProvider = FeaturesContext.Provider;
