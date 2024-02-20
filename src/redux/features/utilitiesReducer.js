'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAddress: false,
};

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setIsAddress: (state, { payload }) => {
			state.isAddress = payload;
		},
	},
	extraReducers: (builder) => {},
});

export const { setIsAddress } = modalSlice.actions;

export default modalSlice.reducer;
