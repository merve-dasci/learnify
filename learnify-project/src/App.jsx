import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <Header />
      <div className="flex">
        <SideBar />
        <main className="flex-1 p-container-padding">
          <h1 className="text-3xl font-bold text-primary">Learnify</h1>
          <p className="mt-2 text-on-surface-variant">
            Online eğitim platformu başlatıldı.
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
