# Expense Tracker

The front-end for a full-stack expense tracker application that allows users to keep track of all their transactions.

**Back-End:** https://github.com/vzMars/expense-tracker-api

![alt text](https://i.imgur.com/K9NthkR.png)

## How It's Made:

**Tech used:** TypeScript, React, Tailwind CSS

The front-end for this application was made using React and TypeScript. Tailwind CSS was used to style this application. This application is also mobile responsive and renders different components depending if the user is on a mobile or desktop device. React Router DOM was used to handle routing in this application. There are private routes that can only be accessed by users who aren't authenticated such as the Login and Signup page and private routes where only authenticated users can access. I have also created a 404 Not Found page for routes that don't exist in the application. The Context API was used to manage the authentication state and manage the state of transactions that users have added and what categories those transactions belong to. I have also created custom hooks for using the AuthContext, TransactionContext, and CategoryContext, registering the user, logging in the user, and logging the user out.

## Optimizations:

I would like to use some of the other graphs available from the chart.js library to display more data related to the user's transactions.

## Lessons Learned:

I learned how to create a Java and Spring Boot Rest API that uses PostgreSQL as the database and get it working with a React and TypeScript front-end. There were no issues deploying the front-end to render and the back-end to railway.

## More Projects:

Take a look at these other projects that I have in my portfolio:

**GameBlog:** https://github.com/vzMars/gameblog

**Employee Manager:** https://github.com/vzMars/employee-manager

**MangaNotifications:** https://github.com/vzMars/manga-notifications
