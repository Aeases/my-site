import { cubicBezier, motion, useTime, useTransform } from "framer-motion";
import differenceInCalendarWeeks from "date-fns/differenceInCalendarWeeks"
import { useEffect } from "react";
const weekDiff = differenceInCalendarWeeks(Date.now(), new Date(2006, 1, 1))
const result = differenceInCalendarWeeks(
  new Date(2014, 6, 20),
  new Date(2014, 6, 5)
)

type year = {
    year: number,
    weeks: week[]
}

type week = {
  occured: boolean|undefined,
  week: number
  coards: number[]
}
export default function SvgGraph() {
  console.log(weekDiff)
  let years: year[] = []
  for (let k = 0; k <= 84; k++) {
    let thisYear: year = {year: k, weeks: []}
    for (let i = 1; i <= 52; i++) {
      let weekNum = k*52 + i
      let occBool = undefined
      if (weekNum > weekDiff) {
        occBool = true
      } else if (weekNum < weekDiff) {
        occBool = false
      }
      console.log(`Diff: ${weekDiff} ||| Week: ${weekNum} ${occBool}`)
      let xCoard = i*2
      console.log(i)
      let yCoard = k + k
      thisYear.weeks.push({week: weekNum, occured: occBool, coards: [xCoard, yCoard]})
    }
    years.push(thisYear)
    console.log(`Year: ${k}`)
  }
  return(
    <svg viewBox="-2 -2.5 108 216">
      {
        years.map((y) => y.weeks.map((w) => svgDot(w.coards[0], w.coards[1], w.occured)))
      }
      <use href="use"/>
    </svg>
  )
}

const svgDot = (x: number, y: number, occured: boolean|undefined) => {
  if (occured) { // UnOccured Weeks
    return (<circle r="0.7" cx={String(x)} cy={String(y)} stroke="#879A39" fill="#879A39" strokeWidth="0.3"/>)          
  } else if (occured == undefined) { // The Current Week
    let t = [1, 0.2, 0.5, 0.2]
    let s = [1, 1.4, 1]
    return (
      <g>

        <motion.circle r="0.8" cx={String(x)} cy={String(y)} stroke="#879A39" fill="#879A39"  strokeWidth="0.25" animate={{
          scale: [0.9, 1.4, 0.9]
        }}
        transition={{
            duration: 1,
            ease: "easeIn",
            repeat: Infinity,
            repeatDelay: 1.15,
            type: "just",
            damping: 5,
        }}
        />
        <motion.circle r="0.7" cx={String(x)} cy={String(y)} stroke="#66800B" fill="#66800B"  strokeWidth="0.25" animate={{scale: [1, 0.9, 1.15, 1]}} transition={{
          duration: 1,
          repeatDelay: 1.15,
          repeatType: "reverse",
          ease: "backIn",
          repeat: Infinity,
        }}/>
        {/*<circle r="0.7" cx={String(x)} cy={String(y)} stroke="#cecdc3" fill="#1c1b1a"  strokeWidth="0.25"/>*/}
      </g>
    )
  } else if (!occured) { // Occurred Weeks
    return (<circle r="0.7" cx={String(x)} cy={String(y)} stroke="#878580" fill="#87858" strokeWidth="0.3"/>)          
  }
}
