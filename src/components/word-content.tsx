import { WordProps } from '../lib/words';

export function WordContent({ palavra }: WordProps) {
  return (
    <div>
      <span className="text-sm font-medium text-slate-300">
        {palavra.titulo}
      </span>
      <p className="text-sm leading-6 text-slate-400">
        <span className="text-slate-300">Tradução: </span>
        {palavra.traducao}
      </p>
      <p className="text-sm leading-6 text-slate-400">
        <span className="text-slate-300">Significado: </span>
        {palavra.significado}
      </p>
      <p className="text-sm leading-6 text-slate-400">
        <span className="text-slate-300">Frases: </span> <br />
        <span className="text-slate-300 ml-3">1) </span>
        {palavra.frase1} <br />
        <span className="text-slate-300 ml-3">2) </span>
        {palavra.frase2}
      </p>
      <img src={palavra.imagem} alt="" className="w-64 h-64 mx-auto mt-4" />
    </div>
  );
}
