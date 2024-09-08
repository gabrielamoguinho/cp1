import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const LazyHome = lazy(() => import("./Pages/Home/Home"));
const LazyNovaLista = lazy(() => import("./Pages/Novalista/Novalista"));
const LazyProfile = lazy(() => import("./Pages/Perfil/Perfil"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Carregando...</>}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/novalista" element={<LazyNovaLista />} />
          <Route path="/perfil" element={<LazyProfile />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
