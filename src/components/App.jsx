import Container from './Container/Container';
import AppBar from './Appbar/Appbar';
import { Routes, Route } from 'react-router-dom';
import Counter from './Counter';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { Boxes } from './views/Boxes';
import ColorPicker from './ColorPicker';
import NotFound from './views/NotFound';
import Dropdown from './Dropdown';
import { Alerts } from './views/Alerts';

export const App = () => {
  return (
    <>
      <Container>
        <AppBar />

        <Routes>
          <Route path="/boxes" element={<Boxes />} />
          <Route path="/colorPicker" element={<ColorPicker />} />
          <Route path="/counter" element={<Counter initialValue={50} />} />
          <Route path="/dropdown" element={<Dropdown />} />
          <Route path="/alerts" element={<Alerts />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};
