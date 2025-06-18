import React, { SelectHTMLAttributes, forwardRef, useRef } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { mergeRefs } from 'react-merge-refs'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: { label: string; value: string | number }[]
    placeholder?: string
    onChange?: (...args: any[]) => any
    className?: string
    variant?: 'primary' | 'pagination'
}

const Select: React.FC<SelectProps> = forwardRef(({
    options,
    placeholder,
    onChange,
    className,
    variant = 'primary',
    ...rest
    }, ref) => {
    const selectRef = useRef<HTMLSelectElement>(null)

    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if(onChange) {
            onChange(e)
        }
        return null
    }

    const selectStyles = `${variant}`;

    return (
        <label className={classnames('select', className, selectStyles)}
        >
            <select
                defaultValue=''
                onChange={handleOnChange}
                ref={mergeRefs([ref, selectRef])}
                {...rest}
            >
                {
                    placeholder &&
                    <option className='placeholder' value=''>
                        { placeholder }
                    </option>
                }
                {options?.map((option) => (
                    <option key={option.value} value={option.value}>
                    {option.label}
                    </option>
                ))}
            </select>
        </label>
    );
});

Select.displayName = 'Select'

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
  ).isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'pagination']),
}

export default Select