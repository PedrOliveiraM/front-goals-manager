import logo from './assets/logo-in-orbit.svg'
import illustration from './assets/lets-start-illustration.svg'
import { Plus } from 'lucide-react'

export function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-8">
      <img src={logo} alt="logo in.orbit" className="h-9 w-auto" />
      <img
        src={illustration}
        alt="illustration lets-start"
        className="w-80 h-auto"
      />
      <p className="text-base text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <button
        type="button"
        className="py-2.5 px-4 rounded-lg bg-violet-500 font-medium flex items-center gap-2 text-violet-50 text-sm tracking-tight hover:bg-violet-600"
      >
        <Plus className="size-4" />
        Cadastrar meta
      </button>
    </div>
  )
}
