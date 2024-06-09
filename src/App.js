import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ProjectsPage from "./pages/Projects";
import Root from "./pages/Root";

const router=createBrowserRouter([
  {path:'/',element:<Root/>,
  children:[
    {path:'/',element:<HomePage/>},
    {path:'/about',element:<AboutPage/>},
    {path:'/projects',element:<ProjectsPage/>},
    {path:'/contact',element:<ContactPage/>}
  ]
  },
  
])
function App() {

  return <RouterProvider router={router}/>
}

export default App;
