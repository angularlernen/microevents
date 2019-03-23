import { Profile } from "../profiles/profile";

export interface MicroEvent {
  id: number;
  title: string;
  shortDescription: string;
  eventDate: any;
  pictureUrl: string;
  organizerId: number;
  participants: Profile[];
}
