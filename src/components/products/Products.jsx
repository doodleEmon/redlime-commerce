import { useState, useRef, useEffect } from "react";
import rightArrBtn from "../../assets/rightArrowBtn.png";
import leftArrBtn from "../../assets/leftArrowBtn.png";
import leftArrBlack from "../../assets/leftArrBlack.png";
import rightArrBlack from "../../assets/rightArrBlack.png";
import leftPagination from "../../assets/leftPaginationArrow.png";
import rightPagination from "../../assets/rightPaginationArrow.png";
import cartPlus from "../../assets/cartPlus.png";

const categories = [
  "All",
  "Electronics",
  "Clothing",
  "Shoes",
  "Watches",
  "Books",
  "Toys",
  "Furniture",
  "Beauty",
  "Sports",
];
const products = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
}));
const itemsPerPage = 8;

export default function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [btnClicked, setButtonClicked] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setScrollPosition(scrollRef.current.scrollLeft);
        setButtonClicked(1);
      }
    };
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 150;
      scrollRef.current.scrollTo({
        left:
          scrollRef.current.scrollLeft +
          (direction === "right" ? scrollAmount : -scrollAmount),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-10 xl:px-[130px] mt-[160px]">
      <h1 className="text-5xl font-bold text-center">
        Solutions for your unique health goals
      </h1>
      {/* Filter Section */}
      <div className="relative flex items-center mb-4 mt-11 px-[95px]">
        {scrollPosition > 0 && (
          <button
            onClick={() => handleScroll("left")}
            className={`absolute left-0 ${
              btnClicked ? "bg-[#E1C06E]" : "bg-transparent"
            } border px-8 py-[22.5px] rounded-full z-10`}
          >
            <img
              src={btnClicked ? leftArrBlack : leftArrBtn}
              alt="Left arrow button"
            />
          </button>
        )}
        <div
          ref={scrollRef}
          className="flex space-x-4 w-full overflow-hidden scroll-smooth"
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-4 rounded-full whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-[#E1C06E] text-black"
                  : "bg-transparent border hover:bg-[#E1C06E] hover:text-black"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              <p className="text-[18px]">{category}</p>
            </button>
          ))}
        </div>
        <button
          onClick={() => handleScroll("right")}
          className={`absolute right-0 ${
            btnClicked ? "bg-[#E1C06E]" : "bg-transparent"
          } border px-8 py-[22.5px] rounded-full z-10`}
        >
          <img
            src={btnClicked ? rightArrBlack : rightArrBtn}
            alt="Right arrow button"
          />
        </button>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 mt-14">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="relative border rounded-lg text-center h-[262px]"
          >
            <div className="flex p-5">
              <div className="w-1/2">image</div>
              <div className="w-1/2">product title</div>
            </div>
            <div className="absolute bottom-0 w-full">
              <div className="flex justify-between">
                <div className="w-2/3 flex items-center p-5 bg-[#222443] bg-opacity-50 rounded-bl-lg">
                  <small>$90.99/per month</small>
                </div>
                <div className="w-1/3 flex justify-center items-center bg-gradient-to-b from-[#C1842D] to-[#ECC974] py-5 rounded-br-lg">
                  <img src={cartPlus} alt="Cart icon" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-5 mt-12">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-[#E1C06E] p-4 rounded-full disabled:opacity-50"
        >
          <img src={leftPagination} alt="Left pagination" />
        </button>
        {/* <span>Page {currentPage} of {totalPages}</span> */}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="bg-[#E1C06E] p-4 rounded-full disabled:opacity-50"
        >
          <img src={rightPagination} alt="Left pagination" />
        </button>
      </div>
    </div>
  );
}
