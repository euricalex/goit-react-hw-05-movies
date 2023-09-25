import { Route, Routes } from 'react-router-dom';


import Layout from './Layout/Layout';
import { lazy } from 'react';


const Home=lazy(() => import('../pages/Home/Home'));
const Movies=lazy(() => import('../pages/Movie/Movies'));
const MovieDetails=lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Reviews=lazy(() => import('./Reviews/Reviews'));
const Cast=lazy(() => import('./Cast/Cast'));
const  NotFound=lazy(() => import('../pages/NotFound/NotFound'));
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/movies" element={<Movies/>}></Route>
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="reviews" element={<Reviews/>} />
            <Route path="cast" element={<Cast/>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      
    </>
  );
};
