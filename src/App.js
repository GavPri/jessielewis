import Header from "./components/navigation-bar/Header";
import HomePage from "./pages/homepage/HomePage";
import Faqs from "./pages/faqs/Faqs";
import ContactForm from "./pages/contact-me/ContactForm";
import AboutMe from "./pages/about-me/AboutMe";
import Services from "./pages/services/Services";

// --- imports for react-router-dom v6
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
} from "react-router-dom";

// --- define the root variable.

const Root = () => {
  return (
    <>
      <Header />
      <>
        <Outlet />
      </>
    </>
  );
};
// --- create variable called 'router'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/jessielewis" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route exact path="/about" element={<AboutMe />} />
      <Route exact path="/services" element={<Services />} />
      <Route exact path="/contact" element={<ContactForm />} />
      <Route exact path="/faqs" element={<Faqs />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
