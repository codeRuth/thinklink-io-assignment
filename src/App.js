import React, {useState} from "react";
import "./app.css";
import Loader from "./components/Loader";
import HomePage from "./pages/HomePage";

function App() {
  const [loading, setLoading] = useState(false);
  const handleSetLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };
  return (
    <div className="main-root">
      {loading ? <Loader /> : <HomePage setLoading={handleSetLoading} />}
    </div>
  );
  // return <HomePage />;
}

export default App;
