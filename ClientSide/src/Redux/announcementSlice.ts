import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { REACT_APP_SERVER_URL } from '../env';
import axios from 'axios';

export const getAnnouncements = createAsyncThunk(
    'announcement/get-all',
    async (_args) => {
        try {
            const data = await axios.get(`${REACT_APP_SERVER_URL}/announce`);
            console.log(REACT_APP_SERVER_URL);
            return data.data;
        } catch (err) {
            return err;
        }
    },
);

const AnnouncementSlice = createSlice({
    name: 'announcement',
    initialState: {
        allAnnouncements: null,
        loading: true,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAnnouncements.fulfilled, (state, action) => {
            state.loading = false;
            state.allAnnouncements = action.payload;
        });
    },
});

export default AnnouncementSlice.reducer;
