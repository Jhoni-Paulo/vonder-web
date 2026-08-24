# Integração Back-end ← Front-end (vonder-web)


Para cada rota está descrito:
- **Método + caminho** sugerido
- **O que o front envia** (request)
- **O formato exato da resposta que o front espera** (`data`) — os nomes de campo aqui **são os que
  o front vai consumir direto**. Se o back devolver com outro nome, o front quebra ou precisa de
  adaptação. Preferimos que o back siga estes nomes.

> Legenda de status:
> - ✅ **Já existe** no back (só alinhar formato)
> - 🟡 **Existe parcialmente** (existe rota parecida, mas exige ajuste)
> - 🔴 **Não existe** — precisa ser criado

---

## 0. Convenções gerais (valem para TODAS as rotas)

### 0.1 Envelope padrão

Manter o envelope que o back já usa (`RespostaApi<T>`). **Todas** as respostas vêm assim:

```json
{
  "code": 0,
  "message": "Sucesso!",
  "data": { },
  "timestamp": "2026-07-24 01:18:25",
  "paginacao": { },
  "errors": [ ]
}
```

- `code: 0` = sucesso · `code: 1` = erro (**mesmo com HTTP 200**). O front sempre checa `code === 0`.
- `paginacao` só nas listagens. `errors` só em falha de validação (`[{ "campo": "...", "mensagem": "..." }]`).
- Nos exemplos abaixo mostramos **apenas o conteúdo de `data`** para não repetir o envelope.

### 0.2 Paginação (quando a listagem for paginada)

```json
"paginacao": { "pagina": 0, "totalPaginas": 5, "totalRegistros": 812,
  "registrosPorPagina": 15, "temProxima": true, "temAnterior": false }
```

O front envia `pagina` (base 0) e `tamanho` na request. Onde há paginação, está sinalizado abaixo.

### 0.3 Idioma (vale para TODAS as rotas, sem exceção)

O site **será multilíngue**. Mesmo que hoje o front consuma **somente `ptBr`**, assumimos tradução
desde já: **toda rota deste documento carrega `idioma`** (default `ptBr`). Isso inclui:

- **Rotas de conteúdo** (GET): `idioma` filtra/traduz o conteúdo retornado.
- **Formulários** (POST): `idioma` também vai no corpo — para que a `message` de sucesso e as
  mensagens de validação em `errors` voltem **no idioma que o usuário está navegando**.
- **Locators, marketplaces, vagas etc.**: mesmo quando os dados em si são neutros (endereço,
  telefone), qualquer rótulo/mensagem devolvido deve respeitar `idioma`.

Formato do valor: `ptBr` (como o `/home` já usa hoje). Se o back preferir BCP-47 (`pt-BR`, `en`,
`es`), alinhar **um único padrão** para todas as rotas — o front manda o que for combinado.

Nos exemplos abaixo, GETs mostram `?idioma=ptBr` e POSTs incluem `"idioma": "ptBr"` no corpo.

### 0.4 Imagens

O front espera **URL absoluta pronta pra usar** em todo campo de imagem (`imagemUrl`, `img`, `link`,
`thumbnail`). Nada de caminho relativo ou id que precise de segunda chamada.

### 0.5 Autenticação

Todas as rotas deste documento são de **site público** (visitante não logado). Devem funcionar **sem
JWT**. Hoje o back exige JWT em quase tudo (`/blog/buscar`, `/produto/buscar` etc.) — para o site
público isso precisa mudar: ou essas rotas viram públicas (com uma `x-api-key`, como o `/home` já
faz), ou o conteúdo é servido por endpoints públicos dedicados. **Este é o principal ponto a decidir
com o front antes de começar.**

---

## 1. Componentes globais (aparecem em todas as páginas)

### 1.1 Newsletter (rodapé) — `NewsletterSection`
**Funcionalidade:** formulário "Cadastre-se e receba as novidades" — campos **nome**, **email**,
checkbox de aceite dos termos. Hoje não envia nada.

🔴 `POST /newsletter/inscrever`
```json
// request
{ "nome": "João", "email": "joao@email.com", "aceiteTermos": true, "idioma": "ptBr" }
```
```json
// data esperado
{ "inscrito": true, "mensagem": "Inscrição realizada com sucesso" }
```
- Validar email. Se já inscrito, responder `code: 0` mesmo assim (idempotente) ou `code: 1` com
  `message` amigável — o front exibe `message`.

### 1.2 Menu de produtos (header) — `ProdutosMega`
**Funcionalidade:** mega-menu com a lista de **categorias de produto** (Abrasivos, Pintura, EPI,
Ferramentas Elétricas… hoje 21 fixas) + card do catálogo.

🔴 `GET /categorias?idioma=ptBr`
```json
// data esperado
[
  { "id": 1, "nome": "Abrasivos", "slug": "abrasivos" },
  { "id": 2, "nome": "Pintura", "slug": "pintura" },
  { "id": 3, "nome": "Ferramentas Elétricas", "slug": "ferramentas-eletricas" }
]
```
- `slug` é o que o front usa na URL de `/categorias-e-produtos?categoria=abrasivos`.
- Mesmo endpoint serve a sidebar de filtros da página de listagem (item 3.1).

---

## 2. Home (`/` → `HomeNova`)

A home inteira pode vir de **uma única chamada** — o back já tem `GET /api/home` (✅), que hoje
devolve `banners`, `blogs`, `destaques`, `parcerias`, `videosInstitucionais`, `produtoInformativos`.
Abaixo, seção por seção, o que cada uma consome.

### 2.1 Banner principal (hero / swiper) — `HomeNova.tsx`
**Funcionalidade:** carrossel de banners no topo. Hoje 3 imagens fixas repetidas.

✅ `GET /home` → `data.banners`
```json
[
  { "id": 1, "imagemUrl": "https://.../banner.png", "redirecionamentoUrl": "https://...",
    "descricao": "Campanha aspiradores", "ordenacao": 1, "idioma": "ptBr" }
]
```
- Front usa `imagemUrl` (src), `descricao` (alt) e, se `redirecionamentoUrl` vier preenchido, torna o
  slide clicável. Ordenar por `ordenacao`.

### 2.2 "Seleção Especial VONDER" (carrossel de produtos) — `FrameWrapperSubsection`
**Funcionalidade:** carrossel horizontal de produtos em destaque (nome + código + imagem).

✅ `GET /home` → `data.destaques`
```json
[
  { "id": 10, "idProduto": 123, "ordenacao": 1,
    "produto": { "idProduto": 123, "codigoOvd": "60.01.112.000",
                 "nomeEcommerce": "Parafusadeira/furadeira a bateria, 12 V..." },
    "imagemPrincipal": { "id": 55, "link": "https://.../image.png", "fotoPrincipal": true } }
]
```
- Front usa `imagemPrincipal.link` (img), `produto.nomeEcommerce` (nome), `produto.codigoOvd` (código).
- Cada card leva para `/produto/{codigoOvd}`.

### 2.3 "Confira nosso Blog" (cards de blog) — `SectionComponentNodeSubsection`
**Funcionalidade:** 4 cards de posts recentes (imagem, título, descrição, "Ler Mais").

✅ `GET /home` → `data.blogs`
```json
[
  { "id": 1, "titulo": "Vou de bike...", "descricao": "Gosta de pedalar?...",
    "imagemUrl": "https://.../mask.png", "redirecionamentoUrl": "https://blog...",
    "dataPublicacao": "2026-07-24", "idioma": "ptBr" }
]
```
- Front usa `imagemUrl` (img), `titulo`, `descricao` (opcional), `redirecionamentoUrl` (destino do
  "Ler Mais"). Ordenar por `dataPublicacao` desc.

### 2.4 "Fique por dentro dos nossos Lançamentos" — `DivSubsection`
**Funcionalidade:** carrossel rotativo de cards de lançamento (imagem, título, descrição, "Ver mais").

🔴 Não há fonte hoje. Sugestão: `GET /lancamentos?idioma=ptBr&destaque=true&tamanho=6`
(mesma estrutura do item 6.1). Enquanto não existir, o front mantém o mock.

### 2.5 "Confira nossas redes sociais" (Instagram) — `Frame2Subsection`
**Funcionalidade:** grade de posts do Instagram (@vonderferramentas): imagem + legenda.

🔴 `GET /redes-sociais/instagram/feed?idioma=ptBr&limite=8`
```json
// data esperado — POSTS já resolvidos, NÃO credenciais
[
  { "id": "post_1", "imagemUrl": "https://.../post.jpg",
    "legenda": "👑 A rainha dos cortes...", "permalink": "https://instagram.com/p/...",
    "usuario": "@vonderferramentas" }
]
```
- ⚠️ **Importante:** o `/home` atual devolve `token`/`appId`/`appSecret` das redes sociais. O front
  **não pode** e **não vai** consumir isso (vazaria segredo no browser). O back deve chamar a Graph
  API do Instagram **no servidor** e devolver só os **posts prontos** no formato acima.

### 2.6 Seções estáticas (não precisam de rota)
"Ferramenta é VONDER" (categorias), band de features ("8 centros de distribuição" etc.), "Vitrine
VONDER", banner institucional final. São conteúdo fixo institucional — **podem seguir estáticas**. Se
um dia virarem editáveis, entram como um bloco de "conteúdo institucional" no `/home`.

---

## 3. Categorias e Produtos (`/categorias-e-produtos` → listagem)

### 3.1 Sidebar de filtros
**Funcionalidade:** filtros por Grupo, Subgrupo, Categoria, Potência, RPM (checkboxes) + contador
"Resultados: 15 de 812".

🔴 `GET /produtos/filtros?idioma=ptBr` (ou incluir os filtros disponíveis na resposta da busca)
```json
// data esperado
{
  "grupos":    [ { "id": 1, "nome": "Ferramentas elétricas", "quantidade": 812 } ],
  "subgrupos": [ { "id": 5, "nome": "Aspirador", "quantidade": 40 } ],
  "categorias":[ { "id": 9, "nome": "Parafusadeira a Bateria", "quantidade": 15 } ],
  "potencias": [ { "id": 1, "nome": "1400 W", "quantidade": 3 } ],
  "rpms":      [ { "id": 1, "nome": "3000 rpm", "quantidade": 2 } ]
}
```

### 3.2 Grid de produtos + ordenação + paginação
**Funcionalidade:** grade de cards (imagem, nome, código), ordenar "Nome A-Z", paginação (1,2,3,4).

🟡 Back tem `POST /produto/buscar` (exige JWT e a tabela está vazia). Para o site público:
`POST /produtos/buscar` **público**, paginado.
```json
// request
{ "idioma": "ptBr", "categoriaSlug": "abrasivos",
  "filtros": { "subgrupos": [5], "categorias": [9] },
  "ordenacao": "nome_asc", "pagina": 0, "tamanho": 15 }
```
```json
// data esperado (lista) — + bloco "paginacao" no envelope
[
  { "idProduto": 123, "codigoOvd": "60.01.112.000",
    "nome": "Parafusadeira/furadeira a bateria, 12 V...",
    "imagemUrl": "https://.../image-115.png" }
]
```
- Front usa `imagemUrl`, `nome`, `codigoOvd`. Card leva para `/produto/{codigoOvd}`.
- `totalRegistros` da paginação alimenta o "Resultados: 15 de 812".

---

## 4. Produto interno (`/produto/:id` → `ProdutoInterno`)

**`:id` é o `codigoOvd`** (ex.: `/produto/68.64.222.220`).

### 4.1 Dados principais do produto — `GroupSubsection` + galeria + breadcrumb
**Funcionalidade:** nome, código, descrição longa, breadcrumb (grupo > subgrupo), galeria de imagens
(com uma imagem em **360°** montada a partir de um sprite/matriz).

🟡 `GET /produto/{codigoOvd}?idioma=ptBr` (público). Baseado no `POST /produto/buscar` que já existe.
```json
// data esperado
{
  "idProduto": 123,
  "codigoOvd": "68.64.222.220",
  "nome": "Lavadora de alta pressão LAV 2220I, 1.740 lbf/pol², 220 V~, VONDER",
  "descricao": "Bomba com tecnologia italiana para uso profissional...",
  "breadcrumb": [
    { "nome": "Nossos produtos", "slug": null },
    { "nome": "Ferramentas elétricas", "slug": "ferramentas-eletricas" }
  ],
  "imagens": [
    { "id": 1, "link": "https://.../img1.png", "fotoPrincipal": true, "foto360": false },
    { "id": 2, "link": "https://.../matriz360.webp", "fotoPrincipal": false, "foto360": true }
  ]
}
```
- Front distingue foto normal de foto 360 pelo flag `foto360` (hoje mockado com `matriz_18.webp`).
  Se `foto360 = true`, `link` deve apontar para o **sprite/matriz** usado na visualização 360.

### 4.2 Acordeão "Características do produto" — `DivWrapperSubsection`
**Funcionalidade:** 4 blocos expansíveis: **Conteúdo da embalagem**, **Detalhes técnicos**,
**Arquivos para download**, **Conteúdo para web**.

🟡 Pode vir **junto** da resposta 4.1 (recomendado, evita 2ª chamada), como estes campos:
```json
{
  "conteudoEmbalagem": [ "1 lavadora", "1 pistola", "1 mangueira 5 m", "1 manual" ],
  "detalhesTecnicos": [
    { "atributo": "Tensão", "valor": "220 V~" },
    { "atributo": "Pressão máxima", "valor": "1.740 lbf/pol²" },
    { "atributo": "Potência", "valor": "2200 W" }
  ],
  "arquivos": [
    { "id": 1, "nome": "Manual de instruções", "tipo": "pdf", "link": "https://.../manual.pdf" }
  ],
  "conteudoWeb": [
    { "id": 1, "tipo": "video", "titulo": "Como usar", "link": "https://youtube.com/..." }
  ]
}
```
- `detalhesTecnicos` mapeia para a lista `atributos` que o `/produto/buscar` já retorna
  (par nome/valor). `arquivos` mapeia para a lista `arquivos`/`informativos`/`certificados`.

### 4.3 "Produtos relacionados" (carrossel) — `GroupWrapperSubsection`
**Funcionalidade:** carrossel de produtos relacionados/da mesma categoria.

🟡 `GET /produto/{codigoOvd}/relacionados?idioma=ptBr&limite=10`
```json
// data esperado — mesma estrutura de card do item 3.2
[ { "idProduto": 124, "codigoOvd": "60.01.200.200",
    "nome": "Parafusadeira de impacto 20 V...", "imagemUrl": "https://.../img.png" } ]
```

---

## 5. Blog (`/blog` → `BlogHome`)

### 5.1 Destaque + "Conteúdos mais populares" + grid + "Ver todos os conteúdos"
**Funcionalidade:** post em destaque, carrossel de populares, grid de posts, botão ver todos.

🟡 Back tem `POST /blog/buscar` (exige JWT). Para o site público: `GET /blog?idioma=ptBr&pagina=0&tamanho=12`
+ um sinalizador de destaque/popular.
```json
// data esperado (lista paginada)
[
  { "id": 1, "titulo": "Vou de bike...", "descricao": "Gosta de pedalar?...",
    "imagemUrl": "https://.../post.png", "redirecionamentoUrl": "https://blog/vou-de-bike",
    "dataPublicacao": "2026-07-24", "categoria": "Dicas", "destaque": true, "popular": false,
    "idioma": "ptBr" }
]
```
- Mesmos campos do `blogs` do `/home` (2.3) + `categoria`, `destaque`, `popular`. Assim o front usa a
  **mesma tipagem** na home e no blog.

---

## 6. Lançamentos (`/lancamentos` → `Lancamentos`)

### 6.1 Grid de lançamentos + ordenação + paginação + modal de detalhe
**Funcionalidade:** grade de cards (imagem, título, descrição, "Ver mais"), ordenar "Mais recente",
paginação, e um **modal** que abre com galeria de imagens + descrição do lançamento.

🔴 `GET /lancamentos?idioma=ptBr&ordenacao=recente&pagina=0&tamanho=20`
```json
// data esperado (lista paginada)
[
  { "id": 1, "titulo": "Aspirador de Pó Vertical APV 1350 Turbo VONDER",
    "descricao": "Leve, compacto e versátil...",
    "imagemUrl": "https://.../capa.png",
    "galeria": [ "https://.../4045-01.png", "https://.../4045-02.png" ],
    "codigoOvd": "40.45.000.000", "dataLancamento": "2026-07-01" }
]
```
- Card usa `imagemUrl`, `titulo`, `descricao`. O **modal** usa `titulo`, `descricao` e `galeria`
  (várias imagens). Se o lançamento estiver ligado a um produto, `codigoOvd` liga ao `/produto/{id}`.

---

## 7. Fale Conosco (`/fale-conosco` → `FaleConosco`)

### 7.1 Formulário de contato
**Funcionalidade:** formulário com 10 campos. Hoje o `submit` só faz `preventDefault`.

🔴 `POST /fale-conosco`
```json
// request — nomes iguais aos do state do form no front
{ "cpf": "000.000.000-00", "nome": "João", "telefone": "(41) 99999-9999",
  "email": "joao@email.com", "endereco": "Rua X, 100", "bairro": "Centro",
  "estado": "PR", "cidade": "Curitiba", "assunto": "Dúvida sobre produto",
  "mensagem": "Gostaria de saber...", "idioma": "ptBr" }
```
```json
// data esperado
{ "protocolo": "FC-2026-000123", "mensagem": "Recebemos seu contato!" }
```
- Front exibe `message`/`mensagem` de sucesso e idealmente o `protocolo`. Em erro de validação, usar o
  array `errors` do envelope (`campo` bate com o `name` do input).

---

## 8. Trabalhe Conosco (`/trabalhe-conosco` → 3 abas)

### 8.1 Aba "Colaborador" — lista de vagas
**Funcionalidade:** etapas do processo (estático), benefícios (estático), e **"Nossas oportunidades"**
= grade de vagas (local + título) com contador "(28 vagas abertas)" e botão "Explorar todas".

🔴 `GET /vagas?idioma=ptBr&pagina=0&tamanho=30`
```json
// data esperado (lista paginada)
[
  { "id": 1, "titulo": "Analista de Marketing Digital", "local": "Curitiba - PR",
    "url": "https://vonder.gupy.io/jobs/1" }
]
```
- Front usa `local` (badge) e `titulo`. `url` = link externo (provavelmente **Gupy**) para a vaga.
  `totalRegistros` alimenta o "(28 vagas abertas)". Se as vagas vivem no Gupy, o back pode só
  **fazer proxy** da API do Gupy e devolver neste formato.

### 8.2 Aba "Representante Comercial" — envio de currículo
**Funcionalidade:** requisitos (estático) + botão "Enviar currículo".

🔴 `POST /trabalhe-conosco/representante` (multipart, por causa do currículo)
```
// request (multipart/form-data)
nome, email, telefone, cnpj, cidade, estado, idioma, curriculo (arquivo PDF)
```
```json
// data esperado
{ "protocolo": "REP-2026-000045", "mensagem": "Currículo recebido!" }
```
> ⚠️ Upload de arquivo: definir tamanho máx. e tipos aceitos (pdf/doc). Front precisa saber os limites
> para validar antes de enviar.

### 8.3 Aba "Revendedor" — formulário de cadastro
**Funcionalidade:** formulário grande: **dados da empresa** (perfil, nome, email, estado, CNPJ,
telefone, "falar com", cidade, "como conheceu"), **produtos de interesse** (checkboxes, 20 opções),
**segmentos que atende** (checkboxes, 22 opções), **mensagem**.

🔴 `POST /trabalhe-conosco/revendedor`
```json
// request
{
  "empresa": {
    "perfil": "Lojista", "nome": "Loja X", "email": "loja@x.com", "estado": "PR",
    "cnpj": "00.000.000/0001-00", "telefone": "(41) 3000-0000",
    "falarCom": "Maria", "cidade": "Curitiba", "comoConheceu": "Indicação"
  },
  "produtosInteresse": ["Abrasivos", "Ferramentas elétricas"],
  "segmentos": ["Construção Civil", "Metalurgia"],
  "mensagem": "Temos interesse em...",
  "idioma": "ptBr"
}
```
```json
// data esperado
{ "protocolo": "REV-2026-000078", "mensagem": "Cadastro enviado!" }
```
- As listas de **produtos de interesse** e **segmentos** hoje são fixas no front. Idealmente virão de
  `GET /categorias` (item 1.2) e de um `GET /segmentos` — mas podem seguir fixas por enquanto.

---

## 9. FAQ (`/faq` → `Faq`)

### 9.1 Cards de navegação + categorias com perguntas/respostas
**Funcionalidade:** 6 cards de categoria (Produtos, Garantia, Comprar/Revender, Segurança, Trabalhe
Conosco, Contato) + por categoria uma lista de perguntas que **expandem** para mostrar a resposta
(hoje só tem seta, a resposta ainda não abre).

🔴 `GET /faq?idioma=ptBr`
```json
// data esperado
[
  {
    "id": 1, "categoria": "Produtos VONDER", "icone": "https://.../icon.png",
    "perguntas": [
      { "id": 11, "pergunta": "Quais tipos de ferramentas a VONDER oferece?",
        "resposta": "A VONDER oferece..." }
    ]
  }
]
```
- Front já renderiza `categoria` + `perguntas[].pergunta`. Só falta o campo **`resposta`** para o
  acordeão abrir. `icone` alimenta o card de navegação.

---

## 10. Onde Comprar (`/onde-comprar` → `OndeComprarVonder`)

### 10.1 Busca de revendedor por CEP/localização
**Funcionalidade:** campo de busca (hoje "81070-900" fixo) → lista de lojas com **nome, distância,
endereço, telefone**, botões "Ver no mapa" e "Entre em contato".

🔴 `GET /revendedores?idioma=ptBr&cep=81070-900` (ou `&lat=..&lng=..`)
```json
// data esperado (ordenado por distância)
[
  {
    "id": 1, "nome": "FERRAMENTAS GERAIS", "distanciaKm": 1.4,
    "endereco": "R. João Bettega, 2876 - Portão, Curitiba - PR, CEP 81070-900 - Brasil",
    "telefone": "+55 (41) 3316-4100",
    "latitude": -25.49, "longitude": -49.30,
    "urlMapa": "https://maps.google.com/?q=...",
    "oficial": true
  }
]
```
- `distanciaKm` vira "(1,4 km)". `latitude`/`longitude`/`urlMapa` alimentam "Ver no mapa".
  `oficial` distingue loja oficial de revendedor.

### 10.2 Marketplaces / lojas oficiais
**Funcionalidade:** cards de Mercado Livre, Shopee, Amazon, FG.com.br com "Acessar site".

🔴 `GET /marketplaces?idioma=ptBr` (ou fixo — muda pouco)
```json
[
  { "id": 1, "nome": "MERCADO LIVRE", "tipo": "LOJA OFICIAL VONDER", "url": "https://..." },
  { "id": 4, "nome": "FG.COM.BR", "tipo": "REVENDEDOR AUTORIZADO", "url": "https://..." }
]
```
- Pode continuar fixo no front se o back preferir; deixamos a rota sugerida caso queiram gerenciar.

---

## 11. Assistência Técnica (`/assistencia-tecnica`)

### 11.1 Localizar assistência técnica
**Funcionalidade:** conteúdo institucional (estático) + botão **"Encontrar Assistência"**.

🔴 `GET /assistencias?idioma=ptBr&cep=81070-900` (mesma ideia do item 10.1)
```json
// data esperado
[
  { "id": 1, "nome": "Assistência Autorizada X", "distanciaKm": 2.1,
    "endereco": "Av. Y, 500 - Curitiba - PR",
    "telefone": "+55 (41) 3000-0000",
    "latitude": -25.4, "longitude": -49.2, "urlMapa": "https://maps.google.com/?q=..." }
]
```
- Mesma estrutura de resultado do "Onde Comprar" (dá pra reaproveitar tipo e componente de card).

---

## 12. Garantia (`/garantia` → `Garantia`)

### 12.1 Cadastrar garantia
**Funcionalidade:** conteúdo institucional (condições, o que cobre etc. — **estático**) + botão
**"Cadastrar Garantia"** que, pelo texto, abre um fluxo: preencher formulário → assistir vídeo →
aceite → e-mail de confirmação. O formulário em si ainda **não foi construído no front**.

🔴 `POST /garantia/cadastrar` (a definir os campos junto com o desenho da tela)
```json
// request (proposta inicial)
{ "cpfCnpj": "...", "nome": "...", "email": "...", "telefone": "...",
  "codigoProduto": "68.64.222.220", "numeroNotaFiscal": "12345",
  "dataCompra": "2026-06-01", "aceiteVideo": true, "idioma": "ptBr" }
```
```json
// data esperado
{ "protocolo": "GAR-2026-000012", "mensagem": "Garantia registrada. Confira seu e-mail." }
```
> Esta tela ainda vai ser desenhada. Trazemos a rota aqui só para o back já prever o fluxo (inclusive
> o disparo do e-mail de confirmação citado no conteúdo da página).

---

## 13. Conheça a VONDER (`/conheca-a-vonder`)

Página **institucional** (história, linha do tempo, valores, banners). Hoje 100% estática e **pode
seguir assim**. Só entra no back se quiserem torná-la editável via CMS — nesse caso vira um bloco de
"conteúdo institucional" com títulos/textos/imagens por seção. Sem rota necessária agora.

---

## 14. Resumo — todas as rotas

| # | Funcionalidade | Método + rota | Status |
|---|---|---|---|
| 1.1 | Newsletter (rodapé) | `POST /newsletter/inscrever` | 🔴 |
| 1.2 | Categorias (mega-menu + filtros) | `GET /categorias` | 🔴 |
| 2.x | Home agregada | `GET /home` | ✅ |
| 2.5 | Feed do Instagram | `GET /redes-sociais/instagram/feed` | 🔴 |
| 3.1 | Filtros da listagem | `GET /produtos/filtros` | 🔴 |
| 3.2 | Listagem de produtos | `POST /produtos/buscar` (público) | 🟡 |
| 4.1 | Produto (detalhe + galeria) | `GET /produto/{codigoOvd}` (público) | 🟡 |
| 4.2 | Características (acordeão) | (junto do 4.1) | 🟡 |
| 4.3 | Produtos relacionados | `GET /produto/{codigoOvd}/relacionados` | 🟡 |
| 5.1 | Blog (listagem pública) | `GET /blog` (público) | 🟡 |
| 6.1 | Lançamentos + modal | `GET /lancamentos` | 🔴 |
| 7.1 | Fale Conosco (form) | `POST /fale-conosco` | 🔴 |
| 8.1 | Vagas (Trabalhe Conosco) | `GET /vagas` | 🔴 |
| 8.2 | Currículo representante | `POST /trabalhe-conosco/representante` | 🔴 |
| 8.3 | Cadastro revendedor | `POST /trabalhe-conosco/revendedor` | 🔴 |
| 9.1 | FAQ | `GET /faq` | 🔴 |
| 10.1 | Revendedores por CEP | `GET /revendedores` | 🔴 |
| 10.2 | Marketplaces | `GET /marketplaces` | 🔴 |
| 11.1 | Assistências técnicas por CEP | `GET /assistencias` | 🔴 |
| 12.1 | Cadastrar garantia | `POST /garantia/cadastrar` | 🔴 |

**Estáticas (sem rota agora):** "Conheça a VONDER", e as seções institucionais fixas da home
(features, vitrine, banner institucional).

---

## 15. Prioridade sugerida pelo front

1. **Tornar público** o que já existe: `/home` (pronto), `/blog`, `/produto/buscar`, catálogo — é o
   que destrava as telas de maior tráfego (home, blog, produto).
2. **Formulários** (`/fale-conosco`, `/newsletter`, Trabalhe Conosco) — funcionalidade que hoje não
   faz nada e é esperada pelo usuário.
3. **Locators** (`/revendedores`, `/assistencias`) — dependem de base de lojas + geolocalização.
4. **Lançamentos**, **FAQ**, **garantia** — conteúdo novo.

O único ponto que **precisa de decisão conjunta antes de codar** é a autenticação do site público
(seção 0.5): definir se as rotas de conteúdo ficam abertas, usam `x-api-key` como o `/home`, ou
ganham endpoints públicos dedicados.
