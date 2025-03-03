import { useState, createContext } from "react";
import Nav from "./components/Nav";
import VotesSection from "./components/VoteSection";
import { DataContext } from "./Context";

const brands = [
    {
        name: "Lamborghini",
        image: "/src/assets/lambo.jpg",
    },
    {
        name: "Rolls Royce",
        image: "/src/assets/rolls-royce.jpg",
    },
    {
        name: "BMW",
        image: "/src/assets/bmw.jpg",
    },
    {
        name: "Range Rover",
        image: "/src/assets/range.jpg",
    },
];
function App() {
    const [totalVotes, setTotalVotes] = useState(0);

    const [brandsAndVotes, setBrandsAndVotes] = useState(
        brands.map((brand) => ({
            brand: brand.name,
            upVotes: 0,
            downVotes: 0,
        }))
    );

    const handleUpvote = (brandName) => {
        const brandIndex = brandsAndVotes.findIndex((brand) => brand.brand === brandName);
        brandsAndVotes[brandIndex].upVotes++;
        setBrandsAndVotes([...brandsAndVotes]);
    };
    const handleDownvote = (brandName) => {
        const brandToDownvote = brandsAndVotes.findIndex((brand) => brand.brand === brandName);
        brandsAndVotes[brandToDownvote].downVotes++;
        setBrandsAndVotes([...brandsAndVotes]);
    };

    const handleVotesReset = () => {
        setBrandsAndVotes(
            brands.map((brand) => ({
                brand: brand.name,
                upVotes: 0,
                downVotes: 0,
            }))
        );
    };

    const getTotalVotes = () => {
        //loop through all the brands
        // and sum up their upvotes and downvotes
        let totalVotes = 0;
        brandsAndVotes.forEach((brand) => {
            totalVotes += brand.upVotes + brand.downVotes;
        });
        setTotalVotes(totalVotes);
    };

    return (
        <DataContext.Provider value={totalVotes}>
            <div className="w-screen h-screen flex flex-col justify-between px-44 py-6 gap-8">
                <header className="">
                    <Nav />
                </header>

                <main className="flex-1 text-center">
                    <VotesSection
                        brandsAndVotes={brandsAndVotes}
                        totalVotes={totalVotes}
                        brands={brands}
                        setBrandsAndVotes={setBrandsAndVotes}
                        handleUpvote={handleUpvote}
                        handleDownvote={handleDownvote}
                        handleVotesReset={handleVotesReset}
                        getTotalVotes={getTotalVotes}
                    />
                </main>

                <footer className="text-center">footer</footer>
            </div>
        </DataContext.Provider>
    );
}

export default App;
