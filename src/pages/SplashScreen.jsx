import { Link } from 'react-router-dom';
import { Login_Icon } from '../assets';
import Logo from '../components/Logo';

const SplashScreen = () => {
	return (
		<section
			className="flex w-screen justify-center"
			style={{
				background:
					'linear-gradient(355deg, rgba(241,214,255,1) 0%, rgba(241,214,255,1) 12%, rgba(152,101,179,1) 100%)',
			}}
		>
			<div
				className="flex min-h-screen max-w-md flex-col items-center justify-center gap-y-16 rounded-lg px-7 py-14 shadow-lg sm:min-h-full"
				style={{
					background:
						'radial-gradient(circle at 50% 50%, rgba(210,201,253,1) 0%, rgba(255,255,255,1) 50%, rgba(183,163,240,1) 100%)',
				}}
			>
				<figure>
					<img src={Login_Icon} alt="login icon" />
				</figure>

				<div className="flex flex-col items-center gap-y-6">
					<Logo />
					<div className="prose space-y-8 text-center prose-h1:font-montserrat prose-p:font-droid-sans">
						<h1 className=" mb-0 text-6xl font-bold text-stone-900">
							Welcome!
						</h1>
						<p className="text-lg font-medium leading-snug tracking-tight text-stone-800">
							Get your life organized. Start getting something
							done. Your future depends enormously on what you do
							now!
						</p>
						<div className="pt-8">
							<Link to="/login" className="button">
								Sign In
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SplashScreen;
