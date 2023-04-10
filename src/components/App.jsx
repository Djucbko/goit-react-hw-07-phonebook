import Home from '../components/Pages/Home/Home';
import ContactList from './ContactList/ContactList';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { getIsLoading, getError } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import  { Toaster } from 'react-hot-toast';
export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Layout />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<ContactList />} />
      </Routes>
      {isLoading && !error && <Loader />}
      <Toaster />
    </div>
  );
};
