// To read data from Excel, install the xlsx package:
// npm install xlsx

import XLSX from 'xlsx'

export class Utils {

    ReadExcelData(filePath: string) {

        // Read the Excel file from the given path
        const workbook = XLSX.readFile(filePath)

        // Get the first sheet name
        const sheetName = workbook.SheetNames[0]

        // Get the data from the first sheet
        const sheetData = workbook.Sheets[sheetName]

        // Convert Excel sheet data into JSON
        const data = XLSX.utils.sheet_to_json(sheetData)

        // Return the JSON data
        return data
    }
}