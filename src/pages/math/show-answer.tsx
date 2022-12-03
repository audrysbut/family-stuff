interface ShowAnswerProps {
    answer: boolean | undefined
}

export const ShowAnswer = ({ answer }: ShowAnswerProps) => {
    const getText = () => {
        if (answer === undefined) {
            return ''
        }
        if (answer) {
            return '✅'
        }
        return '❌'
    }

    const text = getText()
    return <span style={{
        marginLeft: '0.2rem',
    }}>{text}</span>
}