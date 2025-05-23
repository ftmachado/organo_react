import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/Sobremim";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import PaginaPadrao from "./paginas/PaginaPadrao";
import Post from "./componentes/Post";
import NaoEncontrada from "./paginas/NaoEncontrada";
import ScrollToTop from "./componentes/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      
      <Routes>
        {/* Rotas aninhadas, ele renderiza: <PaginaPadrao> <Inicio/> </PaginaPadrao> */}
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio/>}/>
          <Route path="sobremim" element={<SobreMim/>}/>
        </Route>        
        <Route path="posts/:id/*" element={<Post />}/>
        <Route path="*" element={<NaoEncontrada />}/>
      </Routes>
      
      <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes;
