import { useState } from "react";
import { userDetails } from "../store/userDetailsStore";


const UserDetails = () => {
    const { user, loading, error, fetchUser } = userDetails();
    const [userId, setUserId] = useState<string>('');

    const handleFetchUser = () => {
        const id = Number(userId);
        if (id > 0) {
            fetchUser(id);
        } else {
            alert('Please enter a valid user ID.');
        }
    };

    return (
        <div className=" bg-white shadow-lg rounded-sm p-4">
            <div className="flex items-center">
                <input
                    type="number"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="EMPID (e.g., 1 - 10)"
                    className="border p-2 rounded-l-md focus:outline-none h-11 focus:ring-blue-500" 
                />
                <button 
                    onClick={handleFetchUser} 
                    className="bg-blue-500 text-white p-2 h-11 rounded-r-md hover:bg-blue-600 transition duration-200" 
                >
                    Fetch User
                </button>
            </div>
            {loading && <p className="mt-1 text-blue-500">Loading...</p>}
            {error && <p className="text-red-500 mt-1">{error}</p>}
            {user && !loading && !error && (
                <div className=" p-6 mt-4 rounded">
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    <p>Email: {user.email}</p>
                    <p>EMPID: {user.id}</p>
                </div>
            )}
        </div>
    );
};

export default UserDetails;
