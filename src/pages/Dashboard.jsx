import { useSelector } from 'react-redux'
import { Grid, Typography, Box } from '@mui/material'
import StatCard from '../components/StatCard'
import RevenueChart from '../components/charts/RevenueChart'
import OrdersChart from '../components/charts/OrdersChart'

export default function Dashboard() {
  const { stats } = useSelector(state => state.dashboard)

  const cards = [
    {
      title:  'Total Revenue',
      value:  stats.revenue,
      prefix: '₹',
      suffix: '',
      trend:  14.5,
      color:  '#6366f1',
    },
    {
      title:  'Total Users',
      value:  stats.users,
      prefix: '',
      suffix: '',
      trend:  8.2,
      color:  '#06b6d4',
    },
    {
      title:  'Total Orders',
      value:  stats.orders,
      prefix: '',
      suffix: '',
      trend:  -3.1,
      color:  '#f59e0b',
    },
    {
      title:  'Growth Rate',
      value:  stats.growth,
      prefix: '',
      suffix: '%',
      trend:  2.4,
      color:  '#10b981',
    },
  ]

  return (
    <Box>
      {/* Page title */}
      <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
        Dashboard Overview
      </Typography>

      {/* Stat cards row */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {cards.map(card => (
          <Grid item xs={12} sm={6} lg={3} key={card.title}>
            <StatCard {...card} />
          </Grid>
        ))}
      </Grid>

      {/* Charts row */}
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <RevenueChart />
        </Grid>
        <Grid item xs={12} lg={4}>
          <OrdersChart />
        </Grid>
      </Grid>
    </Box>
  )
}