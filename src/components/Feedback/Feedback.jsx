export default function Feedback({feedbacks, totalFeedback, precentageOfGoodFeedback}) {
    return(
        <>
        <p>Good: {feedbacks.good}</p>
        <p>Neutral: {feedbacks.neutral}</p>
        <p>Bad: {feedbacks.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {precentageOfGoodFeedback}%</p>
        </>
    )
}