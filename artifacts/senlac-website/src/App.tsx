import { Switch, Route, Router as WouterRouter } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Rooms from "@/pages/Rooms";
import Rates from "@/pages/Rates";
import Services from "@/pages/Services";
import Offers from "@/pages/Offers";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import BookNow from "@/pages/BookNow";
import NotFound from "@/pages/NotFound";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/rooms" component={Rooms} />
          <Route path="/rates" component={Rates} />
          <Route path="/services" component={Services} />
          <Route path="/offers" component={Offers} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/book" component={BookNow} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
