export interface Detail {
    title: string;
    chapter: Chapter[];
    totalTime: string;
    totalchapter: string;
}
export interface Chapter {
    name: string;
    title: string;
}

export interface Course {
    title: string;
    subject: string;
    university: string;
    _id: string;
}

export interface CourseDetail extends Course {
    price: number;
    numOfStudent: string;
    pic: string;
    lastModified: string;
    details: Detail[];
    rating: number;
    lecture: string;
}
