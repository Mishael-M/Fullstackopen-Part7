import { Link } from 'react-router-dom';

const Anecdote = ({ anecdote }) => (
  <div>
    <h2>{anecdote.content}</h2>
    <p>Has {anecdote.votes} votes</p>
    <p>
      For more info see <Link to={anecdote.info}>{anecdote.info}</Link>
    </p>
  </div>
);

export default Anecdote;
