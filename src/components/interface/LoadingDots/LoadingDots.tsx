import classnames from 'classnames'
import PropTypes from 'prop-types'

interface LoadingDotsProps {
  size?: 'default' | 'sm'
}

const LoadingDots: React.FC<LoadingDotsProps> = ({ size = 'default' }) => {

  return (
    <span className='loading-dots'>
      {
        [...Array(3)].map((dot: unknown, index: number) => (
          <span className={classnames('dot', {'smallDot': size === 'sm'})} key={`dot_${index + 1}`} />
        ))
      }
    </span>
  )
}

export default LoadingDots

LoadingDots.propTypes = {
  size: PropTypes.oneOf(['default', 'sm'])
}
