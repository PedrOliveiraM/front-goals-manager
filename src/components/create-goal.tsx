import { X } from 'lucide-react'
import { Button } from './ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from './ui/radio-group'

export function createGoal() {
  ;<DialogContent>
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

      <form action="" className="flex-1 flex flex-col justify-between ">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Qual a atividade?</Label>
            <Input
              id="title"
              autoFocus
              placeholder="Praticar exercícios, meditar, etc..."
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Qual a atividade?</Label>
            <RadioGroup>
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
}
