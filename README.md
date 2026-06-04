# 📊 Admin Dashboard

A fully responsive Admin Dashboard built with **React**, **Redux Toolkit**, and **Material UI** — designed to demonstrate real-world frontend development skills.

---

## 🔗 Links

- 🌐 **Live Demo:** Coming soon
- 💻 **Source Code:** [GitHub Repository](https://github.com/your-username/admin-dashboard)

---

## 📸 Preview

![Admin Dashboard Preview](./preview.png)

---

## ✨ Features

- 📈 Revenue & orders charts with interactive toggle
- 👥 Users table with live search, filter & pagination
- 🌙 Dark / Light mode toggle
- 📱 Fully responsive — mobile, tablet & desktop
- ⚡ Global state management with Redux Toolkit
- 🎨 Clean, modern UI with Material UI v5

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI component library |
| **Redux Toolkit** | Global state management |
| **Material UI v5** | Component library & theming |
| **Recharts** | Data visualization & charts |
| **React Router v6** | Client-side navigation |
| **Vite** | Fast build tool |
| **JSON** | Mock data source |

---

## 📁 Project Structure

```
src/
├── app/
│   └── store.js              # Redux store configuration
├── features/
│   ├── dashboard/
│   │   └── dashboardSlice.js # Dashboard state & actions
│   └── users/
│       └── usersSlice.js     # Users state & actions
├── components/
│   ├── Layout.jsx            # Sidebar + AppBar shell
│   ├── StatCard.jsx          # Reusable stat card
│   ├── UsersTable.jsx        # Table with search & filter
│   └── charts/
│       ├── RevenueChart.jsx  # Line chart
│       └── OrdersChart.jsx   # Bar chart
├── pages/
│   ├── Dashboard.jsx         # Dashboard page
│   └── Users.jsx             # Users page
├── data/
│   ├── salesData.json        # Mock sales & revenue data
│   └── usersData.json        # Mock users data
└── theme/
    └── theme.js              # MUI custom theme
```

---

## 🚀 Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/your-username/admin-dashboard.git

# 2. Go into the project folder
cd admin-dashboard

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 💡 Key Concepts Demonstrated

- **Redux Toolkit** — `createSlice`, `configureStore`, `useSelector`, `useDispatch`
- **Component reusability** — `StatCard` accepts props and renders differently each time
- **Derived state pattern** — filtering and pagination computed inside component, not stored in Redux
- **MUI theming** — custom theme with dark/light mode using `ThemeProvider`
- **Responsive layout** — MUI Grid with `xs`, `sm`, `lg` breakpoints
- **React Router v6** — nested routes with `<Outlet />` for shared layout

---

> ⭐ If you found this project helpful, consider giving it a star!