# EduSync

Welcome to **EduSync**! This project is a web-based platform designed to enhance the learning and management experience for students and teachers. It includes features like a Dashboard, Quiz System, Attendance Tracking, Assignments, and Study Materials Upload.

## Features

### Dashboard:
- View progress and statistics.
- Quick access to all features.

### Quiz System:
- Interactive quizzes with multiple-choice questions.
- Instant feedback on quiz results.

### Attendance Tracking:
- Track attendance records with dates and status.
- View attendance history in a table format.

### Assignments:
- Add and manage assignments with titles, descriptions, and due dates.
- Store assignment data in a MongoDB database.

### Study Materials Upload:
- Upload study materials (PDF, DOC, PPT, etc.).
- Files are stored in the `public/uploads` folder.

### Modern UI/UX:
- Clean and responsive design.
- Easy navigation and user-friendly interface.

## Technologies Used

### Front-End:
- HTML, CSS, JavaScript

### Back-End:
- Node.js, Express.js

### Database:
- MongoDB (for storing assignments and other data)

### File Upload:
- Multer (for handling file uploads)

### Styling:
- Custom CSS with modern design principles

## Setup Instructions

Follow these steps to set up the project on your local machine.

### Prerequisites
- **Node.js**: Make sure you have Node.js installed. [Download it here](https://nodejs.org/).
- **MongoDB**: Install MongoDB locally or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/atlas).
- **Git**: Install Git to clone the repository. [Download it here](https://git-scm.com/).

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/EduSync.git
cd EduSync
```

### Step 2: Install Dependencies
Run the following command to install all required dependencies:
```bash
npm install
```

### Step 3: Set Up MongoDB
Start your MongoDB server locally or connect to a cloud instance.

Update the MongoDB connection URL in `server.js` if needed:
```javascript
mongoose.connect("mongodb://localhost:27017/edusync", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

### Step 4: Run the Application
Start the server by running:
```bash
node server.js
```
The application will be available at `http://localhost:3000`.

## Folder Structure
```
EduSync/
│
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
│   ├── images/
│   └── uploads/ (for study materials)
│
├── views/
│   ├── index.html
│   ├── dashboard.html
│   ├── quiz.html
│   ├── attendance.html
│   ├── assignments.html
│   ├── study-materials.html
│   └── login.html
│
├── server.js
├── package.json
└── README.md
```

## Usage

### Homepage:
- Navigate to `http://localhost:3000` to access the homepage.

### Dashboard:
- View your progress and access all features.

### Quiz:
- Take interactive quizzes and get instant results.

### Attendance:
- View your attendance records in a table format.

### Assignments:
- Add and manage assignments. Data is stored in MongoDB.

### Study Materials:
- Upload and manage study materials. Files are stored in the `public/uploads` folder.

## API Endpoints
- `GET /` : Serve the homepage.
- `POST /add-assignment` : Add a new assignment to the database.
- `POST /upload` : Upload a study material file.

## Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch and submit a pull request.

## License
This project is licensed under the **MIT License**. See the `LICENSE` file for details.

## Acknowledgments
- Thanks to Node.js and MongoDB for providing the tools to build this project.
- Special thanks to the open-source community for inspiration and resources.

## Contact
If you have any questions or suggestions, feel free to reach out:
- **Email**: your-email@example.com
- **GitHub**: [your-username](https://github.com/your-username)

Enjoy using **EduSync**! 🚀
