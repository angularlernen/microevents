import { Profile } from "../profiles/profile";

export interface MicroEvent {
  id: number;
  title: string;
  shortDescription: string;
  eventDate: Date;
  pictureUrl: string;
  organizerId: number;
  participants: Profile[];
}
