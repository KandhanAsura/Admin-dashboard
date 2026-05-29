import { createSlice } from '@reduxjs/toolkit'
import usersData from '../../data/usersData.json'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: usersData,
    searchQuery: '',
    statusFilter: 'All',  // 'All' | 'Active' | 'Inactive'
    page: 0,
    pageSize: 5,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
      state.page = 0 // reset to page 1 on new search
    },
    setStatusFilter: (state, action) => {
      state.statusFilter = action.payload
      state.page = 0
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
  },
})

export const { setSearchQuery, setStatusFilter, setPage } = usersSlice.actions
export default usersSlice.reducer