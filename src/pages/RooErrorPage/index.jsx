import { useRouteError } from 'react-router-dom';
import './styles.scss';

const RootErrorPage = () => {
	const error = useRouteError();

	let errorDetails;

	if (error instanceof Error) {
		errorDetails = error.message;
	}

	return (
		<div className='root-error'>
			<div>
                <p>Something went wrong!</p>
                <span>{errorDetails}</span>
            </div>
		</div>
	);
};

export default RootErrorPage;