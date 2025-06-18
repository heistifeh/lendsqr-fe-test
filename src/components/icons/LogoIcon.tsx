const LogoIcon = ({...props}) => {
    return (
      <svg
        width={25}
        height={26}
        viewBox="0 0 25 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 1.665c0-.552.443-1 .99-1h2.97c.547 0 .99.448.99 1v18.003c0 .553.443 1 .99 1h12.87c.547 0 .99-.447.99-1v-3c0-.553-.443-1-.99-1h-5.94c-1.64 0-2.97-1.344-2.97-3V3.665c0-1.657 1.33-3 2.97-3h8.91c1.64 0 2.97 1.343 2.97 3v19.003c0 1.657-1.33 3-2.97 3H2.97c-1.64 0-2.97-1.343-2.97-3V1.665zm19.8 5.001c0-.552-.443-1-.99-1h-3.96v4c0 .553.443 1 .99 1h3.96v-4z"
          fill="url(#paint0_linear_6819_58336)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_6819_58336"
            x1={-0.00000187183}
            y1={37.9211}
            x2={26.2531}
            y2={-5.22382}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#213F7D" />
            <stop offset={1} stopColor="#39CDCC" />
          </linearGradient>
        </defs>
      </svg>
    )
  }
  
  export default LogoIcon