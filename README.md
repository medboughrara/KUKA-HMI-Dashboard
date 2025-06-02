# KUKA HMI Dashboard

A modern web-based Human Machine Interface (HMI) dashboard built with Next.js, TypeScript, and Tailwind CSS for KUKA robotics systems.

## Features

- 📸 **Camera Monitoring**: Real-time camera feed monitoring
- 🔄 **Conveyor Control**: Manage and monitor conveyor systems
- 📊 **Statistics**: Real-time performance metrics and analytics
- 🔍 **Process Flow**: Visual representation of manufacturing processes
- 🚀 **Modern UI**: Built with shadcn/ui components for a beautiful, responsive interface
- 📱 **Mobile Responsive**: Optimized for both desktop and mobile devices

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI Components
- [Recharts](https://recharts.org/) - Data Visualization
- [React Hook Form](https://react-hook-form.com/) - Form Handling

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd kuka-hmi
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - Reusable UI components
- `/hooks` - Custom React hooks
- `/lib` - Utility functions and shared logic
- `/public` - Static assets
- `/styles` - Global styles and Tailwind configurations

## Features Overview

### Camera Monitoring
- Real-time camera feed integration
- Multiple camera view support
- Camera control interface

### Conveyor Control
- Conveyor status monitoring
- Speed control
- Emergency stop functionality

### Statistics
- Real-time performance metrics
- Historical data visualization
- Custom reporting tools

### Process Flow
- Visual process flow diagrams
- Real-time status updates
- Process control interface

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Next.js](https://nextjs.org/) team for the amazing framework
- KUKA Robotics for inspiration
