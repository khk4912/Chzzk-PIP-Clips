import type { ReactNode } from 'react'

import X_Symbol from '../assets/x-symbol.svg'
import styles from '../styles/alert.module.css'

interface AlertProps {
  children: ReactNode
  type: AlertType
}

type AlertType = 'success' | 'warning' | 'error'

const AlertColor: Record<AlertType, string> = {
  success: 'rgba(0, 103, 0, 0.5)',
  warning: 'rgba(255, 165, 0, 0.5)',
  error: 'rgba(255, 0, 0, 0.5)'
}

const Alert = ({ children, type }: AlertProps): JSX.Element => {
  const color = AlertColor[type]

  return (
    <div className={styles.alert} style={{ backgroundColor: color }}>
      <div className={styles.close}>
        <img src={X_Symbol} alt='닫기' className={styles.closeIcon} />
      </div>
      {children}
    </div>
  )
}

export default Alert
