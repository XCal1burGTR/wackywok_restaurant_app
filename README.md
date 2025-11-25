# WackyWok Restaurant Website 🍜

A modern, responsive food ordering website for **WackyWok**, an Indian-Chinese fusion restaurant. Built with React and Vite, this application offers a seamless user experience for browsing menus, managing carts, and placing orders.

## ✨ Features

- **📱 Fully Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- **🍽️ Dynamic Menu**: Browse items by categories (Starters, Main Course, Rice/Noodles, etc.).
- **🛒 Smart Cart**: Add/remove items, adjust quantities, and see real-time totals. Persists data using LocalStorage.
- **🚚 Flexible Checkout**: Choose between **Delivery** or **Takeaway**.
  - Conditional address fields based on order type.
  - Custom success messages (e.g., "Arriving in 40 mins" vs "Ready in 30 mins").
- **👤 User Profile**:
  - View personal details.
  - Manage saved addresses and payment cards.
  - **Order History**: Track past orders with status updates.
- **🎨 Elegant UI**: Custom CSS styling with a premium, appetizing color palette.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS (Custom Design System)

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/wackywok-website.git
   cd wackywok-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Navigate to `http://localhost:5173` to view the app.

## 📂 Project Structure

```
src/
├── components/     # Reusable UI components (Navbar, Footer, etc.)
├── context/        # React Context for global state (Cart, Orders)
├── data/           # Mock data for menu items
├── pages/          # Main page components (Home, Menu, Cart, Checkout, User)
├── App.jsx         # Main application component & Routing
├── index.css       # Global styles and variables
└── main.jsx        # Entry point
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
