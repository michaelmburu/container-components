import './App.css';
import { ProductInfo } from './ProductInfo';
import { ResourceLoader } from './ResourceLoader';
import { UserInfo } from './UserInfo';

import { UserLoader } from './UserLoader';

// Container components using a generic resource loader component that loads to child components
function App() {
  return (
    <>
      <ResourceLoader resourceUrl="/users/123" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl="/products/1234" resourceName="product">
        <ProductInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
