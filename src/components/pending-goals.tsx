import { useQuery } from '@tanstack/react-query'
import { getPendingGoals } from '../http/get-pending-goals'
import { OutlineButton } from './ui/outline-button'
import { Plus } from 'lucide-react'

const PendingGoals = () => {
  const { data } = useQuery({
    queryKey: ['pendingGoals'],
    queryFn: getPendingGoals,
  })

  if (!data) {
    return null
  }

  return (
    <section className="flex gap-3 flex-wrap">
      {data.map(goal => {
        return (
          <OutlineButton key={goal.goalId}>
            <Plus className="text-zinc-600 size-4" />
            {goal.title}
          </OutlineButton>
        )
      })}
    </section>
  )
}

export default PendingGoals
