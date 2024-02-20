'use client';

import React from 'react';
import Provider from './redux-provider';
import { store } from '@/redux/store/store';

const Providers = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default Providers;
