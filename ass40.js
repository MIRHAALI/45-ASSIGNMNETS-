function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Creating three albums and printing them
var album1 = make_album('Adele', '30');
var album2 = make_album('Taylor Swift', 'Evermore', 15);
var album3 = make_album('The Weeknd', 'After Hours', 14);
console.log(album1);
console.log(album2);
console.log(album3);
