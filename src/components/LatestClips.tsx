import styles from '../styles/latest-clips.module.css'
import Clip from './Clip'

import Question from '../assets/question.svg'

function LatestClips (): JSX.Element {
  return (
    <div className={styles.latestClips}>
      <h2>최근 업로드 된 클립</h2>
      <div className={styles.clips}>
        <Clip title='Test' id='abcde' viewers={0} />
      </div>

      <div className={styles.noClips}>
        <div id={styles.msg}>
          <img src={Question} alt='Question mark' />
          <span>최신 클립이 없어요. </span>
        </div>
      </div> */
    </div>
  )
}

export default LatestClips
