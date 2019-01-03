const songs=function () {
    const getSongs = function (ctx) {
        let songs={};
        songsModel.getSongsFromDb().done(function (response) {
            let currentUser=storage.getData("userInfo")._acl.creator;
            songs=response.filter((x)=>{
                if(x._acl.creator===currentUser){
                    x["is"]=true;
                }else {
                    x["is"]=false;
                }
                return x;
            });
            ctx.songs=songs;
            ctx.partial('views/songs/allSongs.hbs')

        })
    };
    const getAddSong = function (ctx) {

        ctx.partial('views/songs/addSong.hbs')
    };
    const postAddSong = function (ctx) {
        console.log("here")
            songsModel.addSong(ctx.params)
                .done(function (response) {
                notification.info("Song created successfully.");
                ctx.redirect("#/allsongs");
                }).catch(function () {

            })



    };
    const getMySongs = function (ctx) {

        let songs={};
        songsModel.getMySongsFromDb().done(function (response) {
            let currentUser=storage.getData("userInfo")._acl.creator;
            songs=response.filter((x)=>{
                if(x._acl.creator===currentUser){
                    x["is"]=true;
                }else {
                    x["is"]=false;
                }
                return x;
            });
            let sortedSongs=songs.sort((a,b)=>b.likes-a.likes||b.lisened-a.lisened);
            ctx.songs=sortedSongs;
            ctx.partial('views/songs/mySongs.hbs')

        })

    };
    const postDeleteSong = function (ctx) {
        let id = ctx.params.id.substring(1);

        songsModel.deleteSong(id)
            .done(function () {
                notification.info("Song removed successfully!")
                ctx.redirect("#/allsongs");
            })
    };
    const postMyDeleteSong = function (ctx) {
        let id = ctx.params.id.substring(1);

        songsModel.deleteSong(id)
            .done(function () {
                notification.info("Song removed successfully!")
                ctx.redirect("#/mysong");
            })
    };
    const postPutListen = function (ctx) {
        let id=ctx.params.id.substring(1);

        songsModel.putListen(id).then(function () {

            ctx.redirect("#/allsongs");
        })

    };
    const postMyPutListen = function (ctx) {
        let id=ctx.params.id.substring(1);

        songsModel.putListen(id).then(function () {

            ctx.redirect("#/mysong");
        })
    }
    const postPutLikes = function (ctx) {
    let id=ctx.params.id.substring(1);
        songsModel.putLike(id).then(function () {
            notification.info("Liked")
            ctx.redirect("#/allsongs");
        })
    };
    return {
        getSongs,
        getAddSong,
        postAddSong,
        postDeleteSong,
        postPutListen,
        postPutLikes,
        getMySongs,
        postMyDeleteSong,
        postMyPutListen
    }
}();