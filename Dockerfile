FROM node:10.24.1

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./


# Install dependencies and update caniuse-lite
RUN npm install && \
    npm update caniuse-lite browserslist

# Copy the rest of the application
COPY . .

# # Ensure image files are in the correct location with correct case
# RUN mkdir -p src/_media/images && \
#     cp -f src/_media/images/logo.png src/_media/images/logo.png && \
#     cp -f src/_media/images/landingFXForm.png src/_media/images/landingFXForm.png

# Build the application
RUN npm run build

EXPOSE 3000
EXPOSE 8080

# Start the application
CMD ["npm", "run", "start"]