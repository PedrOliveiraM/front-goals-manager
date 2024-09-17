type CreateGoalDTO = {
  goalId: string
  desiredWeeklyFrequency: number
}

export async function createGoal({
  goalId,
  desiredWeeklyFrequency,
}: CreateGoalDTO) {
  await fetch('http://localhost:3333/goals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      goalId,
      desiredWeeklyFrequency,
    }),
  })
}
