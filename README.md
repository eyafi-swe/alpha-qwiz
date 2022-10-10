React Router for beginners ->

Installation -
npm install react-router-dom

Create Router -

Step 1:
in App.js
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/friends", 
    element: <Friends></Friends>
  },
]);

Step 2:
inside the return div
<RouterProvider router={router} />

Step 3:
Set some routes


How to set some routes -

Step 1: Create a component named Header or whatever relevant.
Step 2: Use NavLink component from react router. You can use Link component too.
        But NavLink component provides e feature of styling the active navigation.
        <NavLink  to = '/about'>About</NavLink>
        Styling the active nav item
        <NavLink className={({isActive})=> isActive ? 'active' : undefined} to = '/home'>Home</NavLink>
Step 3: Use the Header component in the top of every page component. (Bad practice)

To use Header(Navigation bar) or any common component in every page of the web app - 

Step 1: Create a folder named Layout or relevant any name outside of the component folder.
Step 2: Create a component. Give it a relevant name.
Step 3: Add the Header component.
Step 3: Add <Outlet></Outlet> component from react-router-dom.
You can create and add as more component as you want there before the Outlet component. All will show as common comonent in every page.
Step 4: Add the created component in the router which was created in App.js file, and add children property in that router object.
{
    path: "/",
    element: <Main></Main>, 
    children:[
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/about", element: <About></About> },
        .
        .
        {routes which you want to add/ which will have the common layout}
    ]
}

The routes which you don't want to keep inside the children [], add the header component in the top of that routed component.


Set dynamic router -

Way 1: Example -
<Link to= {`/products/${slug}`}>Details</Link>

Way 2: Example -
<Link to= {`/products/${slug}`}>
  <button>Details</button>
</Link>

Way 3: Using useNavigate() hook from react router dom. Example -
const navigate = useNavigate()

const clickHandler = ()=> {
        navigate(`/products/${slug}`);
    }

<button onClick={clickHandler}>Details</button>

Load data by router - 

This is very simple. Use loader from react router. Example -
{
    path: "/products",
    loader: async () => {
    return fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    },
    element: <Products></Products>
}

To get the data to display in the component use useLoaderData() hook from react router dom. Example -
const products = useLoaderData();

Then do whatever the fuck you want to do with that data.
