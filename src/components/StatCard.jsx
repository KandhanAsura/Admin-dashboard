// The 4 number cards
import { Card, CardContent, Typography, Box, Chip } from '@mui/material'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'

export default function StatCard({ title, value, prefix, suffix, trend, color }) {
  const isPositive = trend >= 0

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>

        {/* Title */}
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight={500}
          gutterBottom
        >
          {title}
        </Typography>

        {/* Main value */}
        <Typography variant="h4" fontWeight={700} sx={{ my: 1 }}>
          {prefix}{typeof value === 'number' ? value.toLocaleString() : value}{suffix}
        </Typography>

        {/* Trend badge */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Chip
            size="small"
            icon={isPositive ? <TrendingUpIcon /> : <TrendingDownIcon />}
            label={`${isPositive ? '+' : ''}${trend}%`}
            sx={{
              bgcolor: isPositive ? '#dcfce7' : '#fee2e2',
              color:   isPositive ? '#16a34a' : '#dc2626',
              fontWeight: 600,
              '& .MuiChip-icon': {
                color: isPositive ? '#16a34a' : '#dc2626',
              }
            }}
          />
          <Typography variant="caption" color="text.secondary">
            vs last month
          </Typography>
        </Box>

        {/* Color accent bar at bottom */}
        <Box
          sx={{
            mt: 2,
            height: 4,
            borderRadius: 2,
            bgcolor: color,
            opacity: 0.7
          }}
        />

      </CardContent>
    </Card>
  )
}