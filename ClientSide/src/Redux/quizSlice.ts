import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { REACT_APP_SERVER_URL } from '../env';
import axios from 'axios';

export const getQuizzes = createAsyncThunk('quiz/get-all', async (_args) => {
    try {
        const data = await axios.get(`${REACT_APP_SERVER_URL}/quiz`);
        console.log(data.data);
        return data.data;
    } catch (err) {
        return err;
    }
});

const QuizSlice = createSlice({
    name: 'quiz',
    initialState: {
        allQuizzes: null,
        loading: true,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getQuizzes.fulfilled, (state, action) => {
            state.loading = false;
            state.allQuizzes = action.payload;
        });
    },
});

export default QuizSlice.reducer;
