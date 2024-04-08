import "./App.css";
import DashboardUserPage from "./pages/Dashboard/Users";
import { useTextVisible } from "./store";

function App() {
  const isTextVisible = useTextVisible();

  return (
    <>
      <DashboardUserPage />
      {isTextVisible ? "Text Visible!" : "Text Invisible!"}
    </>
  );
}

export default App;
