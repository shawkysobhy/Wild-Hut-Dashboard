import { useUser } from './useUers';
import defaultUser from '../../assets/default-user.jpg';
const UserAvatar = () => {
	const { user } = useUser();
	const { fullName, avatar } = user.user_metadata;

	return (
		<div className='flex items-center gap-4 font-medium text-text'>
			<img
				src={avatar || defaultUser}
				alt={fullName}
				className='block border-2 rounded-full border-border-dark w-14 h-14'
			/>
			<span className='text-[1.4rem]'>{fullName}</span>
		</div>
	);
};

export default UserAvatar;
