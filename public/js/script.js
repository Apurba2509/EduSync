document.addEventListener("DOMContentLoaded", function () {
  // 📊 Progress Chart
  const progressChart = document.getElementById("progress-chart");
  if (progressChart) {
      progressChart.innerHTML = `
          <p>Your progress: 75%</p>
          <progress value="75" max="100"></progress>
      `;
  }
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
});

// 📌 Quiz Data
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
];

// 📌 Render Quiz
function renderQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = ""; // Clear previous content

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

    // 📌 Add Submit Button
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit Quiz";
    submitBtn.onclick = submitQuiz;
    quizContainer.appendChild(submitBtn);
}

// 📌 Submit Quiz
function submitQuiz() {
    let score = 0;
    quizData.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });

    // 📌 Show Result Below the Quiz Instead of `alert`
    const resultDiv = document.createElement("p");
    resultDiv.textContent = `Your score: ${score} / ${quizData.length}`;
    document.getElementById("quiz-container").appendChild(resultDiv);
}

// 📌 Attendance Data
const attendanceData = [
    { date: "2023-10-01", status: "Present" },
    { date: "2023-10-02", status: "Absent" },
    { date: "2023-10-03", status: "Present" },
];

// 📌 Render Attendance
function renderAttendance() {
    const attendanceBody = document.getElementById("attendance-body");
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

// 📂 File Upload Featuredocument.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("file-input");
    const fileList = document.getElementById("file-list");
    const uploadButton = document.getElementById("upload-button");
    const uploadStatus = document.getElementById("upload-status");

    // 📝 Show selected files before uploading
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

    // 📤 Upload File
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


})    ;
