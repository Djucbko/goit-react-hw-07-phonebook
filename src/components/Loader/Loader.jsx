import { TailSpin } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => (
  <div className={css.loader}>
    <TailSpin
      height="80"
      width="80"
      color="rgba(23, 26, 32, 0.8)"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </div>
);
