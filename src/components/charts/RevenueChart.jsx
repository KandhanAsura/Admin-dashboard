import { useSelector, useDispatch } from 'react-redux'
import { setChartType } from '../../features/dashboard/dashboardSlice'
import {
  Card, CardContent, Typography,
  Box, ToggleButton, ToggleButtonGroup
} from '@mui/material'
import {
  ResponsiveContainer, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts'

export default function RevenueChart() {
  const dispatch    = useDispatch()
  const { monthlyRevenue, chartType } = useSelector(state => state.dashboard)

  return (
    <Card>
      <CardContent>

        {/* Header row */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Monthly Overview</Typography>

          {/* Toggle — Revenue vs Orders */}
          <ToggleButtonGroup
            value={chartType}
            exclusive
            size="small"
            onChange={(_, val) => val && dispatch(setChartType(val))}
          >
            <ToggleButton value="revenue">Revenue</ToggleButton>
            <ToggleButton value="orders">Orders</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* The chart */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyRevenue} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={val =>
                chartType === 'revenue' ? `₹${(val/1000).toFixed(0)}k` : val
              }
            />
            <Tooltip
              formatter={(val) =>
                chartType === 'revenue' ? [`₹${val.toLocaleString()}`, 'Revenue'] : [val, 'Orders']
              }
            />
            <Legend />
            <Line
              type="monotone"
              dataKey={chartType}
              stroke="#6366f1"
              strokeWidth={2.5}
              dot={{ r: 4, fill: '#6366f1' }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>

      </CardContent>
    </Card>
  )
}