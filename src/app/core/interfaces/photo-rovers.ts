import { Camera } from "./camera";
import { Rover } from "./rover";

export interface PhotoRovers {
    id: number;
    sol: number;
    camera: Camera;
    img_src: string;
    earth_date: Date;
    rover: Rover;
}

export interface Photo {
    photos: PhotoRovers[]
}
