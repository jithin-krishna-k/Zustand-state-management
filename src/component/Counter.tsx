import useCounterStore from "../store/store";

const Counter = () => {
    const { count, incrementCounter, decrementCounter } = useCounterStore();

    return (
        <div className="bg-white shadow-lg rounded-sm p-4">
            <h1 className="text-2xl text-center text-slate-800 font-bold mb-4">Counter: {count}</h1>
            <div className="flex space-x-4">
                <button onClick={incrementCounter} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Increment
                </button>
                <button onClick={decrementCounter} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;
