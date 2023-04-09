import Home from './Home/Home';
import ContactList from './ContactList/ContactList';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
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
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contacts" element={<ContactList />}></Route>
      </Routes>
    </div>
  );
};
