export interface Rating {
  user: { userPic: string; name: string };
  course: string;
  star: number;
  description: string;
  date: string;
  numOfReplies: number;
}
