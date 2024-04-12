import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import routes from './routes';
import { store } from 'app/store';

const App = () => 
    <Provider store={store}>
        <RouterProvider router={routes} />
    </Provider>
;

export default App;