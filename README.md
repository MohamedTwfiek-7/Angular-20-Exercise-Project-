# Angular Modern Web Application

A comprehensive web application built with **Angular 20** featuring authentication, product management, customer management, and modern UI components.

## 🚀 Features

- **Modern Authentication System** - Login/Register with JWT
- **Product Management** - Full CRUD operations with data table
- **Customer Management** - Customer dashboard with search and filtering
- **Responsive Design** - Mobile-first approach using Angular Material
- **Professional UI** - Clean, modern interface with gradient designs
- **Form Validation** - Reactive forms with comprehensive validation
- **Data Visualization** - Statistics and metrics dashboards

## 🛠️ Technology Stack

- **Angular 19** - Latest Angular framework with standalone components
- **TypeScript** - Fully typed application
- **Angular Material** - Modern UI component library
- **RxJS** - Reactive programming for data handling
- **JSON Server** - Mock backend API
- **Angular Router** - Client-side routing with guards

## 📱 Application Sections

### 🏠 Home Dashboard
- Feature showcase with interactive cards
- Project statistics and metrics
- Recent updates timeline
- Professional hero section

### 👤 Authentication
- **Login Page** - Secure user authentication
- **Register Page** - User registration with validation
- **Route Guards** - Protected routes and authorization

### 📦 Product Management
- Product catalog with data table
- Add, edit, and delete products
- Status management (Active/Inactive)
- Responsive product grid

### 👥 Customer Management
- Customer dashboard with statistics
- Search and filter functionality
- Customer profile cards
- CRUD operations for customer data

### 📞 Contact & About
- **Contact Form** - Reactive form with validation
- **About Page** - Team and company information
- **FAQ Section** - Expandable question/answer panels

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd newStandalone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Start the mock API server** (in a separate terminal)
   ```bash
   npx json-server src/data/db.json
   ```

5. **Open your browser**
   Navigate to `http://localhost:4200/`

## 📋 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run watch` - Build in watch mode

## 🏗️ Project Structure

```
src/
├── app/
│   ├── common/           # Shared components
│   │   ├── about/        # About page
│   │   ├── contact/      # Contact form
│   │   ├── customer/     # Customer management
│   │   ├── login/        # Authentication
│   │   ├── register/     # User registration
│   │   ├── product/      # Product management
│   │   └── navbar/       # Navigation component
│   ├── home/             # Home dashboard
│   ├── Guard/            # Route guards
│   ├── models/           # TypeScript models
│   ├── services/         # Angular services
│   └── data/             # Mock data (JSON Server)
└── ...
```

## 🎨 UI Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Material Design** - Consistent UI using Angular Material
- **Gradient Themes** - Modern color schemes and styling
- **Interactive Elements** - Hover effects and smooth transitions
- **Form Validation** - Real-time validation with error messages
- **Data Tables** - Sortable and paginated data displays

## 🔐 Authentication Flow

1. **Login** - Users authenticate with username/password
2. **JWT Token** - Secure token-based authentication
3. **Route Guards** - Protected routes require authentication
4. **Auto-redirect** - Automatic navigation based on auth status

## 📊 Data Management

- **JSON Server** - Mock REST API for development
- **HTTP Interceptors** - Request/response handling
- **Error Handling** - Comprehensive error management
- **Loading States** - User feedback during operations

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Install Angular CLI globally: `npm install -g @angular/cli`
2. Add GitHub Pages deployment: `ng add angular-cli-ghpages`
3. Deploy: `ng deploy --base-href="/<repository-name>/"`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mohamed Twfiek**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- Angular Team for the amazing framework
- Angular Material for the UI components
- Community contributors and tutorials

---

**Built with ❤️ using Angular 19**
