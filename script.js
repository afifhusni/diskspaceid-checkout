function gotowhatsapp() {

    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var province = document.getElementById('province').value;
    var street = document.getElementById('street').value;
    var details = document.getElementById('details').value;
    var size = document.getElementById('size').value;

    var url = "https://wa.me/6285559355551?text=" +
        name + "%0a" +
        phone + "%0a" +
        province + "%0a" +
        street + "%0a" +
        details + "%0a" +
        "Size : " + size;

    window.open(url, '_blank').focus();
}