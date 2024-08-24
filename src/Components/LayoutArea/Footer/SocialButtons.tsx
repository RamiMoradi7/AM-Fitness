export type SocialButtonsProps = {
    href: string
    iconClass: string;
    textColor: string;
    bgColor: string;
}


export default function SocialButtons({ href, iconClass, textColor, bgColor }: SocialButtonsProps): JSX.Element {


    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <button className={` bg-${bgColor} text-${textColor} shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3`} type="button">
                <i className={`flex fab ${iconClass} text-green-500`}></i>
            </button>
        </a>
    )
}