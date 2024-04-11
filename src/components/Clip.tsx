import styles from '../styles/clip.module.css'

export interface ClipProps {
  title: string
  id: string
  viewers: number
}

function Clip (props: ClipProps): JSX.Element {
  return (
    <div className='clip'>
      <div className={styles.infoContainer}>
        <img src='https://picsum.photos/1920/1080' alt='placeholder' id={styles.thumbnail} />
        <span id={styles.viewerCount}>{props.viewers} 회</span>
      </div>
      <span id={styles.titleSpan}>{props.title}</span>
    </div>
  )
}

export default Clip
