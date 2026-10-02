 
import XLSX, { readFile } from 'xlsx';
 
 
 export class Utils{
ReadExcelData(filePath : string) {
    const workbook = XLSX.readFile(filePath);
    const SheetName = workbook.SheetNames[0];
    const SheetData = workbook.Sheets[SheetName];
    const data = XLSX.utils.sheet_to_json(SheetData); 
    return data;
}
 }