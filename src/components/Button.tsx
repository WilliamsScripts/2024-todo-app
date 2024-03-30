import React from "react"
type TButton = {
    type: 'submit' | 'button';
    title: string;
    variant: 'outline' | 'filled',
    onClick?: () => void,
    className?: string;
    titleClass?: string 
    disabled?: boolean
}


const Button = ({type = 'button', variant="filled", title, onClick, className, titleClass, disabled }: TButton) => {
    const outline = '';
    const filled = 'bg-[#3556AB] border-[#0D2972] border-2 shadow-[inset_0_5px_3px_-3px_rgba(255,255,255,0.2)]'
    return <button type={type} disabled={disabled} className={`disabled:opacity-80 ${className} ${variant === 'filled' ? filled: outline}`} onClick={onClick}>
        <span className={`${titleClass} ${variant === 'filled' ? '[text-shadow:0px_2px_1px_#030712] text-white': ''}`}>{title}</span>
    </button>
}




export default Button