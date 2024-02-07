### 1. Introduction

**JimPosting** is a vibrant social media platform tailored for the Jimbros community. It provides a space for members to share and celebrate their progress and milestones. The application leverages a sleek **ReactJS** front-end styled with **Tailwind CSS**, along with a robust **Express.js** back-end.

### 2. Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js**: Required to run the JavaScript runtime.
- **Express.js**: The back-end web application framework.
- **MongoDB**: The database to store application data.
- **React.js**: The front-end library for building user interfaces.
- **Tailwind CSS**: The utility-first CSS framework for styling.

### Installation

1. Clone the repository:
    
    ```
    git clone <https://github.com/aaditya25052002/JimPosting.git>
    
    ```
    
2. Navigate to the project directory and install dependencies:
    
    ```
    cd JimPosting
    npm install
    
    ```
    

### 3. Configuration

To configure the application, set up the following environment variables in a `.env` file at the root of your server directory:

```
MONGO_URL=<Your_MongoDB_Connection_String>
JWT_SECRET=<Your_JWT_Secret_Key>

```

Replace `<Your_MongoDB_Connection_String>` and `<Your_JWT_Secret_Key>` with your actual MongoDB URL and chosen JWT secret.

### 4. Running the Application

### Starting the Client

To launch the React client, run:

```
cd client
npm start

```

This will start the front-end on `http://localhost:3000`.

### Starting the Server

To initiate the Express server, execute:

```
cd server
node index.js

```

The server will begin listening for requests, by default on `http://localhost:3000`.

---

### User API

### Get User

- **HTTP Method**: `GET`
- **URL**: `/api/users/:id`
- **Description**: Retrieves information about a user by their unique identifier.
- **Authentication**: Required (Bearer Token)
- **URL Parameters**:
    - `id`: User's unique identifier.

### Get User Friends

- **HTTP Method**: `GET`
- **URL**: `/api/users/:id/friends`
- **Description**: Retrieves a list of friends for the user.
- **Authentication**: Required (Bearer Token)
- **URL Parameters**:
    - `id`: User's unique identifier.

### Friend API

### Add/Remove Friend

- **HTTP Method**: `PATCH`
- **URL**: `/api/users/:id/:friendId`
- **Description**: Adds or removes a friend from the user's friend list.
- **Authentication**: Required (Bearer Token)
- **URL Parameters**:
    - `id`: User's unique identifier.
    - `friendId`: Friend's unique identifier to add/remove.

### Authentication API

### Login

- **HTTP Method**: `POST`
- **URL**: `/api/users/login`
- **Description**: Authenticates a user and returns a token.
- **Authentication**: Not required
- **Request Body**: `{ "username": "user", "password": "pass" }`

### Post API

### Get Feed Posts

- **HTTP Method**: `GET`
- **URL**: `/api/users/`
- **Description**: Retrieves the feed posts for the logged-in user.
- **Authentication**: Required (Bearer Token)

### Get User Posts

- **HTTP Method**: `GET`
- **URL**: `/api/users/:userId/posts`
- **Description**: Retrieves posts created by a specific user.
- **Authentication**: Required (Bearer Token)
- **URL Parameters**:
    - `userId`: The unique identifier of the user whose posts to retrieve.

### Like Post

- **HTTP Method**: `PATCH`
- **URL**: `/api/users/:id/like`
- **Description**: Toggles the like status of a post for the user.
- **Authentication**: Required (Bearer Token)
- **URL Parameters**:
    - `id`: The unique identifier of the post to like or unlike.
