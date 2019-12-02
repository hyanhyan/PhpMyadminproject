function myFunction() {
    if (document.getElementById('general')) {

        if (document.getElementById('general').style.display == 'none') {
            document.getElementById('general').style.display = 'block';
            document.getElementById('table').style.display = 'none';
        }
        else {
            document.getElementById('general').style.display = 'none';
            document.getElementById('table').style.display = 'block';
        }
    }
}