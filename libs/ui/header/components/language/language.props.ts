import { Dispatch } from '@reduxjs/toolkit';
import {
  languageSelectors,
  languageSlice,
} from '@white-label-airline/store/language';
import { WlaRootState } from '@white-label-airline/store/root';

const mapStateToProps = (state: WlaRootState) => {
  return {
    currentLanguage: languageSelectors.getLanguage(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeLanguage(language: string) {
      dispatch(languageSlice.actions.setLanguage(language));
    },
  };
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

type LanguageProps = mapStateToPropsType &
  mapDispatchToPropsType & {
    supportedLanguages: string[];
    defaultLanguage: string;
  };

export { LanguageProps, mapStateToProps, mapDispatchToProps };
