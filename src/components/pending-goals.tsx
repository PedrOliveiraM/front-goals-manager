import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Plus } from 'lucide-react'
import { createGoalCompletion } from '../http/create-goal-completion'
import { getPendingGoals } from '../http/get-pending-goals'
import { OutlineButton } from './ui/outline-button'

const PendingGoals = () => {
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['pendingGoals'],
    queryFn: getPendingGoals,
  })

  if (!data) {
    return null
  }

  async function handleClickCompletionGoal(id: string) {
    await createGoalCompletion(id)

    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pendingGoals'] })
  }

  return (
    <section className="flex gap-3 flex-wrap">
      {data.map(goal => {
        return (
          <OutlineButton
            key={goal.goalId}
            disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
            onClick={() => handleClickCompletionGoal(goal.goalId)}
          >
            <Plus className="text-zinc-600 size-4" />
            {goal.title}
          </OutlineButton>
        )
      })}
    </section>
  )
}

export default PendingGoals
