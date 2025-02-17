document.addEventListener("DOMContentLoaded", function () {
    // 📌 Ensure elements exist before running
    const quizContainer = document.getElementById("quiz-container");
    const attendanceBody = document.getElementById("attendance-body");

    // ✅ Render Quiz if element exists
    if (quizContainer) {
        renderQuiz();
    }

    // ✅ Render Attendance if element exists
    if (attendanceBody) {
        renderAttendance();
    }

    // 📂 File Upload Feature
    const fileInput = document.getElementById("file-input");
    const fileList = document.getElementById("file-list");
    const uploadButton = document.getElementById("upload-button");
    const uploadStatus = document.getElementById("upload-status");

    if (fileInput && fileList && uploadButton && uploadStatus) {
        fileInput.addEventListener("change", function () {
            fileList.innerHTML = ""; // Clear previous list
            if (fileInput.files.length === 0) {
                fileList.innerHTML = "<p>No file selected</p>";
                return;
            }

            for (const file of fileInput.files) {
                const fileItem = document.createElement("p");
                fileItem.textContent = `📄 ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
                fileList.appendChild(fileItem);
            }
        });

        uploadButton.addEventListener("click", async function () {
            if (!fileInput.files.length) {
                uploadStatus.innerHTML = `<p class="error">⚠️ No file selected!</p>`;
                return;
            }

            const formData = new FormData();
            formData.append("file", fileInput.files[0]);

            try {
                const response = await fetch("http://localhost:3000/upload", {
                    method: "POST",
                    body: formData
                });

                const result = await response.json();

                if (!response.ok) throw new Error(result.error || "Upload failed");

                uploadStatus.innerHTML = `<p class="success">${result.message}</p>`;
            } catch (error) {
                uploadStatus.innerHTML = `<p class="error">❌ ${error.message}</p>`;
            }
        });
    }
});

// Quiz Data
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris",
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
    },
];

// Render Quiz
function renderQuiz() {
    const quizContainer = document.getElementById("quiz-container");

    if (!quizContainer) {
        console.error("Quiz container not found!");
        return;
    }

    quizContainer.innerHTML = ""; // Clear previous content if any

    quizData.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.className = "quiz-question";
        questionDiv.innerHTML = `
            <h3>${index + 1}. ${q.question}</h3>
            <div class="quiz-options">
                ${q.options
                    .map(
                        (option) => `
                        <label>
                            <input type="radio" name="question${index}" value="${option}">
                            ${option}
                        </label>
                    `
                    )
                    .join("")}
            </div>
        `;
        quizContainer.appendChild(questionDiv);
    });
}

// Submit Quiz
function submitQuiz() {
    let score = 0;
    quizData.forEach((q, index) => {
        const selectedOption = document.querySelector(
            `input[name="question${index}"]:checked`
        );
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });
    alert(`Your score is ${score}/${quizData.length}`);
}

// 📌 Attendance Data
const attendanceData = [
    { date: "2023-10-01", status: "Present" },
    { date: "2023-10-02", status: "Absent" },
    { date: "2023-10-03", status: "Present" },
];


document.addEventListener('DOMContentLoaded', function() {
    // Dummy Data
    const quizzes = [
      { name: 'Math Quiz', dueDate: '2025-02-20' },
      { name: 'Physics Quiz', dueDate: '2025-02-22' },
      { name: 'Chemistry Quiz', dueDate: '2025-02-25' }
    ];
  
    const assignments = [
      { name: 'Assignment 1: Algebra', dueDate: '2025-02-18' },
      { name: 'Assignment 2: Newtons Laws', dueDate: '2025-02-20' }
    ];
  
    const attendance = [
      { date: '2025-02-10', status: 'Present' },
      { date: '2025-02-11', status: 'Absent' },
      { date: '2025-02-12', status: 'Present' },
      { date: '2025-02-13', status: 'Present' },
    ];
  
    // Function to populate quizzes
    const quizList = document.getElementById('quiz-list');
    quizzes.forEach(quiz => {
      const li = document.createElement('li');
      li.textContent = `${quiz.name} - Due: ${quiz.dueDate}`;
      quizList.appendChild(li);
    });
  
    // Function to populate assignments
    const assignmentList = document.getElementById('assignment-list');
    assignments.forEach(assignment => {
      const li = document.createElement('li');
      li.textContent = `${assignment.name} - Due: ${assignment.dueDate}`;
      assignmentList.appendChild(li);
    });
  
    // Function to populate attendance
    const attendanceTable = document.getElementById('attendance-table');
    let tableHTML = '<thead><tr><th>Date</th><th>Status</th></tr></thead><tbody>';
    attendance.forEach(record => {
      tableHTML += `<tr><td>${record.date}</td><td>${record.status}</td></tr>`;
    });
    tableHTML += '</tbody>';
    attendanceTable.innerHTML = tableHTML;
  });
  


// 📌 Render Attendance
function renderAttendance() {
    const attendanceBody = document.getElementById("attendance-body");

    if (!attendanceBody) {
        console.error("Attendance body not found!");
        return;
    }

    attendanceBody.innerHTML = ""; // Clear previous content

    attendanceData.forEach((record) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${record.date}</td>
            <td>${record.status}</td>
        `;
        attendanceBody.appendChild(row);
    });
}

