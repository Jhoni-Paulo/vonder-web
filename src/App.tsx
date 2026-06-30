import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { Header } from "./components/header"
import { Footer } from "./components/Footer/Footer.tsx"
import { FaleConosco } from "./pages/FaleConosco/FaleConosco.tsx"
import { AssistenciaTcnica } from "./pages/AssistenciaTecnica"
import { CategoriasEProdutos } from "./pages/CategoriasEProdutos"
import { NewsletterSection } from "./components/NewsletterSection/NewsletterSection.tsx"
import { LoadingScreen } from "./components/LoadingScreen"
import { useLoading } from "./hooks/useLoading"
import { Home } from "./pages/Home"
import { HomeNova } from "./pages/HomeNova"
import { BlogHome } from "./pages/Blog"
import { ConheaAVonder } from "./pages/ConhecaAVonder"
import { Faq } from "./pages/Faq"
import { Garantia } from "./pages/Garantias"
import { OndeComprarVonder } from "./pages/OndeComprar"
import { ProdutoInterno } from "./pages/ProdutoInterno"
import { TrabalheConosco } from "./pages/TrabalheConosco"
import { Lancamentos } from "./pages/Lancamentos/Lancamentos"

function AppContent() {
  const location = useLocation()
  const { isLoading, startLoading } = useLoading(2000)

  useEffect(() => {
    startLoading()
    window.scrollTo({ top: 0 })
  }, [location.pathname])

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className="w-full overflow-x-hidden" style={{ margin: 0, padding: 0, position: 'relative', top: 0, left: 0 }}>
        <Header />

        <Routes>
          <Route path="/" element={<HomeNova />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home-nova" element={<HomeNova />} />
          <Route path="/assistencia-tecnica" element={<AssistenciaTcnica />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
          <Route path="/categorias-e-produtos" element={<CategoriasEProdutos />} />
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/conheca-a-vonder" element={<ConheaAVonder />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/garantia" element={<Garantia />} />
          <Route path="/onde-comprar" element={<OndeComprarVonder />} />
          <Route path="/produto/:id" element={<ProdutoInterno />} />
          <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
          <Route path="/lancamentos" element={<Lancamentos />} />
        </Routes>

        <NewsletterSection />
        <Footer />
      </div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
