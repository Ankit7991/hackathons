# Personal Finance Tracker

## Key Features:

1. **User Authentication:**
   - Register and log in users using JWT for authentication.

2. **Dashboard:**
   - Display a summary of the user's financial status, including total income, expenses, and balance.

3. **Income and Expense Management:**
   - Allow users to add, edit, and delete income and expense entries.
   - Categorize entries (e.g., salary, rent, groceries, entertainment).

4. **Budgeting:**
   - Enable users to set monthly budgets for different categories.
   - Show progress against the budget with visual indicators (e.g., progress bars).

5. **Reports:**
   - Generate monthly and yearly reports to visualize spending habits with charts and graphs.

6. **Notifications:**
   - Notify users when they are nearing their budget limits.

## Tech Stack:

- **Frontend:** React, styled-components, Chart.js (for graphs).
- **Backend:** Node.js, Express.
- **Database:** MySQL.

## Steps to Implement:

1. **Setup Project:**
   - Initialize the React app and Node.js server.
   - Set up MySQL database and connect it to the backend.

2. **User Authentication:**
   - Implement registration and login endpoints in the backend.
   - Create corresponding forms and JWT-based authentication in the frontend.

3. **Dashboard:**
   - Design a dashboard component in React.
   - Create backend endpoints to fetch summary data.
   - Integrate frontend with backend to display data.

4. **Income and Expense Management:**
   - Build forms for adding/editing income and expenses.
   - Develop API endpoints for CRUD operations.
   - Fetch and display income/expense data in the frontend.

5. **Budgeting:**
   - Add budget setting functionality in the backend.
   - Create frontend forms and components to manage budgets.
   - Integrate budget progress indicators.

6. **Reports:**
   - Use Chart.js to create visual reports.
   - Fetch report data from the backend and display in charts.

7. **Notifications:**
   - Implement backend logic to check budget limits.
   - Add frontend components to display notifications.
