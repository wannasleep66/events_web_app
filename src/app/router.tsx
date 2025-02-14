import {createBrowserRouter} from "react-router";
import Registration from "../pages/registration.tsx";
import Profile from "../pages/profile.tsx";
import {MainLayout} from "../shared/ui/layout/main-layout.tsx";

const router = createBrowserRouter([
    {
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Registration/>,
            },
            {
                path: "profile/:userId",
                element: <Profile/>,
            }
        ]
    },
]);

export default router;
