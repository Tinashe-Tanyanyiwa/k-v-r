FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a smaller image for production
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app ./

# Expose the application on port 4000
EXPOSE 4000

# Health check (optional)
HEALTHCHECK CMD curl --fail http://localhost:4000/_next/health || exit 1

# Start the Next.js application
CMD ["npm", "start", "--", "-H", "0.0.0.0", "-p", "4000"]
