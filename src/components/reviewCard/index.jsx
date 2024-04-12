import './styles.scss'

const ReviewCard = ({review}) => (
    <div className='review-card' dangerouslySetInnerHTML={{ __html: review?.text}} />
  )
 

export default ReviewCard