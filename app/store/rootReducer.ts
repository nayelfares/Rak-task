import {combineReducers} from 'redux';
import {loginReducer} from '../features/onboarding/store/reducers';

const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
