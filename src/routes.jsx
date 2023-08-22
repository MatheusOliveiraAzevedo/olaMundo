import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobrMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape/Index";
import PaginaPadrao from "paginas/PaginaPadrao";
import Post from "paginas/Post/Index";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";


function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Menu></Menu>

      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicio/>}></Route>
          <Route path="sobremim" element={<SobreMim/>}></Route>
        </Route>
          <Route path="posts/:id/*" element={<Post/>} ></Route>


        {/* 
        
        na rota "/", a estrutura a ser renderizada é:
        
                <PaginaPadrao>
                  <Inicio/>
                </PaginaPadrao>


        na rota "/sobremim", a estrutura a ser renderizada é:
        
                <PaginaPadrao>
                  <SobreMim/>
                </PaginaPadrao>
        
        */}

        <Route path="*" element={<NaoEncontrada></NaoEncontrada>}/>
      </Routes>

      <Rodape></Rodape>
    </BrowserRouter>
  );
}

export default AppRoutes;
