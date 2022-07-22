import axios from 'axios';
import './App.css';
import { DataSource } from './DataSource';
import { ProductInfo } from './ProductInfo';
import { ResourceLoader } from './ResourceLoader';
import { UserInfo } from './UserInfo';


const getServerData = url => async () => {
  const response = await axios.get(url);
  return response.data
}

const getLocalStorageData = key => () => {
  return localStorage.getItem(key);
}

const Text = ({message}) => <h1>{message}</h1>

// Container components using a generic resource loader component that loads to child components
function App() {
  return (
    <>
      <DataSource getDataFunction={getLocalStorageData('message')} resourceName='message'>
        <Text />
      </DataSource>
      <DataSource getDataFunction={getServerData('/users/123')} resourceName="user" >
        <UserInfo />
      </DataSource>
      <ResourceLoader resourceUrl="/products/1234" resourceName="product">
        <ProductInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
