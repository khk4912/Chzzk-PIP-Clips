import style from '../styles/watch.module.css'
import { useParams } from 'react-router-dom'

const WatchClip = (): JSX.Element => {
  const { id } = useParams()
  if (id === undefined) return <div>클립 ID가 없습니다.</div>

  return (
    <div className={style.watch}>
      <video src={`https://clips.kosame.dev/${id}`} controls autoPlay playsInline />

      <div className={style.clipInfo}>
        <h2>클립 정보</h2>
        <p>클립 ID: {id}</p>
      </div>
    </div>
  )
}

export default WatchClip
