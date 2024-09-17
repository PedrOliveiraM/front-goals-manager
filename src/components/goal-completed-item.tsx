import dayjs from 'dayjs'
import { CheckCircle2 } from 'lucide-react'

interface goalsProps {
  goal: {
    id: string
    title: string
    completedAt: string
  }
}

const GoalCompletedItem = ({ goal }: goalsProps) => {
  const formatedTime = dayjs(goal.completedAt).format('HH[:]mm[h]')

  return (
    <li key={goal.id} className="flex gap-2 items-center">
      <CheckCircle2 className="size-4 text-pink-400" />
      <span className="text-zinc-400 text-xs">
        Você completou “
        <span className="text-zinc-100 font-medium">{goal.title}</span>” às{' '}
        <span className="text-zinc-100">{formatedTime}</span>
      </span>
    </li>
  )
}

export default GoalCompletedItem
