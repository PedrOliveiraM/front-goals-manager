import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-BR'
import { Plus } from 'lucide-react'
import { getSummary } from '../http/get-summary'
import GoalCompletedItem from './goal-completed-item'
import GoalEmpty from './goal-empty'
import { InOrbitIcon } from './in-orbit-icon'
import PendingGoals from './pending-goals'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'

dayjs.locale(ptBR)

export function Summary() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // Deixa essa req em cache de 60s
  })

  if (!data) return null

  const firstDayOfWeek = dayjs().startOf('week').format('D MMM')
  const lastDayOfWeek = dayjs().endOf('week').format('D MMMM')

  const conmpletedPercent = Math.round((data.completed / data.total) * 100)

  return (
    <div className="max-w-[480px] px-5 py-10 mx-auto flex flex-col gap-6">
      <header className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <InOrbitIcon />
          <span className="font-semibold text-lg tracking-tight leading-tight captalize">
            {firstDayOfWeek} - {lastDayOfWeek}
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
        <Progress value={data.completed} max={data.total}>
          <ProgressIndicator style={{ width: `${conmpletedPercent}%` }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span className="text-zinc-400">
            Você completou
            <span className="text-zinc-100"> {data.completed}</span> de
            <span className="text-zinc-100"> {data.total}</span> metas nessa
            semana.
          </span>
          <span className='text-zinc-400"'>{conmpletedPercent}%</span>
        </div>
      </div>

      <Separator />

      {/** Area de adicionar meta concluida */}
      <PendingGoals />

      <div className="flex flex-col gap-6">
        <h2 className="text-zinc-100 font-medium leading-snug tracking-tight">
          Sua semana
        </h2>

        {Object.entries(data.goalsPerDay).map(([date, goals]) => {
          const weekDay = dayjs(date).format('dddd')
          const formatedDate = dayjs(date).format('D [ de ]MMMM')

          return (
            <div key={date} className="flex flex-col gap-4">
              <h3 className="text-zinc-100 text-base font-medium leading-snug capitalize">
                {weekDay}{' '}
                <span className="text-xs text-zinc-400 leading-snug">
                  ( {formatedDate} )
                </span>
              </h3>

              <ul className="flex flex-col gap-3">
                {goals.map(goal =>
                  goal ? (
                    <GoalCompletedItem key={goal.id} goal={goal} />
                  ) : (
                    <GoalEmpty key={goal} />
                  )
                )}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
