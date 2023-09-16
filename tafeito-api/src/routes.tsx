import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./screens/Login";
import Tasks from "./screens/Tasks";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <App>
                <Login/>
            </App>
        ),
    },
    {
        path: "tarefas",
        element: (
            <App>
                <Tasks/>
            </App>
        ),
    }
]);

export {router};