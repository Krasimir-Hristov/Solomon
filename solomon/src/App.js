import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New chat</button>
        <ul className="history">
          <li>Some answare here.....</li>
        </ul>
        <nav>
          <p>Made by Krasimir Hristov</p>
        </nav>
      </section>
      <section className="main">
        <h1>SOLOMON</h1>
        <ul className='feed'>

        </ul>
        <div className='bottom-section'>
          <div className='input-container'>
            <input />
            <div id='submit'>
              <FontAwesomeIcon icon={faShare} />
            </div>
            <p className='info'>
              Meet Solomon, the chatbot designed to streamline your communication. With cutting-edge AI technology, Solomon is always ready to assist, inform, and engage in meaningful conversations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
