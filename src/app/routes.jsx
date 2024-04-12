import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import HomePage from 'pages/Home';
import NotFoundPage from 'pages/NothFound';
import RootErrorPage from 'pages/RooErrorPage';
import { HOME } from 'constants';
import { NOT_FOUND } from 'constants';


const routes = createBrowserRouter(
	createRoutesFromElements(
			    <Route path='' errorElement={<RootErrorPage />}>
					<Route path={HOME} element={<HomePage />} />
					<Route path={NOT_FOUND} element={<NotFoundPage />} />
				</Route>
	),
);

export default routes;
