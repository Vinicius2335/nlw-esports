import { MagnifyingGlassPlus } from 'phosphor-react';
import * as Dialog from "@radix-ui/react-dialog"

export function CreateAdBanner() {
  return (
    <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo ?
            </strong>
            <span className="text-zinc-400">Publique um anúncio para encontrar novos players!</span>
          </div>

          <Dialog.Trigger className="py-3 px-4 hover:bg-violet-600 bg-violet-500 text-white rounded-md flex items-center gap-3 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
            <MagnifyingGlassPlus size={24} />
            Publicar Anúncio
          </Dialog.Trigger>
        </div>
      </div>
  )
}