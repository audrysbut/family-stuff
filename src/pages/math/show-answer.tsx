interface ShowAnswerProps {
    answer: boolean | undefined
}

export const ShowAnswer = ({ answer }: ShowAnswerProps) => {
    if (answer === undefined) {
        return <></>
    }
    if (answer) {
        return <span style={{
            marginLeft: '0.2rem'
        }}>✅</span>
    }
    return <span style={{
        marginLeft: '0.2rem'
    }}>❌</span>
}