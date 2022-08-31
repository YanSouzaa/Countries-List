import xl from "excel4node";
const wb = new xl.Workbook();
const ws = wb.addWorksheet('Countries List');

export const writeToExcel = (data) => {

    var styleTitle = wb.createStyle({
        font: {
            color: '#4F4F4F',
            size: 16,
            bold: true,
            name: 'Times New Roman',
        },
        alignment:{
            horizontal:'center',
        }
    });

    var styleColumn = wb.createStyle({
        font: {
            color: '#808080',
            size: 12,
            bold: true,
            name: 'Times New Roman',
        }
    });
    
    
    var styleAll = wb.createStyle({
        font: {
          size: 10,
          name: 'Times New Roman',
        },
        numberFormat: '#,##0.00; (#,##0.00); -',
      });
    ws.cell(2, 1, 2, 4)
    .style(styleColumn);

    ws.cell(3, 1, 252, 4)
    .style(styleAll);
    
    const headers = [
        "Name",
        "Capital",
        "Area",
        "Currencies",
    ]
    ws.cell(1, 1, 1, 4, true)
    .string("Countries List")
    .style(styleTitle);

    let headingColumnIndex= 1;
headers.forEach(header => {
    ws.cell(2, headingColumnIndex++).string(header);
});

data.sort(function(x,y){
    let a = x.name.common,
    b = y.name.common;
    return a == b ? 0 : a > b ? 1 : -1
})

let rowIndex = 3;
data.forEach(record => {
    let columnIndex = 1;
 if(columnIndex == 1){
     ws.cell(rowIndex, columnIndex++).string(record.name.common)
    }
    
    if(columnIndex == 2){
        if(record.capital != null){
            ws.cell(rowIndex, columnIndex++).string(record.capital)
        }else{
            ws.cell(rowIndex, columnIndex++).string("-")
        }
    }
    
    if(columnIndex == 3){
        if(record.area != null){
            ws.cell(rowIndex, columnIndex++).number(record.area)
        }else{
            ws.cell(rowIndex, columnIndex++).string("-")
        }
    }
    
    if(columnIndex == 4){
        const currencyName = record.currencies ? Object.keys(record.currencies) : null
        if (currencyName != null){
            ws.cell(rowIndex, columnIndex++).string(currencyName.join())
        }else {
            ws.cell(rowIndex, columnIndex++).string("-")

        }
    }
    rowIndex++;
});

wb.write('CountriesList.xlsx');
console.log("Planilha gerada com sucesso!!");

}

