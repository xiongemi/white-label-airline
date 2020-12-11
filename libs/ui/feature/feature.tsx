import React, { useContext } from 'react';

import { FeaturesContext } from './feature-context';
import { FeatureProps } from './feature.props';

export const Feature: React.FunctionComponent<FeatureProps> = ({
  name,
  children,
}: FeatureProps) => {
  const flags = useContext(FeaturesContext);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return flags[name] && children ? <>{children}</> : null;
};
