#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Setting up Learning Path Generator development environment...${NC}"

# Install dependencies
echo -e "${GREEN}📦 Installing dependencies...${NC}"
npm install

# Build the project
echo -e "${GREEN}🔨 Building the project...${NC}"
npm run build

# Setup git hooks
echo -e "${GREEN}🔧 Setting up git hooks...${NC}"
npx husky install || true

# Create environment file if it doesn't exist
if [ ! -f .env.local ]; then
    echo -e "${GREEN}📝 Creating .env.local file...${NC}"
    cp .env.example .env.local || echo "No .env.example file found, skipping..."
fi

# Start development server
echo -e "${GREEN}🌟 Starting development server...${NC}"
echo -e "${BLUE}🔥 Your app will be available at http://localhost:3000${NC}"
npm run dev
