import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TrialBanner from "../components/TrialBanner";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>
      <TrialBanner />
      <Footer />
    </div>
  );
}

export default AppLayout;
