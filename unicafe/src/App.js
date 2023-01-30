import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allReviews, setAll] = useState(0)
  const [avg, setAvg] = useState(0)
  const [positive, setPositive] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
    setAll(allReviews + 1)
    setAvg((good * 1 - bad * 1) / (allReviews))
    setPositive(good * (100 / allReviews))

  }
  const neutralClick = () => {
    setNeutral(neutral + 1)
    setAll(allReviews + 1)
    setAvg((good * 1 - bad * 1) / (allReviews))
    setPositive(good * (100 / allReviews))
  }
  const badClick = () => {
    setBad(bad + 1)
    setAll(allReviews + 1)
    setAvg((good * 1 - bad * 1) / (allReviews))
    setPositive(good * (100 / allReviews))
  }


  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={goodClick} text='good' />
      <Button onClick={neutralClick} text='neutral' />
      <Button onClick={badClick} text='bad' />

      <h2>statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} allReviews={allReviews} avg={avg} positive={positive} />

    </div>
  )
}


const Statistics = ({ good, neutral, bad, allReviews, avg, positive }) => {
  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <div>
        no feedback yet
      </div>
    )
  }
  else if ((allReviews <= 1)) {
    return (
      <div>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={allReviews} />
        <p>Can't calculate average</p>
        <p>Can't calculate positive</p>
      </div>
    )
  }
  return (
    <div>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={allReviews} />
      <StatisticLine text='average' value={avg} />
      <StatisticLine text='positive' value={positive} />
    </div>

  )
}

const StatisticLine = ({ text, value }) => {
  if (text === "positive") {
    return (
      <p>{text}: {value} %</p>
    )
  }
  else return (
    <p>{text}: {value}</p>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

export default App