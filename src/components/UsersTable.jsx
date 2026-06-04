import { useSelector, useDispatch } from 'react-redux'
import {
  setSearchQuery,
  setStatusFilter,
  setPage
} from '../features/users/usersSlice'
import {
  Box, Card, CardContent, Typography,
  TextField, ToggleButton, ToggleButtonGroup,
  Avatar, Chip, InputAdornment,
  Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow,
  TablePagination, Tooltip
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

// ── helper: turn a name into initials for the avatar ──
function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase()
}

// ── helper: pick avatar background by first letter ──
function getAvatarColor(name) {
  const colors = ['#6366f1','#06b6d4','#f59e0b','#10b981','#ef4444','#8b5cf6']
  return colors[name.charCodeAt(0) % colors.length]
}

export default function UsersTable() {
  const dispatch = useDispatch()
  const { list, searchQuery, statusFilter, page, pageSize } = useSelector(
    state => state.users
  )

  // ── 1. Filter by status ──
  const afterStatusFilter = statusFilter === 'All'
    ? list
    : list.filter(u => u.status === statusFilter)

  // ── 2. Filter by search query (name or email) ──
  const filtered = afterStatusFilter.filter(u =>
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // ── 3. Paginate ──
  const paginated = filtered.slice(page * pageSize, page * pageSize + pageSize)

  return (
    <Card>
      <CardContent>

        {/* ── Page title + total count ── */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
          <Typography variant="h6" fontWeight={700}>
            Users
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {filtered.length} of {list.length} users
          </Typography>
        </Box>

        {/* ── Search + Status filter row ── */}
        <Box sx={{ display: 'flex', gap: 2, mb: 2.5, flexWrap: 'wrap' }}>

          {/* Search box */}
          <TextField
            size="small"
            placeholder="Search name or email..."
            value={searchQuery}
            onChange={e => dispatch(setSearchQuery(e.target.value))}
            sx={{ flex: 1, minWidth: 200 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                </InputAdornment>
              )
            }}
          />

          {/* Status filter */}
          <ToggleButtonGroup
            value={statusFilter}
            exclusive
            size="small"
            onChange={(_, val) => val && dispatch(setStatusFilter(val))}
          >
            <ToggleButton value="All">All</ToggleButton>
            <ToggleButton value="Active">Active</ToggleButton>
            <ToggleButton value="Inactive">Inactive</ToggleButton>
          </ToggleButtonGroup>

        </Box>

        {/* ── The table ── */}
        <TableContainer>
          <Table size="small">

            <TableHead>
              <TableRow>
                {['User', 'Role', 'Status', 'Joined', 'Orders'].map(col => (
                  <TableCell
                    key={col}
                    sx={{ fontWeight: 600, color: 'text.secondary', fontSize: 12 }}
                  >
                    {col}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {paginated.length === 0 ? (

                // ── Empty state ──
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ py: 6, color: 'text.secondary' }}>
                    No users found for "{searchQuery}"
                  </TableCell>
                </TableRow>

              ) : paginated.map(user => (
                <TableRow
                  key={user.id}
                  hover
                  sx={{ '&:last-child td': { border: 0 } }}
                >

                  {/* Avatar + name + email */}
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Avatar
                        sx={{
                          width: 36,
                          height: 36,
                          fontSize: 13,
                          fontWeight: 600,
                          bgcolor: getAvatarColor(user.name)
                        }}
                      >
                        {getInitials(user.name)}
                      </Avatar>
                      <Box>
                        <Typography variant="body2" fontWeight={500}>
                          {user.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {user.email}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  {/* Role */}
                  <TableCell>
                    <Typography variant="body2">{user.role}</Typography>
                  </TableCell>

                  {/* Status badge */}
                  <TableCell>
                    <Chip
                      label={user.status}
                      size="small"
                      sx={{
                        fontWeight: 600,
                        fontSize: 11,
                        bgcolor: user.status === 'Active' ? '#dcfce7' : '#f1f5f9',
                        color:   user.status === 'Active' ? '#16a34a' : '#64748b',
                      }}
                    />
                  </TableCell>

                  {/* Joined date */}
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {new Date(user.joined).toLocaleDateString('en-IN', {
                        day: 'numeric', month: 'short', year: 'numeric'
                      })}
                    </Typography>
                  </TableCell>

                  {/* Orders count */}
                  <TableCell>
                    <Tooltip title={`${user.orders} orders placed`}>
                      <Typography variant="body2" fontWeight={600}>
                        {user.orders}
                      </Typography>
                    </Tooltip>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>

          </Table>
        </TableContainer>

        {/* ── Pagination ── */}
        <TablePagination
          component="div"
          count={filtered.length}
          page={page}
          rowsPerPage={pageSize}
          rowsPerPageOptions={[5]}
          onPageChange={(_, newPage) => dispatch(setPage(newPage))}
        />

      </CardContent>
    </Card>
  )
}