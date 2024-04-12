import type { LatestClips } from '../types/clip'

const DEFAULT_URL = 'https://chzzk-pip.kosame.dev/api'

export const getLatestClips = async (page: number): Promise<LatestClips> => {
  return await fetch(
    `${DEFAULT_URL}/latest?page=${page}`
  ).then(async res => await res.json())
}
