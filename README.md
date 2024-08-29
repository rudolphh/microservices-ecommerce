# Microservices E-Commerce Platform

## Documentation

### Configuration

**Docker Setup**

1. **Docker Compose Configuration:**
   - **`docker-compose.yml`**: This file defines the services, networks, and volumes for your microservices. Ensure that this file is kept up-to-date with accurate details for each service.
   - **Environment Variables**: These are managed through `.env` files and control settings such as database credentials, ports, and other configuration parameters.

2. **Environment Variables:**
   - **Common Variables**: Defined in the root `.env` file for global settings.
   - **Service-Specific Variables**: Each microservice has its own `.env` file located in its respective directory. These files contain settings specific to that service, such as database names and credentials.

   Example of a service-specific environment variable setup:
   - **`POSTGRES_DB`**: The name of the database used by the service.
   - **`POSTGRES_USER`**: The username for accessing the database.
   - **`POSTGRES_PASSWORD`**: The password for accessing the database.
   - **`POSTGRES_PORT`**: The port on which the PostgreSQL database is exposed.

   Example `.env` file for the `user-service`:
   ```env
   POSTGRES_HOST_USER_SERVICE=user-service-db
   POSTGRES_DB_USER_SERVICE=user_db
   POSTGRES_USER_USER_SERVICE=user_service_user
   POSTGRES_PASSWORD_USER_SERVICE=user_service_pass
   POSTGRES_PORT_USER_SERVICE=5432

### Configuration Override

- **Root `.env` File**: Contains global environment variables and settings that apply across all services.
- **Service-Specific `.env` Files**: Located in each service’s directory, these files contain environment variables specific to that service. They can override or supplement settings defined in the root `.env` file.

### Development Workflow

1. **Building and Running Services:**
   - **Build**: To build all microservices and their dependencies, run:
     ```sh
     docker-compose build
     ```
   - **Run**: To start all services, use:
     ```sh
     docker-compose up
     ```
   - **Stopping Services**: To stop the services and remove containers, use:
     ```sh
     docker-compose down
     ```

2. **Testing Microservices:**
   - **Unit Tests**: Each microservice should have its own set of unit tests. Run these tests using the appropriate testing framework for your service. For example, if using Jest for a Node.js service:
     ```sh
     npm test
     ```
   - **Integration Tests**: Ensure integration tests are set up to verify interactions between services. Run these tests similarly to unit tests, but ensure they cover end-to-end workflows.

3. **Common Troubleshooting Steps:**
   - **Logs**: Check logs for errors or issues. Access logs for a specific service using:
     ```sh
     docker-compose logs <service-name>
     ```
   - **Service Health**: Verify that all services are running correctly by checking the container status with:
     ```sh
     docker-compose ps
     ```
   - **Database Connectivity**: If there are issues with database connectivity, ensure the database container is healthy and verify that all environment variables are correctly set.
