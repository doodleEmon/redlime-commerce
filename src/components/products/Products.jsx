import { useState, useRef, useEffect } from "react";
import rightArrBtn from "../../assets/rightArrowBtn.png";
import leftArrBtn from "../../assets/leftArrowBtn.png";
import leftArrBlack from "../../assets/leftArrBlack.png";
import rightArrBlack from "../../assets/rightArrBlack.png";
import leftPagination from "../../assets/leftPaginationArrow.png";
import rightPagination from "../../assets/rightPaginationArrow.png";
import cartPlus from "../../assets/cartPlus.png";

export default function ProductList(props) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [btnClicked, setButtonClicked] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);
  const itemsPerPage = 8;

  const productList = props?.products?.data?.products || [];
  // Extract unique categories
  const uniqueCategories = [
    "All",
    ...new Set(productList.map((product) => product.category)),
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setScrollPosition(scrollRef.current.scrollLeft);
        setButtonClicked(1);
      }
    };

    const checkScrollable = () => {
      if (scrollRef.current) {
        setIsScrollable(
          scrollRef.current.scrollWidth > scrollRef.current.clientWidth
        );
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
      checkScrollable();
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? productList
      : productList.filter((p) => p.category === selectedCategory);
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
    <div className="max-sm:px-5 sm:px-10 md:px-20 lg:px-[100px] xl:px-[130px] max-sm:mt-[50px] sm:mt-[80px] md:mt-[100px] lg:mt-[140px] xl:mt-[160px]">
      <h1 className="max-sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center capitalize font-anton tracking-wide">
        Solutions for your <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#C1842D] to-[#ECC974]">unique</span> health goals
      </h1>
      {/* Filter Section */}
      <div className="relative flex items-center justify-center mb-4 mt-11 max-sm:px-[35px] sm:px-[50px] md:px-[75px] lg:px-[85px] xl:px-[95px]">
        {isScrollable && scrollPosition > 0 && (
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
          {uniqueCategories.map((category, index) => (
            <button
              key={index}
              className={`max-sm:px-3 md:px-4 lg:px-5 xl:px-6 max-sm:py-2 md:py-[9px] lg:py-3 xl:py-4 rounded-full whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-[#E1C06E] text-black"
                  : "bg-transparent border hover:bg-[#E1C06E] hover:text-black"
              }`}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
            >
              <p className="max-sm:text-[14px] lg:text-[16px] xl:text-[18px] capitalize">{category}</p>
            </button>
          ))}
        </div>
        {isScrollable && (
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
        )}
      </div>

      {/* Product List */}
      <div className="grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-14">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="relative rounded-lg text-center h-[262px] bg-[#31428c4a]"
          >
            <div className="flex p-5 justify-center items-center h-3/4 gap-2">
              <div className="w-1/2">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  loading="lazy"
                  width="100"
                  height="100"
                />
              </div>
              <div className="w-1/2 flex items-center justify-center">
                <p className="text-[18px] text-transparent bg-clip-text bg-gradient-to-b from-[#C1842D] to-[#ECC974] font-semibold">
                  {product.title}
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 w-full">
              <div className="flex justify-between">
                <div className="w-2/3 flex items-center p-5 bg-[#1F1F1F] bg-opacity-30 rounded-bl-lg">
                  <small>${product.price}/per month</small>
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
      <div className="flex justify-center items-center gap-5 max-sm:mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-[#E1C06E] max-sm:p-2 md:p-[9px] lg:p-3 xl:p-4 rounded-full disabled:opacity-50"
        >
          <img src={leftPagination} alt="Left pagination" />
        </button>
        {/* <span>Page {currentPage} of {totalPages}</span> */}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="bg-[#E1C06E] max-sm:p-2 lg:p-3 xl:p-4 rounded-full disabled:opacity-50"
        >
          <img src={rightPagination} alt="Left pagination" />
        </button>
      </div>
    </div>
  );
}
