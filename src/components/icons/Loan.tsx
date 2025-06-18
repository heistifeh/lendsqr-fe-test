const Loan = ({...props}) => {
    return (
      <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clipPath="url(#clip0_64603_222)" fill="currentColor">
          <path
            opacity={0.4}
            d="M6 3h4L11.481.777A.5.5 0 0011.065 0h-6.13a.5.5 0 00-.415.777L6 3zm4 1H6C-.324 7.606.003 12.395.003 13c0 1.656 1.535 3 3.427 3h9.14c1.893 0 3.428-1.344 3.428-3 0-.594.292-5.414-5.998-9z"
          />
          <path d="M10.531 3.25v.5a.25.25 0 01-.25.25H5.72a.25.25 0 01-.25-.25v-.5a.25.25 0 01.25-.25h4.562a.25.25 0 01.25.25zM5.875 12.204V9.94H5v-.686h.875V7h1.238l1.23 2.255h.836V7h.946v2.255H11v.686h-.875v2.263H8.887L7.641 9.94h-.82v2.263h-.946zm.946-3.02v.07h.442l-.457-.922h-.008l.023.852zm2.373 1.71h.016l-.031-.82v-.133h-.465l.031.047.45.907z" />
        </g>
        <defs>
          <clipPath id="clip0_64603_222">
            <path fill="#fff" d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    )
  }
  
  export default Loan