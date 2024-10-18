# Chess Frontend

A modern, responsive frontend for a Chess application built with Next.js, TypeScript, and Clerk for authentication. This project allows users to view their chess games, track results, and enjoy a seamless user experience with theme support and notifications.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- **User Authentication:** Powered by Clerk for secure and easy user sign-in/sign-up.
- **View Games:** Fetch and display user-specific chess games with detailed results.
- **Responsive Design:** Ensures optimal viewing experience across devices.
- **Theme Support:** Light and Dark themes with seamless switching.
- **Notifications:** Informative Toaster notifications for user actions and updates.
- **Real-time Updates:** Enabled using Socket.io for instant game updates and notifications.
- **Modern UI:** Clean and intuitive interface built with React components.


## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and more.
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript.
- [Clerk](https://clerk.dev/) - User authentication and management.
- [Axios](https://axios-http.com/) - Promise based HTTP client.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [Lucide Icons](https://lucide.dev/) - Icon library.
- [Prisma](https://www.prisma.io/) - ORM for database interactions.
- [Socket.io](https://socket.io/) - Real-time bidirectional event-based communication.
- [Vercel](https://vercel.com/) - Platform for deploying Next.js applications.

## Installation

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js** (v14 or later)
- **npm** or **yarn** or **pnpm**
- **Clerk account** for authentication

### Steps

1. **Clone the Repository**

    ```bash
    git clone https://github.com/sarwanazhar/chess-frontend
    ```

2. **Navigate to the Project Directory**

    ```bash
    cd chess-frontend
    ```

3. **Install Dependencies**

    Using npm:

    ```bash
    npm install
    ```

    Or using yarn:

    ```bash
    yarn install
    ```

    Or using pnpm:

    ```bash
    pnpm install
    ```

4. **Set Up Environment Variables**

    Create a `.env.local` file in the root directory and add your Clerk API keys and other necessary environment variables.

    ```env
    NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
    CLERK_API_KEY=<your-clerk-api-key>
    # Add other environment variables as needed
    ```

5. **Start the Development Server**

    Using npm:
    
    ```bash
    npm run dev
    ```
    
    Or using yarn:
    
    ```bash
    yarn dev
    ```
    
    Or using pnpm:
    
    ```bash
    pnpm dev
    ```

6. **Open the Application**

    Navigate to [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

Once the development server is running, you can:

1. **Sign Up / Sign In:**

    - Register a new account or log in using existing credentials.

2. **View Your Games:**

    - After signing in, navigate to the games section to view a list of your chess games.
    - Each game displays the opponent, result, and a link to view detailed moves.

3. **Theme Switching:**

    - Toggle between light and dark themes using the theme switcher.

4. **Notifications:**

    - Receive real-time notifications for actions like game updates or errors.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the Repository**

2. **Create a New Branch**

    ```bash
    git checkout -b feature/YourFeature
    ```

3. **Make Your Changes**

4. **Commit Your Changes**

    ```bash
    git commit -m "Add your feature"
    ```

5. **Push to the Branch**

    ```bash
    git push origin feature/YourFeature
    ```

6. **Open a Pull Request**

Please ensure your code adheres to the project's code style and includes relevant tests.

## Contact

- **Email:** sarwanazhar1234@gmail.com
- **GitHub:** [sarwanazhar](https://github.com/sarwanazhar)
- **Instagram:** [s.m_sarwan_ali](https://www.instagram.com/s.m_sarwan_ali)
```
