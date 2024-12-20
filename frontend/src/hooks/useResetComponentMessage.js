// Redux
import { resetPhotoMessage } from '../slices/photoSlice';

export const useResetComponentMessage = (dispatch) => {
  return () => {
    setTimeout(() => {
      dispatch(resetPhotoMessage());
    }, 2000);
  }
}