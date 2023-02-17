import xlsx from 'xlsx';
import path from 'path';

export const exportToExcel = (cities: string[][], workSheetColumnNames: any, workSheetName: string, filePath: string) => {

  const workBook = xlsx.utils.book_new();

  const workSheetData = [workSheetColumnNames, ...cities];
  const workSheet = xlsx.utils.aoa_to_sheet(workSheetData);
  xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
  xlsx.writeFile(workBook, path.resolve(filePath));

}