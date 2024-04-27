import styles from '../styles/spinner.module.css'

function Spinner (): JSX.Element {
  return (
    <div className={styles.loading}>
      <svg className={styles.spinner} viewBox='0 0 50 50'>
        <circle className={styles.path} cx='25' cy='25' r='20' fill='none' strokeWidth='5' />
      </svg>
    </div>
  )
}

export default Spinner
