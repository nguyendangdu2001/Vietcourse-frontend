export interface Comment {
  _id?: string;
  post: string;
  user: { name: string; userPic: string };
  dateCreated: string;
  text: string;
}
