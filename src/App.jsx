import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Professional from './pages/Professional';
import Personal from './pages/Personal';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="professional" element={<Professional />} />
          <Route path="personal" element={<Personal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
