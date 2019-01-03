const songsModel=function () {
    let songUrl = `appdata/${storage.appKey}/songs`
    const addSong = function (param) {
        let title=param.title;
        let artist=param.artist;
        let imageURL=param.imageURL;
            let data = {
                title,
                artist,
                imageURL,
                likes:0,
                lisened:0
            };
            return requester.post(songUrl,data);

    };
    const getSongsFromDb=function () {
        return requester.get(songsModel.songUrl)
    };
    const getMySongsFromDb=function () {
        //https://baas.kinvey.com/appdata/app_id/songs?query={"_acl.creator":"${user_id}"}
        let url=songUrl+ `?query={"_acl.creator":"${storage.getData("userInfo").id}"}`;
        return requester.get(url);
    }
    const deleteSong = function (id) {
        let url=songUrl+"/"+id;
        return requester.del(url)
    };
    const putListen=async function (id) {
        //https://baas.kinvey.com/appdata/app_id/songs/song_id
        let url=songUrl+"/"+id;

        let song = await requester.get(url);
        notification.info(`You've just listened to ${song.title}`);
        song.lisened++;
        return requester.put(url,song);

    };
    const putLike=async function (id) {
        let url=songUrl+"/"+id;


        let song = await requester.get(url);


        song.likes++;
        return requester.put(url,song);
    }
    return{
        addSong,
        songUrl,
        getSongsFromDb,
        deleteSong,
        putListen,
        putLike,
        getMySongsFromDb

    }
}();