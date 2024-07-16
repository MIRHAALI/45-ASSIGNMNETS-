interface Album {
    artist: string;
    title: string;
    tracks?: number;  // Optional parameter for number of tracks
}

function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

// Creating three albums and printing them
const album1 = make_album('Adele', '30');
const album2 = make_album('Taylor Swift', 'Evermore', 15);
const album3 = make_album('The Weeknd', 'After Hours', 14);

console.log(album1);
console.log(album2);
console.log(album3);
