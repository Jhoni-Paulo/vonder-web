import imgAbrasivos from "../../assets/catalogo/2ferramentas-el-tricas-2.png";
import imgAdesivos from "../../assets/catalogo/lkfdsjlkjkgpkofds-1.png";
import imgLimpeza from "../../assets/catalogo/2ferramentas-el-tricas-2-1.png";
import imgAutomotivos from "../../assets/catalogo/2ferramentas-el-tricas-2-2.png";
import imgPintura from "../../assets/catalogo/2ferramentas-el-tricas-2-3.png";
import imgCorte from "../../assets/catalogo/2ferramentas-el-tricas-2-4.png";
import imgManuais from "../../assets/catalogo/2ferramentas-el-tricas-3.png";
import imgConstrucao from "../../assets/catalogo/2ferramentas-el-tricas-2-5.png";
import imgAgricolas from "../../assets/catalogo/2ferramentas-el-tricas-2-6.png";
import imgJardinagem from "../../assets/catalogo/2ferramentas-el-tricas-2-7.png";
import imgFerragens from "../../assets/catalogo/2ferramentas-el-tricas-2-8.png";
import imgFitas from "../../assets/catalogo/2ferramentas-el-tricas-2-9.png";
import imgFixadores from "../../assets/catalogo/2ferramentas-el-tricas-2-10.png";
import imgMaquinas from "../../assets/catalogo/2ferramentas-el-tricas-2-11.png";
import imgMedicao from "../../assets/catalogo/2ferramentas-el-tricas-2-12.png";
import imgSeguranca from "../../assets/catalogo/2ferramentas-el-tricas-2-13.png";
import imgSolda from "../../assets/catalogo/2ferramentas-el-tricas-3-1.png";
import imgExpositores from "../../assets/catalogo/2ferramentas-el-tricas-2-14.png";

export interface Encarte {
  /** `\n` marca a quebra de linha prevista no layout. */
  titulo: string;
  imagem: string;
}

/**
 * Seções do catálogo. A mesma lista alimenta os cards de download dos
 * encartes e o select de navegação do folheador.
 */
export const encartes: Encarte[] = [
  { titulo: "Abrasivos", imagem: imgAbrasivos },
  {
    titulo: "Adesivos, Vedantes,\nLubrificantes, Tintas e Impermeabilizantes",
    imagem: imgAdesivos,
  },
  { titulo: "Limpeza", imagem: imgLimpeza },
  { titulo: "Cuidados Automotivos", imagem: imgAutomotivos },
  {
    titulo: "Equipamentos e Acessórios\npara Pintura e Linha Pneumática",
    imagem: imgPintura,
  },
  { titulo: "Ferramentas de Corte", imagem: imgCorte },
  { titulo: "Ferramentas Manuais", imagem: imgManuais },
  { titulo: "Construção Civil", imagem: imgConstrucao },
  { titulo: "Ferramentas Agrícolas", imagem: imgAgricolas },
  { titulo: "Jardinagem e Pulverização", imagem: imgJardinagem },
  { titulo: "Ferragens", imagem: imgFerragens },
  { titulo: "Fitas", imagem: imgFitas },
  { titulo: "Fixadores", imagem: imgFixadores },
  { titulo: "Máquinas e Equipamentos", imagem: imgMaquinas },
  { titulo: "Medição", imagem: imgMedicao },
  { titulo: "Segurança", imagem: imgSeguranca },
  { titulo: "Solda", imagem: imgSolda },
  { titulo: "Expositores e\nMateriais Promocionais", imagem: imgExpositores },
];

/** Primeira metade fica na coluna da esquerda; o resto, na direita. */
export const encartesEsquerda = encartes.slice(0, 9);
export const encartesDireita = encartes.slice(9);
