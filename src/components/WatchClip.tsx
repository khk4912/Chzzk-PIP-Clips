import useSWR from 'swr'
import style from '../styles/watch.module.css'
import { useParams } from 'react-router-dom'
import { getClip } from '../api/clip'

import Question from '../assets/question.svg'
import Spinner from './Spinner'

const WatchClip = (): JSX.Element => {
  const { id } = useParams()
  // if (id === undefined) return <div>클립 ID가 없습니다.</div>

  const { data, isLoading } = useSWR(`${id ?? ''}`, getClip)
  const isDataValid = data?.status === 'success'

  return (
    <div className={style.watch}>
      {isLoading && <Spinner />}

      {!isLoading && !isDataValid &&
        <div className={style.noClips}>
          <div id={style.msg}>
            <img src={Question} alt='Question mark' />
            <span>클립을 찾을 수 없어요.
            </span>
          </div>
        </div>}

      {isDataValid &&
        <>
          <video src={`https://r2-clips.kosame.dev/${data?.id}`} controls autoPlay playsInline />
          <div className={style.clipInfo}>
            <h2>클립 정보</h2>
            <p>클립 ID: {id}</p>
          </div>
        </>}
    </div>
  )
}

export default WatchClip
