import { createBrowserRouter } from 'react-router-dom';
// import Home from '../pages/Home';
import Contact from '../pages/Contact';
import ErrorPage from '../pages/ErrorPage';
// import SignIn from '../pages/SignIn';
import SplashScreen from '../pages/SplashScreen';

const Routes = createBrowserRouter([
	{
		path: '/',
		exact: true,
		element: <SplashScreen />,
		errorElement: <ErrorPage />,
	},
	{
		path: 'contact',
		element: <Contact />,
	},
]);

export default Routes;
