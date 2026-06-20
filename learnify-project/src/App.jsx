import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";


function App() {
  return (
    <>
      <div className="min-h-screen bg-surface">
        <Header />
        <div className="flex">
          <SideBar />

          <main className="flex-1 p-8">
            <h1 className="text-3xl font-bold text-primary">Learnify</h1>
          </main>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
