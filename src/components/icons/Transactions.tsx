const Transactions = ({...props}) => {
    return (
      <svg
          width={16}
          height={18}
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M13 5.945V1A1.002 1.002 0 0012 0H1a1 1 0 00-1 1v16a.999.999 0 001 1h11a1 1 0 001-1v-4.055h-1v4.054H1V1h11v4.946h1z"
            fill="currentColor"
          />
          <path
            d="M2 13.995h9v1H2v-1zM2 2.495h9v1H2v-1zM5.75 15.495a.5.5 0 000 1h1.5a.5.5 0 100-1h-1.5zM11 6.445H6.5v-2l-4 2.5 4 2.5v-2H11v-1z"
            fill="currentColor"
          />
          <path d="M16 9.445l-4-2.5v2H7.5v1H12v2l4-2.5z" fill="#213F7D" />
      </svg>
    )
  }
  
  export default Transactions