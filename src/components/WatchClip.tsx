import style from '../styles/watch.module.css'
import { useParams } from 'react-router-dom'
const WatchClip = (): JSX.Element => {
  const { id } = useParams()

  return (
    <div className={style.watch}>
      <video src={`https://clips.kosame.dev/${id}`} controls autoPlay />
    </div>
  )
}

export default WatchClip
