import './styles.scss';


const Spinner = ({ width, height }) =>  (
		<div
			className='spinner'
			style={{
				width: `${width}`,
				height: `${height}`,
			}}
		/>
	);


export default Spinner;