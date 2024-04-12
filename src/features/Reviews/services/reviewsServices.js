import { REVIEW_URL } from 'constants';

import AxiosInstance from 'app/api';

export const getReviews = () => AxiosInstance.get(REVIEW_URL);