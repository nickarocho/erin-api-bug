/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArtist = /* GraphQL */ `
  subscription OnCreateArtist($owner: String) {
    onCreateArtist(owner: $owner) {
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
export const onUpdateArtist = /* GraphQL */ `
  subscription OnUpdateArtist($owner: String) {
    onUpdateArtist(owner: $owner) {
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
export const onDeleteArtist = /* GraphQL */ `
  subscription OnDeleteArtist($owner: String) {
    onDeleteArtist(owner: $owner) {
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
export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum($owner: String) {
    onCreateAlbum(owner: $owner) {
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
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum($owner: String) {
    onUpdateAlbum(owner: $owner) {
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
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum($owner: String) {
    onDeleteAlbum(owner: $owner) {
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
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong($owner: String) {
    onCreateSong(owner: $owner) {
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
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong($owner: String) {
    onUpdateSong(owner: $owner) {
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
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong($owner: String) {
    onDeleteSong(owner: $owner) {
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
