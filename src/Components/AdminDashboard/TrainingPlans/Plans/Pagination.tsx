type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;

}

export default function Pagination({ currentPage, onPageChange, totalPages }: PaginationProps): JSX.Element {
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1)
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1)
        }
    }

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => onPageChange(i)}
                    className={`px-4 py-2 rounded-lg ${i === currentPage ? "bg-green-600 text-white" : "bg-gray-200"
                        }`}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };



    return (<div className="flex justify-center items-center mt-6 space-x-2">
        <button
            onClick={handlePrevPage}
            className={`px-4 py-2 rounded-lg bg-gray-200 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={currentPage === 1}
        >
            הקודם
        </button>
        {renderPageNumbers()}
        <button
            onClick={handleNextPage}
            className={`px-4 py-2 rounded-lg bg-gray-200 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={currentPage === totalPages}
        >
            הבא
        </button>
    </div>
    );
}