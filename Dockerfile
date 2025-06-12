# Base stage for shared dependencies
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./

# Development stage
FROM base AS builder
RUN npm install
COPY . .

# Production build stage
FROM builder AS runner
RUN npm run build

# Production runtime stage
FROM base AS production
ENV NODE_ENV production
COPY --from=runner /app/.next ./.next
COPY --from=runner /app/public ./public
COPY --from=runner /app/package.json ./package.json

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["npm", "start"] 