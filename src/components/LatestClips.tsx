import { Link } from 'react-router-dom'

import { useInfiniteScrollUsingInterSectionObserver } from '../hooks/infScroll'
import { getKey, getLatestClips } from '../api/clip'
import Question from '../assets/question.svg'
import styles from '../styles/latest-clips.module.css'
import Clip from './Clip'
import useSWRInfinite from 'swr/infinite'
import Spinner from './Spinner'
import { useEffect, useRef } from 'react'

function LatestClips (): JSX.Element {
  const { data, isLoading, isValidating, setSize } = useSWRInfinite(getKey, getLatestClips, { revalidateFirstPage: false })
  const dummy = useRef(null)

  const [observe, unobserve] = useInfiniteScrollUsingInterSectionObserver(() => {
    void setSize((size) => size + 1)
  })

  useEffect(() => {
    if (isLoading) {
      unobserve(dummy.current)
    } else {
      observe(dummy.current)
    }
  }, [isLoading, observe, unobserve])
  const clips = []
  for (const page of data ?? []) {
    if (page.status === 'success' && page.clips !== undefined) {
      clips.push(...page.clips)
    }
  }

  if (!isLoading && clips?.length === 0) {
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

      {isLoading && <Spinner />}

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
                  date={x.uploadDate}
                  thumbnail={x.thumbnailDataURL}
                />
              </Link>
            )
          }
        )}
        <div ref={dummy} className={styles.scr33qzxdcv} />
      </div>
      {(!isLoading && isValidating) &&
        <div className={styles.load}>
          <Spinner />
        </div>}

    </div>

  )
}

export default LatestClips
