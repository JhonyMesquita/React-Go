import { ArrowRight } from 'lucide-react';

export function CreateRoom() {
  return (
    <main className="h-screen flex items-center justify-center px-4">
      <div className="max-w-[450px] flex flex-col gap-6">
        <div className='flex flex-col items-center'>
          <img src="src/assets/go.png" alt="" className="w-24 h-24"/>
          <p className="leading-relaxed text-zinc-300 text-center"> 
            Crie uma sala pública de AMA (Ask Me Anything) e compartilhe o link com seus amigos.
          </p>
        </div>
        <form className='flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 ring-orange-400 ring-offset-2 ring-offset-zinc-900 focus-within:ring-1'>
          <input
            type="text"
            name="theme"
            placeholder="Nome da sala"
            autoComplete='off'
            className='flex-1 text-sm bg-transparent mx-2 outline-none text-zinc-100 placeholder:text-zinc-500'
          />

          <button 
            type="submit" 
            className='bg-orange-400 text-orange-950 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm transition-colors hover:bg-orange-500'>
            Criar sala
            <ArrowRight className='size-4'/>
          </button>
        </form>
      </div>
    </main>
  )
}