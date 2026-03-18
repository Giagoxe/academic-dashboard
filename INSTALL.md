# Installation Instructions for Academic Dashboard

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A code editor such as [Visual Studio Code](https://code.visualstudio.com/)

## Step 1: Clone the Repository
Open your terminal and run the following command to clone the repository:
```bash
git clone https://github.com/Giagoxe/academic-dashboard.git
```

## Step 2: Navigate to the Project Directory
Change to the project directory:
```bash
cd academic-dashboard
```

## Step 3: Install Dependencies
Run the following command to install all necessary dependencies:
```bash
npm install
```

## Step 4: Set Up Environment Variables
Create a `.env` file in the root of the project directory. You can use the `.env.example` file as a template. 
Add the required variables according to your configuration.

## Step 5: Run the Project
To start the development server, use:
```bash
npm start
```

Your application should now be running at `http://localhost:3000`.

## Step 6: Build for Production
If you need to create a production build, run:
```bash
npm run build
```

## Additional Information
For any issues or requests, feel free to raise an issue in the repository.
