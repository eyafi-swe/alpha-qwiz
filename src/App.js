import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Analysis from './Components/Analysis/Analysis';
import Chapters from './Components/Chapters/Chapters';
import NotFound from './Components/NotFound/NotFound';
import Quiz from './Components/Quiz/Quiz';
import Weblog from './Components/Weblog/Weblog';
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
          path:'/quiz/:topicId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`);
          },
          element: <Quiz></Quiz>
        },
        {
          path:'/analysis',
          element: <Analysis></Analysis>
        },
        {
          path:'/weblog',
          element: <Weblog></Weblog>
        },
      ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    } 
  ])
  return (
    <div className= " ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
