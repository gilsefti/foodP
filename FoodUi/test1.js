(function (d) {
    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement('script'); js.id = id; js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
}(document));

//FB.Event.subscribe('auth.login', function (response) {
//    alert('login event fired !!');
//});

//FB.Event.subscribe('auth.logout', function (response) {
//    alert('logout event fired !!');
//});


//FB.Event.subscribe('auth.statusChange', function (response) {
//    alert('statusChange event fired !!');
//});


document.addEventListener('deviceready', function () {
    try {
        alert('Device is ready! Write your app id below .For demo i put my app id there.');
        FB.init({ appId: "509210995889450", nativeInterface: CDV.FB, useCachedDialogs: false });
        document.getElementById('data').innerHTML = "";
    } catch (e) {
        alert(e);
    }
}, false);


function login() {
    FB.login(
             function (response) {
                 if (response.session) {
                     alert('you are logged in');
                 } else {
                     alert('you are not logged in');
                 }
             },
             { scope: "email" }
             );
}

function logout() {
    FB.logout(function (response) {
        alert('logged out');
    });
}


function getLoginStatus() {
    FB.getLoginStatus(function (response) {
        if (response.status == 'connected') {
            alert('You are connected to Fb');
        } else {
            alert('not connected to FB');
        }
    });
}