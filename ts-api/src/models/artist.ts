import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Song } from "./song";


@Entity("artists")
export class Artist {
    @PrimaryGeneratedColumn()
    id!:number

    @Column({unique:true})
    name!:string

    @Column({nullable:true})
    genre?:string

    @Column({nullable:true})
    country?:string

    @OneToMany(()=>Song, song => song.artist)
    songs?: Song[]
}