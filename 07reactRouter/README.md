# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# React router implmentation steps
- install npm i react-router-dom
- Create a layout file
- create createBrowserRouter

way 1.

            const router = createBrowserRouter([
            {
                path: "/",
                element: <Layout />,
                children: [
                {
                    path: "",
                    element: <Home />,
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                },
                ],
            },
            ]);


Way 2.
            const router = createBrowserRouter(
                createRoutesFromElements(
                    <Route path='/' element={<Layout/>}>
                    <Route path='' element={<Home/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='contact' element={<Contact/>}/>
                    <Route path='user/:userid' element={<User/>}/>
                    <Route 
                        loader={githubInfoLoader}
                        path='github' 
                        element={<Github/>}/>
                    </Route>
                )
            )

- the add BrowserRouter

    ```createRoot(document.getElementById('root')).render(
        <StrictMode>
            <RouterProvider router={router}/>
        </StrictMode>,
    ```
)
- Create Header component to give routes to different links 
add Link and navlink Dipends on requerement
-  

