# Learning Path Generator - Daytona Sample

A modern web application built with Next.js that helps users create and manage personalized learning paths. This project demonstrates how to set up a Next.js application with TypeScript, Tailwind CSS, and modern development practices using Daytona.

## 🚀 Features

- **Personalized Learning Paths**: Create and manage custom learning paths across various tech domains
- **Interactive Dashboard**: Track your progress and achievements
- **Modern UI**: Built with Tailwind CSS for a beautiful, responsive design
- **Category-based Learning**: Organized paths for Web Development, Machine Learning, Mobile Development, and more
- **Daytona Integration**: One-click development environment setup

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with App Router, React, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks and Context
- **Development Environment**: Daytona with Dev Containers

## 📋 Prerequisites

- [Daytona](https://www.daytona.io/) installed on your machine
  ```bash
  # Install Daytona CLI
  curl -L https://install.daytona.io | bash
  ```
- [Docker](https://www.docker.com/) installed and running
- [Git](https://git-scm.com/) for version control

## 🏃‍♂️ Quick Start with Daytona

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/learning-path-generator.git
   cd learning-path-generator
   ```

2. Start the development environment with Daytona:
   ```bash
   daytona create
   ```

3. Wait for Daytona to set up your development environment:
   - It will automatically:
     - Build the dev container
     - Install Node.js and npm
     - Install project dependencies
     - Configure VS Code extensions
     - Start the development server

4. Once setup is complete, Daytona will:
   - Open VS Code with all extensions installed
   - Forward port 3000 for the Next.js development server
   - Run `npm run dev` automatically

5. Open your browser and navigate to `http://localhost:3000`

## 🔧 Development Container Features

- **Base Image**: TypeScript Node.js 20 on Debian Bullseye
- **Included Tools**:
  - Node.js 20
  - Git
  - GitHub CLI
- **VS Code Extensions**:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript support
  - React/Next.js snippets
  - Path Intellisense
  - GitLens
- **Automated Setup**:
  - Automatic port forwarding
  - Dependency installation
  - Development server startup

## 📝 Daytona Configuration

The project includes two main Daytona configuration files:

### `.daytona/config.yaml`
- Defines the workspace configuration
- Sets resource requirements (8GB RAM, 4 CPUs)
- Configures port forwarding
- Specifies IDE settings and extensions

### `.daytona/workspace.yaml`
- Defines workspace initialization tasks
- Configures VS Code extensions
- Sets up development commands

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to the Daytona team for making development environment setup a breeze
- Next.js team for the amazing framework
- Tailwind CSS team for the utility-first CSS framework

---

Built with ❤️ using [Daytona](https://www.daytona.io/)
