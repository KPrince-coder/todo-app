import { createBrowserRouter } from 'react-router-dom';
// import Home from '../pages/Home';
// import Contact from '../pages/Contact';
import ErrorPage from '../pages/ErrorPage';
import SignIn from '../pages/LogIn';
import SplashScreen from '../pages/SplashScreen';

const Routes = createBrowserRouter([
	{
		path: '/',
		exact: true,
		element: <SplashScreen />,
		errorElement: <ErrorPage />,
	},
	{
		path: 'login',
		element: <SignIn />,
	},
]);

export default Routes;
