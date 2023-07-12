import Container from './Container/Container';
import AppBar from './Appbar/Appbar';
import { Routes, Route } from 'react-router-dom';
import Counter from './Counter';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { FormikFromHooks } from './FormikFromHooks/FormikFromHooks';
import { FormikComponent } from './FormikComponent/FormikComponent';
import ColorPicker from './ColorPicker';
import NotFound from './views/NotFound';
import Dropdown from './Dropdown';
import { Alerts } from './views/Alerts';
import { Timetable } from './Timetable/Timetable';
import { Filter } from './Filter/Filter';
import { ProductReviewForm } from './ProductReviewForm/ProductReviewForm';
import { VideoPlayer } from './VideoPlayer/VideoPlayer';
import { Reader } from './Reader/Reader';
import { Recipe } from './Recipe/components/Recipe';
import { Layout } from './Reader/Layout';
import { CreatePublication } from './Reader/CreatePublication';
// import publications from '../components/Reader/publications.json';

export const App = () => {
  return (
    <>
      <Container>
        <AppBar />

        <Routes>
          <Route path="/formikFromHooks" element={<FormikFromHooks />} />
          <Route path="/formikComponent" element={<FormikComponent />} />
          <Route path="/colorPicker" element={<ColorPicker />} />
          <Route path="/counter" element={<Counter initialValue={50} />} />
          <Route path="/dropdown" element={<Dropdown />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/recipe" element={<Recipe />} />
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
          <Route path="/form" element={<ProductReviewForm />} />
          <Route path="/video" element={<VideoPlayer />} />
          {/* <Route path="/reader" element={<Reader items={publications} />} /> */}
          <Route path="/reader" element={<Layout />}>
            <Route path="reader" element={<Reader />} />
            <Route path="create" element={<CreatePublication />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};
