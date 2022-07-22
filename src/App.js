import './App.css';
import { CurrentUserLoader } from './CurrentUserLoader';
import { UserInfo } from './UserInfo';
import { UserLoader } from './UserLoader';

// Container components using express server
function App() {
  return (
    <>
      <UserLoader userId="234">
        <UserInfo />
      </UserLoader>
    </>
  );
}

export default App;
