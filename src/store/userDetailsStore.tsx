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
        } catch (error) {
            set({ error: String(error), loading: false });
        }
    },
}));
