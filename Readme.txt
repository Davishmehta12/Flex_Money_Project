Yoga Classes Admission Form:

This project aims to create an admission form for monthly Yoga Classes, ensuring a user-friendly interface for enrollment and payment. The form adheres to specific criteria outlined by the Yoga center.

Problem Statement
As the CTO of an outsourcing firm, the objective is to build an admission form with the following requirements:

Eligibility: Only individuals aged between 18 and 65 can enroll for the monthly classes.
Payment Structure: Participants pay a fixed monthly fee of 500/- INR. Payment is accepted at any time during the month.
Enrollment Flexibility: Participants can enroll on any day of the month but must pay for the entire month.
Batch Selection: Four daily batches are available: 6-7AM, 7-8AM, 8-9AM, and 5-6PM. Participants can choose any batch for a month and switch to another batch the following month.

Project Overview:

Folder Structure:
Client: Contains the frontend code built using React.
Server: Houses the backend server developed using Node.js and Express.js.
Database: Utilizes MongoDB for storing participant details and enrollment information.

Technologies Used
Frontend: React
Backend: Node.js, Express.js
Database: MongoDB

Setup Instructions

Client-side (Frontend) - 

1)Clone the Repository
Use Git bash or download the ZIP file and extract it to get the project files.
2)Open a terminal or command prompt.
3)Navigate to Client Directory:
4)Use the cd command to move into the client-side directory of the project.
5)Install Dependencies:
Use npm (Node Package Manager) to install the necessary dependencies for the React app.
Run the command:
npm install
6)Once the dependencies are installed, start the React application.
Run the command:
npm start
7)Access the Application:
Open a web browser and access the application at the specified URL (usually http://localhost:3000/ or as shown in the terminal).


Server-side (Backend) -

Prerequisites:
Node.js installed on your machine. If not installed, download it from Node.js website.

Steps:

1)Clone the Repository:
Clone the project repository from the Git repository hosting service using Git bash or download the ZIP file and extract it.
2)Navigate to Server Directory:
Open a terminal or command prompt and navigate to the server-side directory of the project.
cd server
3)Install Dependencies:
Run the following command to install the necessary dependencies for the server-side (Node.js and Express).
npm install
4)Configure MongoDB:
Ensure you have MongoDB installed and running on your local machine or have a remote MongoDB URI ready to connect to the database.
Update the MongoDB URI in the server code (index.js).
5)Start the Server:
Run the following command to start the server.
node index.js
6)Server Ready:
You should see a message in the terminal indicating that the server is running.


Usage Instructions
Access the Form Interface: Open a web browser and visit the specified URL for the client-side (frontend) application.
Fill Enrollment Form: Enter your name, age, and select the preferred batch timing.
Submit Enrollment: Click the submit button to enroll in the Yoga Classes.