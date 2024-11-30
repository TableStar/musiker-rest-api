import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Artist } from "./artist";

@Entity("songs")
export class Song {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column({ nullable: true })
  release_year!: number;

  @ManyToOne(() => Artist, (artist) => artist.songs)
  @JoinColumn({ name: "artist_id" })
  artist!: Artist;
}
