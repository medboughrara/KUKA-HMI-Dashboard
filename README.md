# KUKA HMI Dashboard

A modern web-based Human Machine Interface (HMI) dashboard built with Next.js, TypeScript, and Tailwind CSS for KUKA robotics systems.

## Live Demo

Visit the live demo at: still working on

## Detailed Installation Guide

### System Requirements

1. **Node.js Installation**
   - Download and install Node.js v18 or higher from [Node.js official website](https://nodejs.org/)
   - Verify installation:
     ```powershell
     node --version
     ```

2. **PNPM Installation**
   - Install pnpm globally using PowerShell:
     ```powershell
     iwr https://get.pnpm.io/install.ps1 -useb | iex
     ```
   - Verify installation:
     ```powershell
     pnpm --version
     ```

3. **Git Installation**
   - Download and install Git from [Git official website](https://git-scm.com/)
   - Verify installation:
     ```powershell
     git --version
     ```

### Project Setup

1. **Clone the Repository**
   ```powershell
   git clone https://github.com/medboughrara/KUKA-HMI-Dashboard.git
   cd KUKA-HMI-Dashboard
   ```

2. **Install Dependencies**
   ```powershell
   pnpm install
   ```

3. **Development Server**
   - Start the development server:
     ```powershell
     pnpm dev
     ```
   - Open [http://localhost:3000](http://localhost:3000) in your browser

4. **Production Build**
   ```powershell
   pnpm build
   pnpm start
   ```

### Environment Setup (Optional)

Create a `.env.local` file in the root directory if you need to customize any environment variables:
```env
NEXT_PUBLIC_BASE_PATH=/KUKA-HMI-Dashboard
```

## Features Guide

### 1. Camera Monitoring
- Access via: `/camera` route
- Features:
  - Real-time camera feed monitoring
  - Multiple camera view support
  - Camera control interface

### 2. Conveyor Control
- Access via: `/conveyors` route
- Features:
  - Live conveyor status monitoring
  - Speed control interface
  - Emergency stop functionality

### 3. Statistics Dashboard
- Access via: `/statistics` route
- Features:
  - Real-time performance metrics
  - Historical data visualization
  - Custom reporting tools

### 4. Process Flow
- Access via: `/process-flow` route
- Features:
  - Visual process flow diagrams
  - Real-time status updates
  - Process control interface

## Project Structure Explained

```plaintext
├── app/                    # Next.js 13+ app directory
│   ├── camera/            # Camera monitoring feature
│   ├── conveyors/         # Conveyor control system
│   ├── statistics/        # Statistics and analytics
│   └── process-flow/      # Process flow visualization
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   └── theme-provider.tsx # Theme configuration
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/               # Static assets
└── styles/               # Global styles
```

## Development Guide

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Create production build
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint for code quality

### Code Style

This project uses:
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- shadcn/ui for consistent UI components

### Adding New Features

1. Create new components in `components/`
2. Add new pages in `app/`
3. Update types as needed
4. Test thoroughly before committing

## Troubleshooting

### Common Issues

1. **Port 3000 Already in Use**
   ```powershell
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```

2. **Dependencies Issues**
   ```powershell
   rm -r -force node_modules
   rm pnpm-lock.yaml
   pnpm install
   ```

3. **Build Errors**
   - Clear Next.js cache:
     ```powershell
     rm -r -force .next
     pnpm build
     ```

## Contributing

1. Fork the repository
2. Create your feature branch:
   ```powershell
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```powershell
   git commit -m "Add: your feature description"
   ```
4. Push to the branch:
   ```powershell
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository.
