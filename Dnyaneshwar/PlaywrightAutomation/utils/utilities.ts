import * as XLSX from 'xlsx';
export class Utils {
    ReadExcelData(filepath: string) {
        const workbook = XLSX.readFile(filepath)
        const SheetName = workbook.SheetNames[0]
        const SheetData = workbook.Sheets[SheetName]
        const data = XLSX.utils.sheet_to_json(SheetData);
        return data
    }


}