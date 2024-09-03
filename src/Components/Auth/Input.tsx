import { ComponentProps } from "react";
import { Control } from "react-hook-form";

type InputProps = ComponentProps<"input"> & {
    control?: Control<any>;
    name: string;
    type: "text" | "email" | "password" | "textarea" | "number";
    placeholder: string;
    icon?: JSX.Element;
    error?: string;
};

export default function Input({
    control,
    name,
    type,
    placeholder,
    icon,
    error,
    ...inputProps
}: InputProps): JSX.Element {
    const commonStyles =
        "border px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-full";

    const textareaStyles = "resize-y h-32";
    const errorStyles = "text-red-500 text-xs mt-1";

    return (
        <div className="flex flex-col mb-4">
            <div className="relative">
                {icon && (
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        {icon}
                    </div>
                )}
                <input
                    {...control.register(name)}
                    required
                    id={name}
                    className={`${commonStyles} ${type === "textarea" ? textareaStyles : ""} ${icon ? "pl-10" : ""
                        }`}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    {...inputProps}
                />
            </div>
            {error && <p className={errorStyles}>{error}</p>}
        </div>
    );
}
