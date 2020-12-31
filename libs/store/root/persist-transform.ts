import { WlaSearchForm } from '@white-label-airline/models/search-form';
import { createTransform } from 'redux-persist';

const transformSearchFormToPersist = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState) => {
    return inboundState;
  },
  // transform state being rehydrated
  (outboundState: WlaSearchForm) => {
    return outboundState
      ? {
          ...outboundState,
          departDate: new Date(outboundState.departDate),
          returnDate:
            outboundState.returnDate && new Date(outboundState.returnDate),
        }
      : outboundState;
  },
  // define which reducers this transform gets called for.
  { whitelist: ['searchForm'] }
);

export { transformSearchFormToPersist };
