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
import { Timetable } from './Timetable/Timetable';
import { Filter } from './Filter/Filter';

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
          <Route path="/timetable" element={<Timetable />} />
          <Route
            path="/filter"
            element={
              <Filter
                isOpen
                searchable
                options={[
                  { value: 'xs', label: 'Очень маленький' },
                  { value: 'sm', label: 'Маленький' },
                  { value: 'md', label: 'Средний' },
                  { value: 'lg', label: 'Большой' },
                  { value: 'xl', label: 'Очень большой' },
                ]}
              />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};
