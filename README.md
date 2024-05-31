# Day 26 - GUVI

## React Router Task

> - [Source Code](./src/)
> - The project is styles using raw CSS only.
> - The project code is seperated into folders for increased readability.
> - The package `react-router-dom` is used to perform routing in the application.
> - First, We create our routes in the App component using `createBrowserRouter()`.
> - The routes are listed as `path`, the component to be rendered is listed as `element`.
> - First, we create our Navbar [Source Code](./src/components/Navbar/).
> - We use the `Link` tag to enable routing in the navbar.
> - The UI for the navbar is cloned as shown in the reference document.
> - The Tabs for the navigation, Full Stack Development, Data Science, Cyber Security and Careers are children routes under the courses route.
> - The children routes are nested in the _courses_ route.
> - These children route components are listed in the pages folder. [Source Code](./src/pages/)
> - These children route components are rendered using the `<Outlet />` tag from react-router-dom.
> - The output can be viewed by running the following command on terminal.
> - The UI is made completely responsive using `media queries`.
> - `npm run dev`
