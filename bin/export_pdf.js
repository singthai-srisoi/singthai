// export div id content to pdf
// using html2pdf
function exportPDF() {
    var element = document.getElementById('content');
    html2pdf
    .from(element)
    .save();
    html2pdf(element);
    console.log(element);
}