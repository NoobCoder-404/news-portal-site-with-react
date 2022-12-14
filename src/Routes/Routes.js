import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Category from '../Pages/Category/Category';
import Home from '../Pages/Home/Home';
import News from '../Pages/News/News';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/category/:id',
        element: <Category />
      },
      {
        path: '/news/:id',
        element: <News />
      }
    ]
  }
]);
