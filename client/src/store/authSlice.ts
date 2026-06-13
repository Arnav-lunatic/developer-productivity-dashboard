import { createSlice } from "@reduxjs/toolkit";

interface User {
	_id: string;
	name: string;
	email: string;
	avatar: string;
}

interface AuthState {
	data: User | null;
	loading: boolean;
}

const initialState: AuthState = {
	data: null,
	loading: true,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUserData: (state, action) => {
			state.data = action.payload;
			state.loading = false;
		},

		clearUserData: (state) => {
			state.data = null;
			state.loading = false;
		},

		setLoading: (state, action) => {
			state.loading = action.payload;
		},
	},
});

export const { setUserData, clearUserData, setLoading } = authSlice.actions;

export default authSlice.reducer;
