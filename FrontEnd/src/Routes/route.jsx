import Home from "../pages/Home/Home"
import Add from "../pages/Add/Add"
import Detail from "../pages/Detail/Detail"
import Favorites from "../pages/Favorites/Favorites"
import Root from "../pages/Root"


const Routes=[
    {
        path: "/",
        element: <Root/>,
        children: [
          {
            path: "",
            element: <Home />
          },
          {
            path: "/add",
            element: <Add/>
          },
          {
            path: "/favorites",
            element: <Favorites/>
          },
          {
            path: "/:id",
            element: <Detail/>
          }
        ]
    }
]
export default Routes;