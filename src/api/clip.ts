import type { ClipInfo, LatestClips } from '../types/clip'

const DEFAULT_URL = 'https://chzzk-pip.kosame.dev/api'

export const getKey = (pageIndex: number, previousPageData: LatestClips): string | null => {
  if (previousPageData?.status === 'nodata') return null
  return `${DEFAULT_URL}/latest?page=${pageIndex + 1}`
}

export const getLatestClips = async (url: string): Promise<LatestClips> => {
  return await fetch(url)
    .then(async res => await res.json())
}

export const getClip = async (id: string): Promise<ClipInfo> => {
  return await fetch(`${DEFAULT_URL}/info/${id}`)
    .then(async res => await res.json())
}

export const getReleativeTimedelta = (date: Date): string => {
  const now = new Date()
  const diff = now.getTime() - new Date(date).getTime()

  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) return `${days}일 전`
  if (hours > 0) return `${hours}시간 전`
  if (minutes > 0) return `${minutes}분 전`
  if (seconds > 0) return `${seconds}초 전`
  return '방금 전'
}
