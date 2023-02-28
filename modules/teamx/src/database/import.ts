import db, { IExportModel, Member } from '@/database/db'

export default async function DbImport(override: boolean, data: IExportModel) {
    if(override){
        await db.members.clear();    
    }
    
    for(const item of data.members){
        await db.members.add(item);
    };
}