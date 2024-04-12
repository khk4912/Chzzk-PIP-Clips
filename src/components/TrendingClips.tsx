import styles from '../styles/latest-clips.module.css'

import Question from '../assets/question.svg'

function TrendingClips (): JSX.Element {
  return (
    <div className={styles.latestClips}>
      <h2>조회수가 높은 인기 클립</h2>
      <div className={styles.clips}>
        {/* <Clip title='Test' id='abcde' viewers={0} /> */}
      </div>

      <div className={styles.noClips}>
        <div id={styles.msg}>
          <img src={Question} alt='Question mark' />
          <span>인기 높은 클립을 불러오지 못했어요. </span>
        </div>
      </div>
    </div>
  )
}

export default TrendingClips
