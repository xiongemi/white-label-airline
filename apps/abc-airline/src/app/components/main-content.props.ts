import { languageSelectors } from '@white-label-airline/store/language';
import { WlaRootState } from '@white-label-airline/store/root';
import { History } from 'history';

import { defaultLanguage } from '../i18n';

const mapStateToProps = (state: WlaRootState) => {
  return {
    language: languageSelectors.getLanguage(state) || defaultLanguage,
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;

type MainContentProps = mapStateToPropsType & {
  history: History;
};

export { mapStateToProps, MainContentProps };
