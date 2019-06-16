/* 
THIS IS MY FIRST EXERCISE AND I WOULD LIKE TO MAKE A CONSTRUCTOR OF SONG OBJECTS
AND THEN USE CONSOLE LOG TO ELABORATE THE USAGE PER EACH DATA TYPE
*/

//FIRST THE SONG DEFINITION CONSTRUCTOR
function SongList(genre,artist,album,year,songTitle,similarSongs){
    this.genre = genre;
    this.artist = artist;
    this.album = album;
    this.year = year;
    this.songTitle = songTitle;
    this.similarSongs = similarSongs;
    this.showSongDetails = function(){
        console.log(
            "The title of the song is: "+ this.songTitle +"\n"+
            "The name of the artist is: "+this.artist+"\n"+
            "The album of the song is: " + this.album +"\n"+
            "The year of the release is: " + this.year + "\n"+
            "the genre of the song is: " + this.genre + "\n"
            );
    }
}

//Now I will create some favorite songs list using the above function
var firstSong = new SongList("Rock","Bruce Springsteen","Tunnel of love",1987,"brilliant disguise",["born to run","mansion on the hill"]);
firstSong.showSongDetails();
console.log(firstSong.similarSongs);
var secondSong = new SongList("Funk","Prince and the new Power generation","Gett off",1990,"Gangster Glam",["Gett off","cream"]);
console.log(secondSong.similarSongs);
secondSong.showSongDetails();
//Now I will  make a list of all songs in an array
var songList = [firstSong,secondSong];
songList[0].showSongDetails;
songList[1].showSongDetails;
//Now I am creating a  new song to push it to the arrat list of other songs
var thirdSong = new SongList("Electro Funk","Moodyman","Insparations of a small black church", 1993, "I like to know", ["I can't kick this feeling when it hits", "for ever more"]);
songList.push(thirdSong);
console.log(songList.length);
var lastSongSimilarSongs = songList[songList.length-1].similarSongs;
console.log(lastSongSimilarSongs);
// getting the type of the results of the similar last song 
console.log(typeof(lastSongSimilarSongs));


