import { useRouteError, Link } from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError();
	console.error(error);
	return (
		<article className="flex flex-col items-center gap-8">
			<h1 className="text-3xl font-bold text-white">oops!</h1>
			<p>Something went wrong. It looks like the page does not exist.</p>
			<p>{error.statusText}</p>
			<div>
				<Link to="/">Click to go Home</Link>
			</div>
		</article>
	);
};

export default ErrorPage;
