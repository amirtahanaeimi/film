import {createBrowserRouter,RouterProvider,Link,} from "react-router-dom";
import Layout from "./components/layout";
import List from "./components/list";
import Filmdeatails from "./components/filmdeatails";
const router = createBrowserRouter([{
  element: <Layout/>,
  children:[
    {
      path: "/",
      element: (
        <List/>
      ),
    },
    {
      path: "/m/:id",
      element: <Filmdeatails/>,
    },
  ]
}
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
