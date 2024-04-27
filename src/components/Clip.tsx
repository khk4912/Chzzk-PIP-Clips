import { getReleativeTimedelta } from '../api/clip'
import styles from '../styles/clip.module.css'

export interface ClipProps {
  title: string
  id: string
  viewers: number
  thumbnail: string
  date: Date
}

function Clip (props: ClipProps): JSX.Element {
  return (
    <div className={styles.clips}>
      <div className={styles.infoContainer}>
        <img src={props.thumbnail} alt='thumbnail' id={styles.thumbnail} />
        <span id={styles.viewerCount}>{props.viewers.toLocaleString()} 회</span>
        <span id={styles.dateSpan}>{getReleativeTimedelta(props.date)}</span>
      </div>
      <span id={styles.titleSpan}>{props.title}</span>
    </div>
  )
}

export default Clip
