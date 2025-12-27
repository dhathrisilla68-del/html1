function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  alert("Login successful!");

  // Redirect to home page
  window.location.href = "index.html";
}

function signup() {
  alert("Signup successful! Please login.");
  window.location.href = "login.html";
}
function goStudent() {
  window.location.href = "student.html";
}

function goAdmin() {
  window.location.href = "admin.html";
}
function showJobs() {
  let jobList = document.getElementById("jobList");

  if (jobList.style.display === "none" || jobList.style.display === "") {
    jobList.style.display = "block";
  } else {
    jobList.style.display = "none";
  }
}
/* Toggle job list */
function toggleJobs() {
  let jobList = document.getElementById("jobList");
  jobList.style.display = jobList.style.display === "block" ? "none" : "block";
}

/* Go to apply page */
function applyJob(job) {
  localStorage.setItem("selectedJob", job);
  window.location.href = "apply.html";
}

/* Show selected job on apply page */
if (document.getElementById("jobName")) {
  document.getElementById("jobName").innerText =
    localStorage.getItem("selectedJob");
}

/* Submit application */
function submitApplication() {
  let job = localStorage.getItem("selectedJob");

  let appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];

  // Prevent duplicate application
  if (!appliedJobs.includes(job)) {
    appliedJobs.push(job);
    localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
  }

  alert("Application submitted successfully!");
  window.location.href = "student.html";
}

/* Load applied jobs for admin dropdown */
if (document.getElementById("jobSelect")) {
  let appliedData = JSON.parse(localStorage.getItem("appliedData")) || [];
  let jobSelect = document.getElementById("jobSelect");
  let jobCount = document.getElementById("jobCount");

  // Get unique jobs
  let uniqueJobs = [...new Set(appliedData.map(item => item.job))];
  jobCount.innerText = appliedData.length;

  uniqueJobs.forEach(job => {
    let option = document.createElement("option");
    option.value = job;
    option.textContent = job;
    jobSelect.appendChild(option);
  });
}

/* Show students for selected job */
function showAppliedStudents() {
  let selectedJob = document.getElementById("jobSelect").value;
  document.getElementById("selectedJob").innerText =
    selectedJob || "None";

  let studentList = document.getElementById("studentList");
  studentList.innerHTML = "";

  if (!selectedJob) return;

  let appliedData = JSON.parse(localStorage.getItem("appliedData")) || [];

  appliedData.forEach(item => {
    if (item.job === selectedJob) {
      let li = document.createElement("li");
      li.textContent = item.studentName;
      studentList.appendChild(li);
    }
  });
}

/* Post Job (optional) */
function postJob() {
  let title = document.getElementById("jobTitle").value;
  let msg = document.getElementById("postMsg");

  if (!title) {
    alert("Enter job title");
    return;
  }

  msg.innerText = "Job posted successfully!";
  document.getElementById("jobTitle").value = "";
  document.getElementById("jobDesc").value = "";
}

/* Update hours (optional) */
function updateHours() {
  let hours = document.getElementById("hoursInput").value;
  let msg = document.getElementById("hoursMsg");

  if (!hours) {
    alert("Enter hours");
    return;
  }

  msg.innerText = "Work hours updated!";
  document.getElementById("hoursInput").value = "";
}
