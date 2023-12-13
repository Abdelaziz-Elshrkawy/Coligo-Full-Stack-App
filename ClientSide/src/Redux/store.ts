import { configureStore } from '@reduxjs/toolkit';
import announcement from './announcementSlice';
import quiz from './quizSlice';
const store = configureStore({
    reducer: {
        announcement,
        quiz,
    },
});
export default store;
export type Store = ReturnType<typeof store.getState>;
export type Dispatcher = typeof store.dispatch;
