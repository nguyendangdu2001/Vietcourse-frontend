export interface Post {
  _id: string;
  user: { name: string; userPic: string };
  title: string;
  body: string;
  likeCount: number;
  commentCount: number;
  dateCreated: string;
}
