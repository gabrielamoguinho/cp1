import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const LazyHome = lazy(() => import("../src/Pages/Home/Home"));
const LazyNovaLista = lazy(() => import("../src/Pages/NovaLista/NovaLista"));
const LazyProfile = lazy(() => import("../src/Pages/Perfil/Perfil"));

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
