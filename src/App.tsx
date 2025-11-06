import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy } from 'react';
import './App.css';

import NotFound from './pages/NotFound';
import Thanks from './pages/Thanks';

import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import fetchCategoryLoader from './loaders/categoryLoader';
import fetchProductsLoader from './loaders/productsLoader';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Cart = lazy(() => import('./pages/Cart'));
const Category = lazy(() => import('./pages/Category'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));

const router = createBrowserRouter([
  {path: '', element: <Layout/>, children: [
    {path: '', element: <Home/>, loader: fetchCategoryLoader, errorElement: <ErrorBoundary/>},
    {path: 'about', element: <About/>},
    {path: 'cart', element: <Cart/>},
    {path: 'thanks', element: <Thanks/>},
    {path: 'category/:categoryName', element: <Category/>, loader: fetchProductsLoader, errorElement: <ErrorBoundary/>},
    {path: 'product/:productId', element: <ProductDetails/>},
    {path: '*', element: <NotFound/>}
  ]}
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
