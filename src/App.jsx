import "./App.css";
import { Header } from "./components/header/Header";
import { HomePage } from "./pages/home-page/HomePage";

export default function App() {
  
  return (
    <div className="app-root">
      <Header />
      <HomePage />
    </div>
  );
}