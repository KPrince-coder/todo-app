import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Logo from '../components/Logo';

const LogIn = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = async e => {
		e.preventDefault();
	};

	const togglePasswordVisibility = () => setShowPassword(prev => !prev);

	return (
		<section
			className="flex h-screen max-h-screen w-screen items-center justify-center overflow-y-auto bg-slate-900"
			style={{
				background:
					'radial-gradient(circle at 50% 50%, rgba(255,255,255,1) 0%, rgba(137,86,184,1) 100%)',
			}}
		>
			<div className="flex w-11/12 max-w-[36.25rem] flex-col items-center rounded-md bg-violet-200 px-5 pb-6 pt-10 shadow-xl">
				<Logo />
				<h1 className="mb-14 mt-6 font-montserrat text-5xl font-bold text-stone-800">
					Log In
				</h1>
				<form
					onSubmit={handleSubmit}
					className="flex w-full flex-col gap-6 rounded-md bg-slate-100 px-5 py-6 text-stone-700 shadow-lg"
				>
					<div>
						<label htmlFor="username" className="block text-lg">
							UserName
						</label>
						<input
							type="text"
							name="username"
							id="username"
							minLength="5"
							required
							autoComplete
							placeholder="John Doe"
							value={userName}
							onChange={e => setUserName(e.target.value)}
						/>
					</div>
					<div className="relative">
						<label htmlFor="password" className="block text-lg">
							Password
						</label>
						<input
							type={showPassword ? 'text' : 'password'}
							name="password"
							id="password"
							required
							placeholder="password"
							value={password}
							onChange={e => setPassword(e.target.value)}
							className="pr-12"
						/>
						<button
							type="button"
							title={
								showPassword ? 'hide password' : 'show password'
							}
							className="absolute right-4 top-[43px] z-50"
							onClick={togglePasswordVisibility}
						>
							{showPassword ? <FaEye /> : <FaEyeSlash />}
						</button>
					</div>

					<button type="submit" className="button">
						Log In
					</button>
				</form>
			</div>
		</section>
	);
};

export default LogIn;
