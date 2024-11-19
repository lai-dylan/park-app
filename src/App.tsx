import {RouterProvider} from 'react-router-dom';
import {router} from './router';
import {Suspense} from 'react';
import {Spin} from 'antd';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spin/>}>
        <RouterProvider router={router}/>
      </Suspense>
    </div>
  );
}

export default App;
