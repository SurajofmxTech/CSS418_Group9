Course Registration Portal

Welcome to the Course Registration Portal! This repository contains the source code for the web application designed to facilitate course registration for students.

### Features
- **User Authentication**: Secure login and registration system for students.
- **Course Registration**: Allows students to register for courses based on their department, level, and semester.
- **Admin Panel**: Provides administrators with the ability to manage courses, users, and permissions.

### Prerequisites
- Web server (e.g., Apache, Nginx) with PHP support
- MySQL database server
- PHP version 7.0 or higher
- Composer (for managing PHP dependencies)

### Installation
1. Clone the repository to your local machine:
   git clone https://github.com/your_username/futminna-course-registration.git

2. Navigate to the project directory:
   cd futminna-course-registration

3. Install PHP dependencies using Composer:
   composer install

4. Import the SQL database schema:
   - Use the provided SQL dump file (`database.sql`) to create the necessary tables in your MySQL database.

5. Configure the database connection:
   - Update the database configuration settings in the `.env` file with your MySQL database credentials.

6. Set up your web server:
   - Configure your web server to serve the `public` directory as the document root.
   - Ensure that PHP is configured correctly to handle web requests.

### Usage
1. Access the application through your web browser.
   - Navigate to `http://localhost/home.html` (replace `localhost` with your server hostname or IP address).

2. Log using your credentials.
   - student will have access to different functionalities.

3. Explore the various features of the application, such as course registration, user management, and administrative tasks.

### Contributors
- Suraj Gimba
- Group 9 members

### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Support
For support or inquiries, please contact us at surajgimba03@gmail.com.

Thank you for using the Course Registration Portal! We hope you find it helpful for managing course registrations efficiently.
