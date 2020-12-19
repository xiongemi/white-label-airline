import { Dispatch } from '@reduxjs/toolkit';
import { languageSlice } from '@white-label-airline/store/language';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeLanguage(language: string) {
      dispatch(languageSlice.actions.setLanguage(language));
    },
  };
};

type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

type HeaderProps = mapDispatchToPropsType & {
  logoImage: string;
};

export { HeaderProps, mapDispatchToProps };
