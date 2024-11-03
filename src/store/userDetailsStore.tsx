import { create } from "zustand";

interface User {
    id: number;
    name: string;
    email: string;
}

interface UserStore {
    user: User | null;
    loading: boolean;
    error: string;
    fetchUser: (id: number) => Promise<void>;
    loadUserFromLocalStorage: () => void;
}

export const userDetails = create<UserStore>((set) => ({
    user: null,
    loading: false,
    error: '',
    fetchUser: async (id: number) => {
        set({ loading: true, error: '' });
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            if (!response.ok) {
                throw new Error('User not found');
            }
            const userData: User = await response.json();
            set({ user: userData, loading: false });
            localStorage.setItem('user', JSON.stringify(userData));
        } catch (error) {
            set({ error: String(error), loading: false });
        }
    },
    loadUserFromLocalStorage: () => {
        set({ loading: true, error: '' });
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            set({ user: JSON.parse(savedUser), loading: false });
        }
    }
}));
