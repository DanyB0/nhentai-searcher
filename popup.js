// Author: DanyB0 (https://danyb0.me)
// This is my first javascript script :)

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('keyup', function(event) {
        // keyCode13 = Enter key
        if (event.keyCode === 13) {
            tot = nhentai();
            // check that the url exists (not invalid) and open it
            if (tot) {
                window.open(tot);
            }
        }
    });
}, false);

function nhentai() {
    // get the query from the input field
    var query = document.getElementById('input').value;
    var url = 'https://nhentai.net/search/?q='
    // concatenate the base url and the query and open it in a new tab
    var tot = url.concat(query);
    // check the query (if it's invalid display an error message)
    if (tot == 'https://nhentai.net/search/?q=' || tot == 'https://nhentai.net/search/?q=+' || tot == 'https://nhentai.net/search/?q=#') {
        document.getElementById('error').innerHTML += '<span>----------------------------------------<br>[X] </span>Invalid search<br>';
    }
    // open the link
    else {
        return tot
    }
}
