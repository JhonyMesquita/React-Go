export function CreateRoom() {
  return (
    <main className="h-screen flex items-center justify-center px-4">
      <div className="max-w-[450px] flex flex-col items-center gap-6">
        <img src="src/assets/go.png" alt="" className="w-24 h-24"/>
        <p className="leading-relaxed text-zinc-300 text-center"> 
          Crie uma sala pública de AMA (Ask Me Anything) e compartilhe o link com seus amigos.
        </p>
      </div>
    </main>
  )
}