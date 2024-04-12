import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonComponent = ({ 
	width = '100%',
    height = '100%',
    styles = {},
    className,
    ...rest
 }) => (
	<div style={{ ...styles }} className={className}>
		<Skeleton height={height} width={width} borderRadius={15} {...rest} />
	</div>
);

export default SkeletonComponent;