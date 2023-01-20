import * as Popover from '@radix-ui/react-popover'
import { ProgressBar } from './ProgressBar'
import clsx from 'clsx'

interface HabitDayProps {
  completed: number
  amount: number
}

export function HabitDay({ amount, completed }: HabitDayProps) {
  const completedPercentage = Math.round((completed / amount) * 100)

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx("w-10 h-10  border-2 rounded-lg", {
          'bg-zinc-900 border-zinc-800': completedPercentage === 0,
          'bg-violet-400 border-violet-400': completedPercentage < 0 && completed > 20,
          'bg-violet-500 border-violet-500': completedPercentage >= 20 && completed < 40,
          'bg-violet-600 border-violet-600': completedPercentage >= 40 && completed < 60,
          'bg-violet-800 border-violet-800': completedPercentage >= 60 && completed < 80,
          'bg-violet-900 border-violet-900': completedPercentage >= 80,
        })}
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className='font-semibold text-zinc-400'>quarta-feira</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">18/01</span>

          <ProgressBar progress={50} />
          <Popover.Arrow height={8} width={16} className='fill-zinc-900'/>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
