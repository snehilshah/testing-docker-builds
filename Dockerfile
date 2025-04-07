FROM oven/bun:latest

RUN mkdir /app
WORKDIR /app

ENV PUPPETEER_CACHE_DIR="/app/puppeteer-cache"
RUN mkdir -p $PUPPETEER_CACHE_DIR && chmod -R 777 $PUPPETEER_CACHE_DIR

COPY package.json bun.lock tsconfig.json ./
RUN bun install --frozen-lockfile
RUN bunx @puppeteer/browsers install chrome@stable --path /app/puppeteer-cache

COPY src/ src/

CMD ["bun", "src/main.ts"]