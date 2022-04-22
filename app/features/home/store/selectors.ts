import {useSelector} from 'react-redux';
import {RootState} from '../../../store/rootReducer';
export function useLoginSelector() {
  const {loginLoading, loginRes, loginSuccess} = useSelector(
    (state: RootState) => ({
      loginLoading: state.loginReducer.loginLoading,
      loginRes: state.loginReducer.loginRes,
      loginSuccess: state.loginReducer.loginSuccess,
    }),
  );
  return {
    loginLoading,
    loginRes,
    loginSuccess,
  };
}
