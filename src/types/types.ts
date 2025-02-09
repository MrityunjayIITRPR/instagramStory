// types.ts
export interface Story {
  image: string;
  timestamp: string;
}

export interface UserStory {
  id: number;
  name: string;
  profileImage: string;
  stories: Story[];
}

export type StoriesData = UserStory[];
