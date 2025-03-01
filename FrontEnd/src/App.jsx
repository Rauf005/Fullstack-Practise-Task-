
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Routes from "./Routes/route";  

const routes = createBrowserRouter(Routes);  
function App() {
  return (
    <RouterProvider router={routes} />
  );
}

export default App;