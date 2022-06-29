/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArtist = /* GraphQL */ `
  query GetArtist($id: ID!) {
    getArtist(id: $id) {
      id
      name
      albums {
        items {
          id
          title
          artistId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      songs {
        items {
          id
          title
          lyrics
          albumId
          artistId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listArtists = /* GraphQL */ `
  query ListArtists(
    $filter: ModelArtistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        albums {
          nextToken
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getAlbum = /* GraphQL */ `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
      id
      title
      artistId
      artist {
        id
        name
        albums {
          nextToken
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      songs {
        items {
          id
          title
          lyrics
          albumId
          artistId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listAlbums = /* GraphQL */ `
  query ListAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        artistId
        artist {
          id
          name
          createdAt
          updatedAt
          owner
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
      id
      title
      lyrics
      albumId
      album {
        id
        title
        artistId
        artist {
          id
          name
          createdAt
          updatedAt
          owner
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      artistId
      artist {
        id
        name
        albums {
          nextToken
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        lyrics
        albumId
        album {
          id
          title
          artistId
          createdAt
          updatedAt
          owner
        }
        artistId
        artist {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
