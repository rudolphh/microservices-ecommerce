#!/bin/bash
echo "Stopping and removing containers..."
docker compose down

echo "Building images..."
docker compose build

echo "Starting containers..."
docker compose up -d

echo "Done!"
