export interface EpisodeProgress {
  _id?: string;
  name: string;

  time: string;

  isCompleted?: boolean;
}

export interface ChapterProgress {
  _id?: string;

  name: string;

  totalTime: string;

  episodes: EpisodeProgress[];

  totalEpisodes: number;

  numOfcompletedEpisodes: number;

  isCompleted?: boolean;
}

export interface CourseProgress {
  user: string;

  course?: { title: string; lecture: string; university: string; subject: string };

  chapters: ChapterProgress[];

  totalChapters: number;

  numOfCompletedChapters?: number;

  isCompleted?: boolean;
}
