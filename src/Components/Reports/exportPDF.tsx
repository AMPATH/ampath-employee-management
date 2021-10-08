import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const exportPDF = (report) => {
  let row: any[] = [];
  let rowD: any[] = [];
  let col = ['', 'PF Number', 'Name', 'Contract status', 'Department', 'Project', 'Site', 'Program', 'County'];
  let title = 'Employees Status Report';
  for (let a = 0; a < report.length; a++) {
    row.push(a + 1);
    row.push(report[a].pfNumber);
    row.push(report[a].name);
    row.push(report[a].status);
    row.push(report[a].department);
    row.push(report[a].project);
    row.push(report[a].site);
    row.push(report[a].program);
    row.push(report[a].county);
    rowD.push(row);
    row = [];
  }
  getReport(col, rowD, title);
};

function getReport(col: any[], rowD: any[], title: any) {
  let date = new Date();
  const totalPagesExp = '{total_pages_count_string}';
  let pdf = new jsPDF('l', 'pt', 'legal');
  pdf.setTextColor(51, 156, 255);
  pdf.text(title, 435, 100);
  pdf.setLineWidth(1.5);
  // pdf.line(5, 107, 995, 107);
  var pageContent = function (data: { pageCount: string; settings: { margin: { left: any } } }) {
    var str = 'Page ' + data.pageCount;
    if (typeof pdf.putTotalPages === 'function') {
      str = str + ' of ' + totalPagesExp + `          ` + `Generated on ${date}`;
    }
    pdf.setFontSize(10);
    var pageHeight = pdf.internal.pageSize.height || pdf.internal.pageSize.getHeight();
    pdf.text(str, data.settings.margin.left, pageHeight - 10);
  };
  (pdf as any).autoTable(col, rowD, {
    addPageContent: pageContent,
    margin: { top: 110 },
  });

  if (typeof pdf.putTotalPages === 'function') {
    pdf.putTotalPages(totalPagesExp);
  }

  pdf.save(title + '.pdf');
}
