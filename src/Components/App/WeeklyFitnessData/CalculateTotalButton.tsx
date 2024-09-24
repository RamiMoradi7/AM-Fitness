type CalculateTotalButtonProps = {
    onCalculate: () => Promise<void>;
    isLoading: boolean;
}

export default function CalculateTotalButton({ onCalculate, isLoading }: CalculateTotalButtonProps): JSX.Element {
    return (
        <div className="flex justify-center">
            <button
                onClick={onCalculate}
                disabled={isLoading}
                className="mt-5 flex items-center justify-center w-full max-w-xs py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-200 shadow-lg transform hover:scale-105"
            >
                {isLoading ? (
                    <>
                        <span className="animate-spin mr-2">🔄</span>
                        טוען...
                    </>
                ) : (
                    "חשב ממוצע שבועי"
                )}
            </button>
        </div>
    );
}
