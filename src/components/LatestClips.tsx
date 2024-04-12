import styles from '../styles/latest-clips.module.css'
import Clip from './Clip'

import Question from '../assets/question.svg'
import useSWR from 'swr'
import { getLatestClips } from '../api/clip'

function LatestClips (): JSX.Element {
  const { data, isLoading } = useSWR('clip', async () => await getLatestClips(1))

  return (
    <div className={styles.latestClips}>
      <h2>최근 업로드 된 클립</h2>

      {isLoading && <div>로딩 중...</div>}

      {!isLoading &&
        data?.status === 'error'

        ? (
          <div className={styles.noClips}>
            <div id={styles.msg}>
              <img src={Question} alt='Question mark' />
              <span>최신 클립이 없어요. </span>
            </div>
          </div>
          )

        : (
          <div className={styles.clips}>
            {data?.clips?.map(
              (x) => {
                return (
                  <Clip
                    key={x.id}
                    title={x.title}
                    id={x.id}
                    viewers={x.viewers}
                    thumbnail={x.thumbnailDataURL}
                  />
                )
              }
            )}
          </div>
          )}

    </div>

  )
}

export default LatestClips
