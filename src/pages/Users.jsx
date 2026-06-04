import { Box, Typography } from '@mui/material'
import UsersTable from '../components/UsersTable'

export default function Users() {
  return (
    <Box>
      <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
        User Management
      </Typography>
      <UsersTable />
    </Box>
  )
}