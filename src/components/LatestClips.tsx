import { Link } from 'react-router-dom'

import { useInfiniteScroll } from '../hooks/infScroll'
import { getKey, getLatestClips } from '../api/clip'
import Question from '../assets/question.svg'
import styles from '../styles/latest-clips.module.css'
import Clip from './Clip'
import useSWRInfinite from 'swr/infinite'

function LatestClips (): JSX.Element {
  const { data, isLoading, isValidating, size, setSize } = useSWRInfinite(getKey, getLatestClips, { revalidateFirstPage: false })

  useInfiniteScroll(() => {
    if (isLoading || isValidating) return
    void setSize(size + 1)
  })

  const clips = data?.map((x) => x.clips).flat()

  if (clips?.length === 0) {
    return (
      <div className={styles.noClips}>
        <div id={styles.msg}>
          <img src={Question} alt='Question mark' />
          <span>최신 클립이 없어요. </span>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.latestClips}>
      <h2>최근 업로드 된 클립</h2>

      {isLoading && <div>로딩 중...</div>}

      <div className={styles.clips}>
        {clips?.map(
          (x) => {
            if (x === undefined) return null

            return (
              <Link to={`/watch/${x.id}`} key={`${x.id}_a`}>
                <Clip
                  key={x.id}
                  title={x.title}
                  id={x.id}
                  viewers={x.viewers}
                  thumbnail={x.thumbnailDataURL}
                />
              </Link>
            )
          }
        )}
      </div>
    </div>
  )
}

export default LatestClips
