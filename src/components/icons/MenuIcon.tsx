const MenuIcon = ({...props}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 256 256"
            {...props}
        >
            <path
                fill="currentColor"
                d="M224 128a8 8 0 01-8 8H40a8 8 0 010-16h176a8 8 0 018 8zM40 72h176a8 8 0 000-16H40a8 8 0 000 16zm176 112H40a8 8 0 000 16h176a8 8 0 000-16z"
            />
        </svg>
    )
}
      
export default MenuIcon