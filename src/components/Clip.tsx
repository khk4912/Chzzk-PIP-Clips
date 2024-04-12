import styles from '../styles/clip.module.css'

export interface ClipProps {
  title: string
  id: string
  viewers: number
  thumbnail: string
}

function Clip (props: ClipProps): JSX.Element {
  return (
    <div className='clip'>
      <div className={styles.infoContainer}>
        <img src={props.thumbnail} alt='thumbnail' id={styles.thumbnail} />
        <span id={styles.viewerCount}>{props.viewers} 회</span>
      </div>
      <span id={styles.titleSpan}>{props.title}</span>
    </div>
  )
}

export default Clip
