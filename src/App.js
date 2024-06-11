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
} from "react-router-dom/dist";

// --- create variable called 'router'
const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Root />}></Route>)
);

// --- define the root variable.

const Root = () => {
  return <Header />;
};
function App() {
  return (
    <div>
      <Header />
      <div>
        <Switch>
          <Route exact path="/jessielewis" render={() => <HomePage />} />
          <Route exact path="/about" render={() => <AboutMe />} />
          <Route exact path="/services" render={() => <Services />} />
          <Route exact path="/contact" render={() => <ContactForm />} />
          <Route exact path="/faqs" render={() => <Faqs />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
