import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import { Page1, Page2, Page3 } from './Pages';

export function Root() {
  return (
    <>
      <div id='sidebar' className='container'>
        <nav className='p-8'>
          <ul className='flex flex-row justify-around'>
            <li>
              <Link to={`/`} >Case One</Link>
            </li>
            <li>
              <Link to={`/two`}>Case Two</Link>
            </li>
            <li>
              <Link to={`/three`}>Case Three</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id='detail' className='container m-36 w-full flex justify-center'>
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
    ],
  },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
