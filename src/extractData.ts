import { getCities } from './cities';
import { exportToExcel } from './exportExcel';

export const exportToExcelPrepare = async () => {

    const cities = getCities();
    const workSheetName = "Cities";
    const filePath = './src/files/cites.xlsx';
    
    const workSheetColumnNames = [
        "Cidade",
        "Estado",
        "Uf"
    ];

    const arrayCities = cities.map((city) => {
        return [
            city.name,
            city.state,
            city.uf
        ];
    });

    exportToExcel(arrayCities, workSheetColumnNames, workSheetName, filePath);
}
