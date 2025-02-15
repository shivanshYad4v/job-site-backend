# Job Site - Full Stack Application

## Overview
A simple job listing application using:
- **Frontend**: React.js
- **Backend**: Spring Boot with JPA
- **Database**: PostgreSQL

## Setup
### Backend:
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/job-site-backend.git
   cd job-site-backend/spring-boot-rest
   ```
2. Configure `application.properties`:
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/jobsite_db
   spring.datasource.username=your_db_user
   spring.datasource.password=your_db_password
   ```
3. Build and run:
   ```sh
   mvn spring-boot:run
   ```

### Frontend:
1. Navigate to the frontend folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies and start:
   ```sh
   npm install
   npm start
   ```

## API Endpoints
| Method | Endpoint     | Description  |
|--------|-------------|--------------|
| GET    | /api/jobs   | Get all jobs |
| POST   | /api/jobs   | Create a job |

## License
MIT License

