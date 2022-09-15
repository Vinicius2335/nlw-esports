export interface Games {
  id: string;
  title: string;
  bannerUrl: string;
  _count: Count;
}

export interface Count {
  Ads: number
}