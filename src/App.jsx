import { useState } from "react";
import Nav from "./components/Nav";
import VotesSection from "./components/VoteSection";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="w-screen h-screen flex flex-col justify-between px-44 py-6 gap-8">
            <header className="">
                <Nav />
            </header>

            <main className="flex-1 text-center">
                <VotesSection />
            </main>

            <footer className="text-center">footer</footer>
        </div>
    );
}

export default App;
