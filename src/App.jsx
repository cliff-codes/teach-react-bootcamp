import { useState, createContext } from "react";
import Nav from "./components/Nav";
import VotesSection from "./components/VoteSection";
import { DataContext } from "./Context";

function App() {
    const [count, setCount] = useState(300);
    const incrementCount = () => setCount((prev) => prev + 1);
    const decrementCount = () => setCount((prev) => prev - 1);

    return (
        <DataContext.Provider value={{ count, incrementCount, decrementCount }}>
            <div className="w-screen h-screen flex flex-col justify-between px-44 py-6 gap-8">
                <header className="">
                    <Nav />
                </header>

                <main className="flex-1 text-center">
                    <VotesSection />
                </main>

                <footer className="text-center">footer</footer>
            </div>
        </DataContext.Provider>
    );
}

export default App;
