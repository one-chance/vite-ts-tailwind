import { Header } from '@components/Layout';
import { Routes, Route } from 'react-router-dom';

export default () => (
  <Routes>
    <Route element={<Header />} path="/*" />
  </Routes>
);
