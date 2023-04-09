import { Link } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.layoutWrapper}>
      <Link className={css.Link} to="/">
        Home
      </Link>
      <Link className={css.Link} to="/contacts">
        Contacts
      </Link>
    </div>
  );
};

export default Layout;
