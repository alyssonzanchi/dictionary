import { ChangeEvent, useState } from 'react';
import logo from '/assets/logo.png';
import { palavras } from './lib/words';
import { Card } from './components/card';

export function App() {
  const [search, setSearch] = useState('');

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;

    setSearch(query);
  }

  const filteredWords =
    search !== ''
      ? palavras.filter((palavra) =>
          palavra.titulo
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase())
        )
      : palavras;

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
      <div className="flex items-center">
        <img src={logo} alt="" />
        <h1 className="text-4xl">Dictionary</h1>
      </div>

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque uma palavra..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
          onChange={handleSearch}
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        {filteredWords.map((palavra) => {
          return <Card key={palavra.id} palavra={palavra} />;
        })}
      </div>
    </div>
  );
}
