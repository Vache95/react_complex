import './styles.scss'


const Button = ({ 
   children,
   rest,
   className,
   disabled = false,
   isLoading = false,
   onClick = () => {}
}) => 
 (
    <button
        { ...rest }
        className={ className }
        disabled = { disabled || isLoading }
        onClick={onClick}
      >
        {children}
      </button>
  )


export default Button