import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./components/header"
import { Footer } from "./components/Footer/Footer.tsx"
import { FaleConosco } from "./pages/FaleConosco/FaleConosco.tsx"
import { AssistenciaTcnica } from "./pages/AssistenciaTecnica"
import { Garantia } from "./pages/Garantia"
import { Home } from "./pages/Home"
import { OndeComprar } from "./pages/OndeComprar"
import { Blog } from "./pages/Blog"
import { ConhecaAVonder } from "./pages/ConhecaAVonder"
import { SejaRevendedor } from "./pages/SejaRevendedor"
import { CategoriasEProdutos } from "./pages/CategoriasEProdutos"
import { NewsletterSection } from "./components/NewsletterSection/NewsletterSection.tsx"
import { LoadingScreen } from "./components/LoadingScreen"
import { useLoading } from "./hooks/useLoading"

function App() {
  const { isLoading } = useLoading(1500);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <div className="w-screen overflow-x-hidden" style={{ margin: 0, padding: 0, position: 'relative', top: 0, left: 0 }}>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/assistencia-tecnica" element={<AssistenciaTcnica />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
          <Route path="/garantia" element={<Garantia />} />
          <Route path="/onde-comprar" element={<OndeComprar />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/conheca-a-vonder" element={<ConhecaAVonder />} />
          <Route path="/seja-revendedor" element={<SejaRevendedor />} />
          <Route path="/categorias-e-produtos" element={<CategoriasEProdutos />} />
        </Routes>

        <NewsletterSection />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
