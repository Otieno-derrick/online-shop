
const tablinks = document.querySelectorAll("div.tablinks");
const tabcontent = document.querySelectorAll("div.tabcontent");



  
 











//login_------


for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].onclick = (e) => {
        openForm(e.target.getAttribute('data-form-id'), e.target.getAttribute('id'));
    };
}

function openForm(formid, tabid) {
    let links = document.querySelectorAll("div.tablinks");
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(formid).style.display = "block";
    document.getElementById(tabid).classList.add("active");
}
document.getElementById("logintab").click();