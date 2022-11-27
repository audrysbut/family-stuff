import { CSSProperties, useRef, useState } from "react"
import { ShowAnswer } from "./show-answer"
import { Operation, strategies } from "./strategies"

interface MathComponentProps {
    operation: Operation
    upTo: number
}

const textStyle: CSSProperties = {
    display: 'inline-block',
    width: '20px',
    textAlign: 'center'
}

export const MathComponent = ({ operation, upTo }: MathComponentProps) => {
    const strategy = strategies.get(operation)!
    const [answerCorrect, setAnswerCorrect] = useState<boolean | undefined>()
    const [firstValue] = useState(strategy.generateFirstValue(upTo))
    const [secondValue] = useState(strategy.generateSecondValue(upTo, firstValue))

    const inputRef = useRef<HTMLInputElement>(null)

    const calculate = () => {
        const answer = strategy.calculate(firstValue, secondValue)
        const current = inputRef.current
        const inputValue = parseInt((current as any)?.value || "0")
        setAnswerCorrect(answer === inputValue)
    }

    return <div style={{
        paddingBottom: "0.2rem",
        // paddingLeft: "0.7rem"
    }}>
        <span style={textStyle}>{firstValue}</span>
        <span style={textStyle}>{operation}</span>
        <span style={textStyle}>{secondValue}</span>
        <span style={textStyle}>=</span>
        <input type="number" ref={inputRef} style={{
            width: "50px"
        }} onBlur={() =>
            calculate()
        }></input>
        <ShowAnswer answer={answerCorrect} />
    </div>
}