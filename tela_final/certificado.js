const nome = document.getElementById("nome-aluno")
const data = document.getElementById("data-conclusao")
nome.textContent =JSON.parse(localStorage.getItem("nome"))
data.textContent = "Data de conclusão: "+getCurrentDate()
function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
    const year = today.getFullYear();
    
    return `${day}/${month}/${year}`;
}


async function generatePDF() {
    const { jsPDF } = window.jspdf;
    var content = document.getElementById('content');

    // Aumentar a escala para melhorar a qualidade
    const canvas = await html2canvas(content, {
        scale: 3,
        useCORS: true
    });

    var imgData = canvas.toDataURL('image/png');
    var imgWidth = 190;  // Largura da imagem no PDF
    var pageHeight = 290;  // Altura da página no PDF
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;

    var doc = new jsPDF('p', 'mm', 'a4');
    var position = 10;  // Primeira posição de inserção

    doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
    }

    doc.save('certificado-sqlvampire.pdf');
}
