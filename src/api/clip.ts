import type { LatestClips } from '../types/clip'

const DEFAULT_URL = 'https://chzzk-pip.kosame.dev/api'

export const getKey = (pageIndex: number, previousPageData: LatestClips): string | null => {
  if (previousPageData?.status === 'nodata') return null
  return `${DEFAULT_URL}/latest?page=${pageIndex + 1}`
}

export const getLatestClips = async (url: string): Promise<LatestClips> => {
  return await fetch(url)
    .then(async res => await res.json())
}
