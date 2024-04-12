export interface Clip {
  id: string
  title: string
  viewers: number
  uploadDate: Date
  thumbnailDataURL: string
}

export interface LatestClips {
  status: ClipResponseStatus
  clips?: Clip[]
  page?: number
}

type ClipResponseStatus = 'success' | 'error' | 'nodata'
