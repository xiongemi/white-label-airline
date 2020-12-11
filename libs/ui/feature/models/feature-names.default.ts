import { FeatureName } from './feature-name.enum';

export const defaultFeatureNames: Record<FeatureName, boolean> = {
  [FeatureName.ShowCountry]: true,
  [FeatureName.ShowCurrency]: true,
};
