import { useSelector } from 'react-redux'
import { Card, CardContent, Typography } from '@mui/material'
import {
  ResponsiveContainer, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts'

export default function OrdersChart() {
  const { monthlyRevenue } = useSelector(state => state.dashboard)

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>Orders per Month</Typography>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyRevenue} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
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
            />
            <Tooltip formatter={(val) => [val, 'Orders']} />
            <Bar
              dataKey="orders"
              fill="#6366f1"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>

      </CardContent>
    </Card>
  )
}