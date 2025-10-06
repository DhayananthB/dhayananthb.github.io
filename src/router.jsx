import { createBrowserRouter } from "react-router-dom"
import App from "./App.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Body from "./components/Body.jsx"

const router = createBrowserRouter([
    {
        path: "/", element: <App />, children: [
        {
            path: "/", element: <Body />
        },
        {
            path: "about", element: <About />,
        }, 
        { 
            path: "contact", element: <Contact /> 
        },
        ]
    },

])

export default router