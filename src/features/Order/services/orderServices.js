import { ORDER_URL } from 'constants';

import AxiosInstance from 'app/api';

export const postOrder = data => AxiosInstance.post(ORDER_URL, data);