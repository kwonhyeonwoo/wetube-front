export interface ShortsCmtResponse {
  _id: string;
  comment: string;
  owner: {
    avatar?: string;
    nickName: string;
    _id: string;
  };
  createdAt: Date;
  shorts: string;
}