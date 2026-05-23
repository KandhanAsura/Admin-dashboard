import { createSlice } from '@reduxjs/toolkit'
import salesData from '../../data/salesData.json'

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    stats: salesData.stats,
    monthlyRevenue: salesData.monthlyRevenue,
    chartType: 'revenue', // 'revenue' or 'orders'
  },
  reducers: {
    setChartType: (state, action) => {
      state.chartType = action.payload
    },
  },
})

export const { setChartType } = dashboardSlice.actions
export default dashboardSlice.reducer