import { Link } from 'react-router-dom';
import { Login_Icon } from '../assets';
import Logo from '../components/Logo';

const SplashScreen = () => {
	return (
		<div
			className="bg-gradient flex  min-h-screen max-w-md flex-col items-center justify-center gap-y-16 rounded-lg px-7 py-14 shadow-lg sm:min-h-full"
			style={
				{
					// background:
					// 	'linear-gradient(45deg, rgba(221,221,228,1) 0%, rgba(255,255,255,1) 50%, rgba(229,225,249,1) 100%)',
					// background:
					// 	'radial-gradient(circle at 50% 50%, rgba(210,201,253,1) 0%, rgba(255,255,255,1) 50%, rgba(183,163,240,1) 100%)',
				}
			}
		>
			<figure>
				<img src={Login_Icon} alt="login icon" />
			</figure>

			<div className="flex flex-col items-center gap-y-6">
				<Logo />
				<div className="prose prose-h1:font-montserrat prose-p:font-droid-sans space-y-8 text-center">
					<h1 className=" mb-0 text-6xl font-bold text-stone-900">
						Welcome!
					</h1>
					<p className="text-lg font-medium leading-snug tracking-tight text-stone-800">
						Get your life organized. Start getting something done.
						Your future depends enormously on what you do now!
					</p>
					<div className="pt-8">
						<Link
							to="/login"
							className="btn w-full bg-violet-600 text-lg text-gray-100 shadow-lg
                            hover:bg-stone-800 hover:text-gray-200"
						>
							Sign In
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SplashScreen;
