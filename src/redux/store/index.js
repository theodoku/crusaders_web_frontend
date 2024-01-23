import { configureStore } from '@reduxjs/toolkit';

import rootReducer from '../reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: true,
    serializableCheck: false,
  }),
});

export default store;
