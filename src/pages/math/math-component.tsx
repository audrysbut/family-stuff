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

    const clearOnError = () => {
        if (!answerCorrect) {
            (inputRef.current as any).value = ''
        }
    }

    const calculate = () => {
        const answer = strategy.calculate(firstValue, secondValue)
        const value = (inputRef.current as any)?.value
        if (value === '') {
            setAnswerCorrect(undefined)
            return
        }
        const inputValue = parseInt(value)
        setAnswerCorrect(answer === inputValue)
    }

    return <div style={{
        paddingBottom: "0.2rem",
        marginLeft: '0.25rem'
    }}>
        <span style={textStyle}>{firstValue}</span>
        <span style={textStyle}>{operation}</span>
        <span style={textStyle}>{secondValue}</span>
        <span style={textStyle}>=</span>
        <input type="number"
            ref={inputRef}
            style={{ width: "40px" }}
            onBlur={calculate}
            onFocus={clearOnError}
        ></input>
        <ShowAnswer answer={answerCorrect} />
    </div>
}