import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./components/header"
import { Footer } from "./components/Footer/Footer.tsx"
import { FaleConosco } from "./pages/FaleConosco/FaleConosco.tsx"
import { AssistenciaTcnica } from "./pages/AssistenciaTecnica"
import { Garantia } from "./pages/Garantia"
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
          <Route path="/" element={<FaleConosco />} />
          <Route path="/assistencia-tecnica" element={<AssistenciaTcnica />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
          <Route path="/garantia" element={<Garantia />} />
        </Routes>

        <NewsletterSection />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
