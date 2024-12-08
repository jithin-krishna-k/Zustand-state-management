import useCounterStore from "../store/store";

const Counter = () => {
    const { count, incrementCounter, decrementCounter, resetCounter } = useCounterStore();

    return (
        <div className="bg-white shadow-lg rounded-sm p-4">
            <h1 className="text-6xl text-center text-blue-600 font-extrabold mb-4 font-mono tracking-wide">
                {count}
            </h1>
            <div className="flex space-x-2">
                <button
                    onClick={decrementCounter}
                    disabled={count === 0} // Disable if count is 0
                    className={`px-4 py-2 rounded text-white ${count === 0
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-red-500 hover:bg-red-600"
                        }`}
                >
                    Decrement
                </button>
                <button
                    onClick={incrementCounter}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Increment
                </button>
            </div>
            <div className="mt-1 flex justify-center">
                <button
                    onClick={resetCounter}
                    disabled={count === 0} // Disable if count is 0
                    className={`px-4 py-2 w-full rounded text-white ${count === 0
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-slate-700 hover:bg-slate-800"
                        }`}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Counter;
