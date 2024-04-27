import useSWR from 'swr'
import style from '../styles/watch.module.css'
import { useParams } from 'react-router-dom'
import { getClip, getReleativeTimedelta } from '../api/clip'

import Question from '../assets/question.svg'
import Spinner from './Spinner'
import TimeIcon from '../assets/time.svg'
import { useCallback, useState } from 'react'

const WatchClip = (): JSX.Element => {
  const { id } = useParams()
  const [isDownloading, setIsDownloading] = useState(false)

  const downloadClip = useCallback(async (clipId: string) => {
    setIsDownloading(true)

    const response = await fetch(`https://r2-clips.kosame.dev/${clipId}`)
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)

    const a = document.createElement('a')

    a.href = url
    a.download = `${clipId}.mp4`
    a.click()

    window.URL.revokeObjectURL(url)
    setIsDownloading(false)
  }, [])

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

        <div className={style.clip}>
          <video src={`https://r2-clips.kosame.dev/${data?.id}`} controls autoPlay playsInline />
          <div className={style.clipInfo}>
            <div className={style.clipHeader}>
              <span id={style.title}>{data.title}</span>
              <button id={style.downloadButton} onClick={() => { void downloadClip(data?.id) }}>{isDownloading ? '다운로드 중...' : '다운로드     '}</button>
            </div>
            <div className={style.clipMeta}>
              <div className={style.timeMeta}>
                <img id={style.timeIcon} src={TimeIcon} alt='Time icon' />
                <span>{new Date(data.uploadDate).toLocaleDateString('ko-KR')}   ({getReleativeTimedelta(data.uploadDate)})</span>
              </div>

              <div className={style.viewMeta}>
                <span>조회수 {data.viewers.toLocaleString()}회</span>
              </div>

            </div>
          </div>
        </div>}

    </div>

  )
}

export default WatchClip
