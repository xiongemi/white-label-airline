import { FeatureName } from './feature-name.enum';

export const defaultFeatureName: Record<FeatureName, boolean> = {
  [FeatureName.ShowCountry]: true,
  [FeatureName.ShowCurrency]: true,
  [FeatureName.SupportChangeLanguage]: true,
  [FeatureName.ShowReset]: true,
};
