import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Datepicker from "tailwind-datepicker-react";
import { IOptions } from "tailwind-datepicker-react/types/Options";
import { Status } from "../../../hooks/useFetch";
import { formatDateHebrewShort } from "../../../Utils/DateFormat";

type DateRangeInputProps = {
    defaultStartDate?: Date;
    defaultEndDate?: Date;
    onChange: (startDate: Date | null, endDate: Date | null) => void;
    status?: Status
};

export const DateRangeInput = ({
    onChange,
    defaultStartDate,
    defaultEndDate,
    status
}: DateRangeInputProps) => {
    const [showStart, setShowStart] = useState<boolean>(false);
    const [startDate, setStartDate] = useState<Date | null>(defaultStartDate || null);
    const [endDate, setEndDate] = useState<Date | null>(defaultEndDate || null);
    const [selectedDates, setSelectedDates] = useState<{ start: Date | null, end: Date | null }>({ start: defaultStartDate, end: defaultEndDate });


    useEffect(() => {
        if (status === "error") {
            setStartDate(selectedDates?.start)
            setEndDate(selectedDates?.end)
        }
    }, [status])

    const handleStartChange = (date: Date) => {
        if (date) {
            if (date.getTime() === selectedDates?.start?.getTime()) {
                toast.error("תאריכים אלו כבר נבחרו, אנא בחר תאריך אחר.")
                return;
            }
            setStartDate(date)
            const nextWeek = new Date(date);
            nextWeek.setDate(nextWeek.getDate() + 6);
            setEndDate(nextWeek);
        }
    };

    const handleCloseStart = (state: boolean) => {
        setShowStart(state);
    };

    const handleSend = () => {
        if (startDate && endDate) {
            if (startDate.getTime() === selectedDates?.start?.getTime()) {
                toast.error("תאריכים אלו כבר נבחרו, אנא בחר תאריך אחר.")
                return;
            }
            onChange(startDate, endDate);
            setSelectedDates({ start: startDate, end: endDate })
        }
    };

    return (
        <div className="flex flex-col w-full p-4 bg-white shadow-md rounded-lg border border-green-300">
            <div className="flex items-center w-full mb-4">
                <div className="relative flex-grow">
                    <Datepicker
                        onChange={handleStartChange}
                        show={showStart}
                        setShow={handleCloseStart}
                        options={options}
                        value={startDate}
                    />
                </div>
                <span className="mx-4 text-green-600 font-bold">עד</span>
                <div className="relative flex-grow">
                    <Datepicker
                        onChange={() => null}
                        show={false}
                        setShow={() => null}
                        options={{ ...options }}
                        value={endDate}
                    />
                </div>
            </div>

            <div className="flex justify-center">
                <button
                    onClick={handleSend}
                    className={`px-4 py-2  text-white bg-green-500 rounded-lg ${!startDate || !endDate || startDate.getTime() === selectedDates?.start?.getTime() ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={!startDate || !endDate || startDate.getTime() === selectedDates?.start?.getTime()}
                >
                    {status === "loading" ? "טוען..." : "שלח"}
                </button>
            </div>
            {status === "error" && (
                <div className="mt-4 p-2 text-sm text-red-600 bg-red-100 border border-red-300 rounded-lg">
                    {`לא נמצאו תוצאות עבור ${formatDateHebrewShort(selectedDates.start)} - ${formatDateHebrewShort(selectedDates.end)},`}

                    {` מציג תוצאות עבור ${formatDateHebrewShort(defaultStartDate)} - ${formatDateHebrewShort(defaultEndDate)}.`}
                </div>
            )}
        </div>
    );
};

const options: IOptions = {
    title: "בחר טווח תאריכים",
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    clearBtnText: "נקה",
    todayBtnText: "היום",
    maxDate: new Date("2025-01-01"),
    minDate: new Date("2023-01-01"),
    theme: {
        background: "dark:bg-green-500 ",
        todayBtn: "ml-4 dark:bg-white dark:text-green-600 dark:hover:bg-white dark:hover:bg-opacity-50",
        clearBtn: "dark:bg-white dark:text-green-600 dark:hover:bg-white dark:hover:bg-opacity-50",
        icons: "dark:bg-green-500 dark:hover:bg-white dark:hover:bg-opacity-50",
        text: "dark:bg-green-500 dark:hover:bg-white dark:hover:bg-opacity-50",
        disabledText: "bg-green-500 ",
        input: "border-green-300 dark:border-green-600 dark:bg-white dark:text-black",
        inputIcon: "dark:bg-black",
        selected: "dark:bg-white dark:text-green-500",
    },
    icons: {
        prev: () => <span className="text-sm text-white">הקודם</span>,
        next: () => <span className="text-sm text-white">הבא</span>,
    },
    datepickerClassNames: "top-10",
    language: "he",
    weekDays: ["א", "ב", "ג", "ד", "ה", "ו", "ש"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "בחר תאריך",
    inputDateFormatProp: {
        day: "numeric",
        month: "long",
        year: "numeric",
    },
};
