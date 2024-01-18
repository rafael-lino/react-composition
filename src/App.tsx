import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import { Page1, Page2, Page3, Page4, Page5 } from './Pages';

export function Root() {
  return (
    <>
      <div id='sidebar' className='container'>
        <nav className='p-8'>
          <ul className='flex flex-row justify-around'>
            <li>
              <Link to={`/`}>Case One</Link>
            </li>
            <li>
              <Link to={`/two`}>Case Two</Link>
            </li>
            <li>
              <Link to={`/three`}>Case Three</Link>
            </li>
            <li>
              <Link to={`/four`}>Case Four</Link>
            </li>
            <li>
              <Link to={`/five`}>Case Five</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id='detail' className='m-36 flex justify-center flex-wrap'>
        <Outlet />
      </div>
    </>
  );
}

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        path: '/',
        element: <Page1 />,
      },
      {
        path: 'two',
        element: <Page2 />,
      },
      {
        path: 'three',
        element: <Page3 />,
      },

      {
        path: 'four',
        element: <Page4 />,
      },
      {
        path: 'five',
        element: <Page5 />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
