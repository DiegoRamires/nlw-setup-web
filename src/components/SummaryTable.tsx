import { useEffect, useState } from "react"
import {
  generateDatesFromYearBeginning
} from "../utils/generate-dates-from-year-beginning"
import { HabitDay } from "./HabitDay"
import { api } from "../lib/axios"

const weekDays = [
  'D', 'S', 'T', 'Q', 'Q', 'S', 'S'
]

type Summary = {
  id: string;
  date: string;
  amount: string;
  completed: number;
}[]

const summaryDates = generateDatesFromYearBeginning()

const minimumSummaryDateSizes = 18 * 7 // 18 weeks
const amountOfDaysToFill = minimumSummaryDateSizes - summaryDates.length

export function SummaryTable() {
  const [summary, setSummary] = useState<Summary>([])
  useEffect(() => {
    api.get('summary').then(response => {
      setSummary(response.data)
    })
  }, [])

  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, i) => {
          return (
            <div
              key={`${weekDay}-${i}`}
              className="
                text-zin-400
                text-xl
                h-10
                font-bold
                flex
                items-center
                justify-center"
              >
              {weekDay}
            </div>
          )
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map(date => {
          return (
            <HabitDay
              key={date.toString()}
              amount={5}
              completed={Math.round(Math.random() * 5)}
            />
          )
        })}

        { amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill}).map((_, i) => {
          return (
            <div
              key={i}
              className="
                w-10
                h-10
                bg-zinc-900
                border-2
                border-zinc-800
                rounded-lg
                opacity-40
                cursor-not-allowed
              "
            >
            </div>
          )
        })}
      </div>
    </div>
  )
}
