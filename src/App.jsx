import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppScreen from "./screens/AppScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ErrorScreen from "./screens/ErrorScreen";
import "@aws-amplify/ui-react/styles.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppScreen />} errorElement={<ErrorScreen />}>
        <Route path="/" element={<HomeScreen />} />
        <Route path="login" element={<LoginScreen />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
