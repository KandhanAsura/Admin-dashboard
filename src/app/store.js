//Redux store lives here 
import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../features/dashboard/dashboardSlice';
import usersReducer from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    // Add your reducers here
    dashboard: dashboardReducer,
    users: usersReducer,
  },
});