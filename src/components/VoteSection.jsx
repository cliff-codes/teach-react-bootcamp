import { useEffect, useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";

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

const VotesSection = () => {
    const [totalVotes, setTotalVotes] = useState(0);

    const [brandsAndVotes, setBrandsAndVotes] = useState(
        brands.map((brand) => ({
            brand: brand.name,
            upVotes: 0,
            downVotes: 0,
        }))
    );

    console.log(brandsAndVotes);

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

    useEffect(() => {
        getTotalVotes();
    }, [brandsAndVotes]);

    return (
        <div className="w-full px-4 h-[600px] bg-[#F2F2F7] rounded-lg py-12 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Vote for your favorite Car Brand</h2>

            <div>
                <h3>Total Votes Casted</h3>
                <div className="text-5xl font-bold">{totalVotes}</div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
                {brands.map((brand, index) => (
                    <div key={index} className=" bg-[white] rounded-md overflow-hidden">
                        <div className="w-[240px] h-[200px]">
                            <img
                                src={brand.image}
                                alt={brand.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="pb-1 px-1">
                            <h2 className="w-full text-left px-1 text-md font-medium py-2">
                                {brand.name}
                            </h2>
                            <div className="flex justify-between place-items-center px-1">
                                <div className="flex gap-3">
                                    <div>{brandsAndVotes[index].upVotes} Up</div>
                                    <div>{brandsAndVotes[index].downVotes} Down</div>
                                </div>
                                <div className="flex gap-2">
                                    <div
                                        className="group w-8 h-8 border rounded-full flex justify-center place-items-center hover:bg-slate-900 transition-colors ease-linear"
                                        onClick={() => handleUpvote(brand.name)}
                                    >
                                        <BiLike className="group-hover:text-white" />
                                    </div>
                                    <div
                                        className="group w-8 h-8 border rounded-full flex justify-center place-items-center hover:bg-slate-900 transition-colors ease-linear"
                                        onClick={() => handleDownvote(brand.name)}
                                    >
                                        <BiDislike className="group-hover:text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center gap-4">
                <button
                    onClick={handleVotesReset}
                    className=" bg-[#F2F2F7] border-2 border-slate-900 rounded-md text-sm font-semibold px-4 py-2 transition-colors ease-linear hover:bg-slate-900 hover:text-slate-50"
                >
                    Reset Votes
                </button>
            </div>
        </div>
    );
};

export default VotesSection;
