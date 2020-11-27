import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import Widgets from './Widgets.js';
import Login from './Login.js';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">

      {!user? (
       <Login />
        ) : ( 
        <div>
          {/* Header */}
          <Header />
          {/* App body */}
          <div className="app__body">
            {/* Sideba r on left */}
            <Sidebar />
            {/* Posts in middle (Feed)*/}
            <Feed />
            {/* Live Feed on Right */}
            <Widgets />
          </div>
        </div>
      )
      }
      
    </div>
  );
}

export default App;
