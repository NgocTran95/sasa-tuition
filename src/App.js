import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import EnterInfoPage from "./pages/EnterInfoPage";
import ExportTuitionPage from "./pages/ExportTuitionPage";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<EnterInfoPage />} />
        <Route path="/export" element={<ExportTuitionPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
