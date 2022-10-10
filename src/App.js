import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Chapters from './Components/Chapters/Chapters';
import Quiz from './Components/Quiz/Quiz';
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
          element: <div>Analysis page</div>
        },
        {
          path:'/weblog',
          element: <div>weblog page</div>
        },
      ]
    },
    {
      path: '*',
      element: <div>Nai kisu</div>
    } 
  ])
  return (
    <div className= " ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
