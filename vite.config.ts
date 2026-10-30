import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

/**
 * O dev server atende Range (responde 206), mas não anuncia `Accept-Ranges`.
 * Sem esse cabeçalho o pdf.js desiste do carregamento por trechos e tenta
 * baixar o PDF inteiro — o catálogo tem centenas de MB. Servidores de produção
 * (nginx, S3/CDN) já mandam o cabeçalho; aqui ele é acrescentado no dev.
 */
const aceitaRangeNoDev = (): Plugin => ({
  name: 'accept-ranges-para-pdf',
  apply: 'serve',
  configureServer(servidor) {
    servidor.middlewares.use((requisicao, resposta, proximo) => {
      if (requisicao.url?.endsWith('.pdf')) {
        resposta.setHeader('Accept-Ranges', 'bytes')
      }
      proximo()
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), aceitaRangeNoDev()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    hmr: {
      host: 'localhost',
      port: 5173,
    },
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
})
