import { PRODUCT_URL } from 'constants';

import AxiosInstance from 'app/api';

export const getProducts = params => AxiosInstance.get(PRODUCT_URL, { params });