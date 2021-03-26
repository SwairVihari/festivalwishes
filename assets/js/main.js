function myFn() {
    var a = new URL(window.location.href);
    var b = a.searchParams.get('name');
    if (b == null || b == '') {
        var displayNone = document.getElementById("share");
        displayNone.style.display = "none";
    } else {
        var x = document.getElementsByClassName('wishText');
        x[0].innerHTML = b;
        var c = document.getElementById("sharetxt");
        c.innerHTML = "I'm " + b + " please open this 👉 " + a;
        var t = "I'm " + b + " please open this 👉 " + a;
        window.prompt("Copy below link to share with your friends: ", t);
        console.log("c", c);
    }
}

function nameFn() {
    console.log('ds');
}
