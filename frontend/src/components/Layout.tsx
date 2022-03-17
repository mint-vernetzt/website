import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import Banner from "./Banner";

interface LayoutProps {
  children: string | React.ReactNode;
}

// function Layout({ children, ...otherProps }) {
function Layout(props: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-600">
      {/* {otherProps.location?.pathname === "/" ? (
        <Banner to="/event/mint-aktionswoche">
        Bis zum 26.11. findet die MINT-Aktionswoche statt. Hier findet Ihr einen
        Überblick über alle Sessions und wie Ihr teilnehmen könnt.
      </Banner>
      ) : null} */}
      <header>
        <Header />
      </header>

      <main className="flex-1 pb-20">{props.children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
