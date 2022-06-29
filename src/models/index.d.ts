import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ArtistMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AlbumMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SongMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Artist {
  readonly id: string;
  readonly name: string;
  readonly albums?: (Album | null)[] | null;
  readonly songs?: (Song | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Artist, ArtistMetaData>);
  static copyOf(source: Artist, mutator: (draft: MutableModel<Artist, ArtistMetaData>) => MutableModel<Artist, ArtistMetaData> | void): Artist;
}

export declare class Album {
  readonly id: string;
  readonly title: string;
  readonly artist?: Artist | null;
  readonly songs?: (Song | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Album, AlbumMetaData>);
  static copyOf(source: Album, mutator: (draft: MutableModel<Album, AlbumMetaData>) => MutableModel<Album, AlbumMetaData> | void): Album;
}

export declare class Song {
  readonly id: string;
  readonly title: string;
  readonly lyrics: string;
  readonly album?: Album | null;
  readonly artist?: Artist | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Song, SongMetaData>);
  static copyOf(source: Song, mutator: (draft: MutableModel<Song, SongMetaData>) => MutableModel<Song, SongMetaData> | void): Song;
}