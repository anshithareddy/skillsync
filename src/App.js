import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import One from "./components/one/One";
import Card from './components/card/Card';
function App() {
  const routerobj=createBrowserRouter([
    {
      path:'/',
      element:<Card></Card>
      
    },
    {
      path:"/home"
    },
    {
         path:"/login"
    },
    {
      path:"/signin"
    },
    {
      path:"/profile"
    }
    // {
    //   path:'/home',
    //   element:
    // }
  ])
  return (
    <div className="App">
      <RouterProvider router={routerobj}>
      
      </RouterProvider>
     
    </div>
  );
}

export default App;
