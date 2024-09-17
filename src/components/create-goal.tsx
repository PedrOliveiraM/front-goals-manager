import { X } from 'lucide-react'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from './ui/dialog'

import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from './ui/radio-group'
import { createGoal } from '../http/create-goal'
import { useQueryClient } from '@tanstack/react-query'

const createGoalForm = z.object({
  title: z.string().min(3, {
    message: 'Informe a atividade que irá realizar',
  }),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
})

type CreateGoalForm = z.infer<typeof createGoalForm>

export function CreateGoal() {
  const queryClient = useQueryClient()

  const { register, control, handleSubmit, formState, reset } =
    useForm<CreateGoalForm>({
      resolver: zodResolver(createGoalForm),
    })

  async function handleCreateGoal({
    title,
    desiredWeeklyFrequency,
  }: CreateGoalForm) {
    await createGoal({
      title,
      desiredWeeklyFrequency,
    })

    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pendingGoals'] })

    reset()
  }

  return (
    <DialogContent>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <DialogTitle>Cadastrar meta</DialogTitle>
            <DialogClose>
              <X className="size-5 text-zinc-600" />
            </DialogClose>
          </div>

          <DialogDescription className="text-sm text-zinc-400 leading-relaxed">
            Adicione atividades que{' '}
            <span className="underline"> te fazem bem</span> e que você quer
            continuar praticando toda semana.
          </DialogDescription>
        </div>

        <form
          onSubmit={handleSubmit(handleCreateGoal)}
          className="flex-1 flex flex-col justify-between "
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Qual a atividade?</Label>
              <Input
                id="title"
                autoFocus
                placeholder="Praticar exercícios, meditar, etc..."
                {...register('title')}
              />
              {formState.errors.title && (
                <p className="text-red-400 text-sm">
                  {formState.errors.title.message?.toString()}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label>Qual a atividade?</Label>
              <Controller
                name="desiredWeeklyFrequency"
                control={control}
                defaultValue={3}
                render={({ field }) => {
                  return (
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={String(field.value)}
                    >
                      <RadioGroupItem value={'1'}>
                        <RadioGroupIndicator />
                        <span className="font-medium text-sm leading-none text-zinc-300">
                          1x na semana
                        </span>
                        <span className="text-lg leading-none">🥱</span>
                      </RadioGroupItem>
                      <RadioGroupItem value={'2'}>
                        <RadioGroupIndicator />
                        <span className="font-medium text-sm leading-none text-zinc-300">
                          2x na semana
                        </span>
                        <span className="text-lg leading-none">🙂</span>
                      </RadioGroupItem>
                      <RadioGroupItem value={'3'}>
                        <RadioGroupIndicator />
                        <span className="font-medium text-sm leading-none text-zinc-300">
                          3x na semana
                        </span>
                        <span className="text-lg leading-none">😎</span>
                      </RadioGroupItem>
                      <RadioGroupItem value={'4'}>
                        <RadioGroupIndicator />
                        <span className="font-medium text-sm leading-none text-zinc-300">
                          4x na semana
                        </span>
                        <span className="text-lg leading-none">😜</span>
                      </RadioGroupItem>
                      <RadioGroupItem value={'5'}>
                        <RadioGroupIndicator />
                        <span className="font-medium text-sm leading-none text-zinc-300">
                          5x na semana
                        </span>
                        <span className="text-lg leading-none">🤨</span>
                      </RadioGroupItem>
                      <RadioGroupItem value={'6'}>
                        <RadioGroupIndicator />
                        <span className="font-medium text-sm leading-none text-zinc-300">
                          6x na semana
                        </span>
                        <span className="text-lg leading-none">🤯</span>
                      </RadioGroupItem>
                      <RadioGroupItem value={'7'}>
                        <RadioGroupIndicator />
                        <span className="font-medium text-sm leading-none text-zinc-300">
                          Todos dias da semana
                        </span>
                        <span className="text-lg leading-none">🔥</span>
                      </RadioGroupItem>
                    </RadioGroup>
                  )
                }}
              />
            </div>
          </div>
          <div className="flex gap-3 w-full items-center">
            <DialogClose asChild>
              <Button className="w-full" variant="secondary">
                Fechar
              </Button>
            </DialogClose>

            <Button className="w-full">Salvar</Button>
          </div>
        </form>
      </div>
    </DialogContent>
  )
}
