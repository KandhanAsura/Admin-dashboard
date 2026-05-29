// SideBar + AppBar wrapper
import { useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import {
  Box, Drawer, AppBar, Toolbar, Typography,
  IconButton, List, ListItem, ListItemButton,
  ListItemIcon, ListItemText, Divider,
  Tooltip, Avatar, useTheme, useMediaQuery
} from '@mui/material'
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Brightness4, Brightness7,
  ChevronLeft,
  AdminPanelSettings
} from '@mui/icons-material'

const DRAWER_WIDTH = 240

const navItems = [
  { label: 'Dashboard', path: '/',      icon: <DashboardIcon /> },
  { label: 'Users',     path: '/users', icon: <PeopleIcon /> },
]

export default function Layout({ toggleTheme, mode }) {
  const [open, setOpen] = useState(true)
  const navigate   = useNavigate()
  const location   = useLocation()
  const theme      = useTheme()
  const isMobile   = useMediaQuery(theme.breakpoints.down('md'))

  // Auto-close on mobile
  const drawerOpen = isMobile ? !open : open

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>

      {/* ── TOP APP BAR ── */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          borderBottom: `1px solid ${theme.palette.divider}`,
          bgcolor: 'background.paper',
          color: 'text.primary',
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={() => setOpen(prev => !prev)}
            sx={{ mr: 2 }}
          >
            {open ? <ChevronLeft /> : <MenuIcon />}
          </IconButton>

          <AdminPanelSettings sx={{ color: 'primary.main', mr: 1 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            AdminPro
          </Typography>

          {/* Dark / Light toggle */}
          <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
            <IconButton onClick={toggleTheme}>
              {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
            </IconButton>
          </Tooltip>

          {/* User avatar */}
          <Avatar
            sx={{ ml: 1, bgcolor: 'primary.main', width: 34, height: 34, fontSize: 14 }}
          >
            A
          </Avatar>
        </Toolbar>
      </AppBar>

      {/* ── SIDEBAR DRAWER ── */}
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={drawerOpen}
        onClose={() => setOpen(false)}
        sx={{
          width: drawerOpen ? DRAWER_WIDTH : 64,
          flexShrink: 0,
          transition: 'width 0.2s',
          '& .MuiDrawer-paper': {
            width: drawerOpen ? DRAWER_WIDTH : 64,
            transition: 'width 0.2s',
            overflowX: 'hidden',
            boxSizing: 'border-box',
            borderRight: `1px solid ${theme.palette.divider}`,
            bgcolor: 'background.paper',
          },
        }}
      >
        {/* Spacer so items don't go under AppBar */}
        <Toolbar />

        <Divider />

        <List sx={{ mt: 1 }}>
          {navItems.map(item => {
            const isActive = location.pathname === item.path

            return (
              <ListItem key={item.path} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  onClick={() => navigate(item.path)}
                  sx={{
                    mx: 1,
                    borderRadius: 2,
                    bgcolor: isActive ? 'primary.main' : 'transparent',
                    color:   isActive ? 'white' : 'text.primary',
                    '&:hover': {
                      bgcolor: isActive ? 'primary.dark' : 'action.hover',
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{ color: isActive ? 'white' : 'text.secondary', minWidth: 40 }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {drawerOpen && (
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: isActive ? 600 : 400 }}
                    />
                  )}
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </Drawer>

      {/* ── MAIN CONTENT AREA ── */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8, // push down below AppBar
          bgcolor: 'background.default',
          minHeight: '100vh',
          transition: 'margin 0.2s',
        }}
      >
        <Outlet />
        {/* ↑ This is where Dashboard.jsx and Users.jsx render */}
      </Box>

    </Box>
  )
}