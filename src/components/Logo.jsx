import { Logo_Icon } from '../assets';

const Logo = () => {
	return (
		<div className="">
			<p className="prose font-montserrat w-full text-3xl font-bold text-violet-600">
				<span className="text-stone-900">Task</span>Ninja
				<img src={Logo_Icon} className="my-0 -ml-1 inline-block h-12" />
			</p>
		</div>
	);
};

export default Logo;
