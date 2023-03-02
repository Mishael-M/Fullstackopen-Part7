import { useNavigate } from 'react-router-dom';
import { useField } from '../hooks';

const CreateNew = (props) => {
  const content = useField('');
  let resetContent = content.reset;
  const removePropC = 'reset';
  const { [removePropC]: remove, ...restContent } = content;

  const author = useField('');
  let resetAuthor = author.reset;
  const removePropA = 'reset';
  const { [removePropA]: remove1, ...restAuthor } = author;

  const info = useField('');
  let resetInfo = info.reset;
  const removePropI = 'reset';
  const { [removePropI]: remove2, ...restInfo } = info;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    });
    props.notification(`a new anecdote ${content.value} created!`);
    setTimeout(() => {
      props.notification('');
    }, 5000);
    navigate('/');
  };

  const handleReset = (e) => {
    e.preventDefault();
    resetContent();
    resetAuthor();
    resetInfo();
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...restContent} />
        </div>
        <div>
          author
          <input {...restAuthor} />
        </div>
        <div>
          url for more info
          <input {...restInfo} />
        </div>
        <button>create</button>
        <button onClick={handleReset}>reset</button>
      </form>
    </div>
  );
};

export default CreateNew;
