const app = Sammy('#main', function(){
    this.use('Handlebars', 'hbs');
    this.before({except: {}}, function() {
        user.initializeLogin();
    });

    $(document).on({
        ajaxStart: function () {
            $('#loadingBox').show()
        },
        ajaxStop: function () {
            $('#loadingBox').hide()
        }
    })

    this.get('#/', home.index);
    this.get('#/register', user.getRegister);
    this.post('#/register', user.postRegister);
    this.get('#/logout', user.logout);
    this.get('#/login', user.getLogin);
    this.post('#/login', user.postLogin);
    this.get('#/allsongs', songs.getSongs);
    this.get('#/addSong', songs.getAddSong);
    this.post('#/addSong', songs.postAddSong);
    this.get('#/mysong', songs.getMySongs);

    this.post('#/delete:id', songs.postDeleteSong);

    this.post('#/listen:id', songs.postPutListen);
    this.post('#/like:id', songs.postPutLikes);

    this.post('#/delete/my:id', songs.postMyDeleteSong);
    this.post('#/listen/my:id',songs.postMyPutListen)
});

$(function(){
    app.run('#/');
});