import * as Dialog from '@radix-ui/react-dialog';
import { Volume2, X } from 'lucide-react';
import { WordProps } from '../lib/words';
import { WordContent } from './word-content';

export function Card({ palavra }: WordProps) {
  const playAudio = () => {
    const audioElement = new Audio(palavra.audio);
    audioElement.play();
  };
  return (
    <Dialog.Root>
      <Dialog.DialogTrigger className="rounded-md text-left flex flex-col bg-slate-800 p-5 gap-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <WordContent palavra={palavra} />

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
      </Dialog.DialogTrigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed overflow-hidden inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full bg-slate-700 md:rounded-md flex flex-col outline-none">
          <Dialog.DialogClose className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.DialogClose>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <WordContent palavra={palavra} />
          </div>
          <button
            type="button"
            onClick={playAudio}
            className="w-full flex items-center justify-center bg-lime-400 py-3 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500"
          >
            <Volume2 className="w-5 h-5 mx-2" /> Ouvir a pronúncia
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
