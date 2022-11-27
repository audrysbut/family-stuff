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
        return randomVal(1, upTo - firstValue)
    },
    calculate: (firstValue: number, secondValue: number): number => {
        return firstValue + secondValue
    }
}

export type Operation = "+" | "-"

const minus: OperationStrategy = {
    generateFirstValue: (upTo: number): number => {
        return randomVal(1, upTo)
    },
    generateSecondValue: (upTo: number, firstValue: number): number => {
        return randomVal(1, firstValue)
    },
    calculate: (firstValue: number, secondValue: number): number => {
        return firstValue - secondValue
    }
}

export const strategies = new Map<Operation, OperationStrategy>([
    ["+", sum],
    ["-", minus],
])

function randomVal(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min
}
