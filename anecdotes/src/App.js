import { useState } from 'react'

const App = () => {
  const anecdotes = [
    {
      text: 'Adding manpower to a late software project makes it later!',
      votes: 0
    },
    {
      text: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: 0
    },
    {
      text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: 0
    },
    {
      text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: 0
    },
    {
      text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      votes: 0
    },
    {
      text: 'The only way to go fast, is to go well.',
      votes: 0
    }

  ]

  //selected is a random number from 0 to 5
  const [selected, setSelected] = useState(0)
  const points = new Array(6).fill(0)
  const [votes, setVotes] = useState(points)
  ///const [allClicks, setAll] = useState(0)

  const vote = () => {
    const copy = [...votes] // copy of the destructured points
    copy[selected] += 1 //one of these indexes
    setVotes(copy)
    ///setAll(allClicks.concat('L'))
  }

  const topRated = Math.max(...votes)
  console.log(topRated)

  const rndm = (max) => () => setSelected(Math.floor(Math.random() * max))

  ///const max = anecdotes.reduce(a,b)

  return (
    <div>
      <h3>Anecdote of the day</h3>
      <p>{anecdotes[selected].text}</p>
      <p>Has {votes[selected]} votes. </p>

      <Button text="next anecdote" onClick={rndm(anecdotes.length)} />
      <Button text='vote' onClick={vote} />

      <h3>Anecdote with the most votes</h3>
      <p>{anecdotes[Object.keys(votes).reduce((acc, cv) => votes[acc] > votes[cv] ? acc : cv)].text}</p>
    </div>



  )
}


const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>


export default App

/*
'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
    */