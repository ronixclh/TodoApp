import styles from './Button.module.css'

function Button(props) {
  const { onCLick, children, title, disabled = false } = props
  return (
    <button
      {...props}
      className={styles.button}
      onClick={onCLick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
