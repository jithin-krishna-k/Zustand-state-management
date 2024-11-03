# Zustand State Management Example

This project demonstrates state management using [Zustand](https://github.com/pmndrs/zustand) in a React application created with [Vite](https://vitejs.dev/). The app includes a simple counter and a user details fetching feature using Zustand, TypeScript, and Tailwind CSS.

## Project Overview

This application provides examples of:
- Managing global state using Zustand.
- Fetching user data dynamically from an API.
- Styling with Tailwind CSS.
- Setting up a project with Vite and TypeScript.

## Features

- **Counter**: A basic counter with increment and decrement functionality.
- **User Fetching**: Dynamically fetches user details based on a user ID input.

## Technologies Used

- **Zustand**: For global state management.
- **React**: Frontend library.
- **Vite**: Fast build tool for frontend projects.
- **TypeScript**: For type-safe JavaScript.
- **Tailwind CSS**: For styling.

## Getting Started

### Prerequisites

- Node.js (version 14 or above)
- npm (version 6 or above)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jithin-krishna-k/Zustand-state-management.git
   cd Zustand-state-management


## Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open http://localhost:3000 in your browser to view the application.

## Project Structure
- **/src/store/userdetailsStore.ts**: Contains the Zustand store for managing user state and fetching user data.
- **/src/store/counterStore.ts**: Contains the Zustand store for managing the counter state.
- **/src/components/Counter.tsx**: Counter component using Zustand for state management.
- **/src/components/UserDetails.tsx**: User details component with dynamic data fetching.

## Usage
- **Counter**: Click the increment and decrement buttons to update the counter state.
- **User Details**: Enter a user ID and click "Fetch User" to fetch and display user details from the API.

## Example Usage

bash
import { create } from 'zustand';

interface CounterState {
    count: number;
    increment: () => void;
    decrement: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: Math.max(state.count - 1, 0) })),
}));
