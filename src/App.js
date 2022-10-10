import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Chapters from './Components/Chapters/Chapters';
import Main from './Layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element: <Chapters></Chapters>
        },
        {
          path:'/analysis',
          element: <div>Analysis page</div>
        },
        {
          path:'/weblog',
          element: <div>weblog page</div>
        },
      ]
    } 
  ])
  return (
    <div className= " ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
