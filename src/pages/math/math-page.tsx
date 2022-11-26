import { CSSProperties, useRef, useState } from "react"

const textStyle: CSSProperties = {
    display: 'inline-block',
    width: '20px',
    textAlign: 'center'
}

export const MathPage = () => {
    return <div style={{ display: 'flex' }}>
        <SumOperations />
        <MinusOperations />
    </div>
}

export const SumOperations = () => {
    const numbers = Array.from(Array(10).keys())
    return <div>{numbers.map((r) => <MathComponent key={`m${r}`} operation="+" upTo={20} />)}</div>
}

export const MinusOperations = () => {
    const numbers = Array.from(Array(10).keys())
    return <div>{numbers.map((r) => <MathComponent key={`m${r}`} operation="-" upTo={20} />)}</div>
}

interface OperationStrategy {
    generateFirstValue: (upTo: number) => number
    generateSecondValue: (upTo: number, firstValue: number) => number
    calculate: (firstValue: number, secondValue: number) => number
}

const sum: OperationStrategy = {
    generateFirstValue: (upTo: number): number => {
        return randomVal(1, upTo)
    },
    generateSecondValue: (upTo: number, firstValue: number): number => {
        return randomVal(0, upTo - firstValue)
    },
    calculate: (firstValue: number, secondValue: number): number => {
        return firstValue + secondValue
    }
}

const minus: OperationStrategy = {
    generateFirstValue: (upTo: number): number => {
        return randomVal(1, upTo)
    },
    generateSecondValue: (upTo: number, firstValue: number): number => {
        return randomVal(0, firstValue)
    },
    calculate: (firstValue: number, secondValue: number): number => {
        return firstValue - secondValue
    }
}

const strategies = new Map<Operation, OperationStrategy>([
    ["+", sum],
    ["-", minus],
])

interface MathComponentProps {
    operation: Operation
    upTo: number
}

type Operation = "+" | "-"

const MathComponent = ({ operation, upTo }: MathComponentProps) => {
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
        paddingLeft: "0.7rem"
    }}>
        <span style={textStyle}>{firstValue}</span>
        <span style={textStyle}>{operation}</span>
        <span style={textStyle}>{secondValue}</span>
        <span style={textStyle}>=</span>
        <input type="number" ref={inputRef} style={{
            width: "50px"
        }} onKeyDown={(e) => {
            console.log(e.key)
            if (['Enter', 'Tab'].includes(e.key)) {
                calculate()
              }
        }}></input>
        {/* <button onClick={() => calculate()}>Pasitikrink</button> */}
        <ShowAnswer answer={answerCorrect} />
    </div>
}

interface ShowAnswerProps {
    answer: boolean | undefined
}

const ShowAnswer = ({ answer }: ShowAnswerProps) => {
    if (answer === undefined) {
        return <></>
    }
    if (answer) {
        return <span style={{
            color: 'green',
            marginLeft: '0.2rem'
        }}>Teisingai</span>
    }
    return <span style={{
        color: 'red',
        marginLeft: '0.2rem'
    }}>Neteisingai</span>
}

function randomVal(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min
}