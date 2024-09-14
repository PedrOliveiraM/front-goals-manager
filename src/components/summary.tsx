import { CheckCircle2, Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { InOrbitIcon } from './in-orbit-icon'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { OutlineButton } from './ui/outline-button'

export function Summary() {
  return (
    <div className="max-w-[480px] px-5 py-10 mx-auto flex flex-col gap-6">
      <header className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <InOrbitIcon />
          <span className="font-semibold text-lg tracking-tight leading-tight">
            05 a 12 de Agosto
          </span>
        </div>
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </header>

      <div className="flex flex-col gap-3">
        <Progress value={8} max={15}>
          <ProgressIndicator style={{ width: '50%' }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span className="text-zinc-400">
            Você completou <span className="text-zinc-100">8 </span>de{' '}
            <span className="text-zinc-100">15</span> metas nessa semana.
          </span>
          <span className='text-zinc-400"'>58%</span>
        </div>
      </div>

      <Separator />

      {/** Area de adicionar meta concluida */}
      <section className="flex gap-3 flex-wrap">
        <OutlineButton>
          <Plus className="text-zinc-600 size-4" />
          Praticar Exercícios
        </OutlineButton>
        <OutlineButton>
          <Plus className="text-zinc-600 size-4" />
          Academia
        </OutlineButton>
        <OutlineButton>
          <Plus className="text-zinc-600 size-4" />
          Nadar
        </OutlineButton>
        <OutlineButton>
          <Plus className="text-zinc-600 size-4" />
          Meditar
        </OutlineButton>
      </section>

      {/** Area Sua semana */}
      <div className="flex flex-col gap-6">
        <h2 className="text-zinc-100 font-medium leading-snug tracking-tight">
          Sua semana
        </h2>

        {/** Atividades do dia 1 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-zinc-100 text-base font-medium leading-snug">
            Domingo{' '}
            <span className="text-xs text-zinc-400 leading-snug">
              (06 de Agosto)
            </span>
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Você ainda não completou nenhuma meta essa semana.
          </p>

          {/**Lista de atividades */}
          <ul className="flex flex-col gap-3">
            <li className="flex gap-2 items-center">
              <CheckCircle2 className="size-4 text-pink-400" />
              <span className="text-zinc-400 text-xs">
                Você completou “
                <span className="text-zinc-100 font-medium">Acordar cedo</span>”
                às
                <span className="text-zinc-100"> 07:15h</span>
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <CheckCircle2 className="size-4 text-pink-400" />
              <span className="text-zinc-400 text-xs">
                Você completou “
                <span className="text-zinc-100 font-medium">Ler Livro</span>” às
                <span className="text-zinc-100"> 08:13h</span>
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <CheckCircle2 className="size-4 text-pink-400" />
              <span className="text-zinc-400 text-xs">
                Você completou “
                <span className="text-zinc-100 font-medium">Estudar</span>” às
                <span className="text-zinc-100"> 10:13h</span>
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <CheckCircle2 className="size-4 text-pink-400" />
              <span className="text-zinc-400 text-xs">
                Você completou “
                <span className="text-zinc-100 font-medium">Jantar Cedo</span>”
                às
                <span className="text-zinc-100"> 19:13h</span>
              </span>
            </li>
          </ul>
        </div>

        {/** Atividades do dia 2 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-zinc-100 text-base font-medium leading-snug">
            Segunda{' '}
            <span className="text-xs text-zinc-400 leading-snug">
              (07 de Agosto)
            </span>
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Você ainda não completou nenhuma meta essa semana.
          </p>

          {/**Lista de atividades */}
          <ul className="flex flex-col gap-3">
            <li className="flex gap-2 items-center">
              <CheckCircle2 className="size-4 text-pink-400" />
              <span className="text-zinc-400 text-xs">
                Você completou “
                <span className="text-zinc-100 font-medium">Acordar cedo</span>”
                às
                <span className="text-zinc-100"> 07:15h</span>
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <CheckCircle2 className="size-4 text-pink-400" />
              <span className="text-zinc-400 text-xs">
                Você completou “
                <span className="text-zinc-100 font-medium">Ler Livro</span>” às
                <span className="text-zinc-100"> 08:13h</span>
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <CheckCircle2 className="size-4 text-pink-400" />
              <span className="text-zinc-400 text-xs">
                Você completou “
                <span className="text-zinc-100 font-medium">Estudar</span>” às
                <span className="text-zinc-100"> 10:13h</span>
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <CheckCircle2 className="size-4 text-pink-400" />
              <span className="text-zinc-400 text-xs">
                Você completou “
                <span className="text-zinc-100 font-medium">Jantar Cedo</span>”
                às
                <span className="text-zinc-100"> 19:13h</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/** Msg de nenhuma meta completada */}
      <p className="text-zinc-400 text-sm leading-relaxed">
        Você ainda não completou nenhuma meta essa semana.
      </p>
    </div>
  )
}
