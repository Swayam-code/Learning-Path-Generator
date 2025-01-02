#!/bin/bash

# Initialize Next.js project
npm install

# Install additional dependencies
npm install @heroicons/react

# Create a .gitignore file
echo "node_modules
.next
.env
.env.local
.DS_Store" > .gitignore

# Initialize git repository
git init
git add .
git commit -m "Initial commit: Learning Path Generator setup"
