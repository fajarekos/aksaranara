
"use client"

import { useState, useEffect, useRef } from "react";
import ViewUserButton from "@/components/buttons/ViewButton";
import CardList from "@/components/cards/CardLists";

const Test = ({
    duration = 90,
    onTimeUp
}: {
    duration: number;
    onTimeUp: () => void
}) => {
    const [time, setTime] = useState<number>(duration)
    const [running, setRunning] = useState<boolean>(false)

    const intervalRef = useRef<ReturnType< typeof setInterval> | null > (null)

    useEffect(() => {
        if (!running) return

        intervalRef.current = setInterval(() => {
            setTime(t => {
                if(t <= 1) {
                    clearInterval(intervalRef.current!)
                    setRunning(false)
                    onTimeUp()
                    return 0
                }
                return t - 1
            })
        }, 1000)


        return () => {
            clearInterval(intervalRef.current!)
        }
    }, [running])

    const fmt = (s: number) => {
        return [Math.floor(s/60), s%60].map(n => String(n).padStart(2, '0')).join(':')
    }

    return(
        <div>
            <p>{fmt(time)}</p>
            <button onClick={() => { setRunning(r => !r)} }>
                {running ? "Pause" : "Start"}
            </button>

            <CardList>
                <h1>Hallo friend, </h1>
                <ViewUserButton />
            </CardList>
        </div>
    )
}

export default Test