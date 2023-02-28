import db, { IExportModel, Member } from '@/database/db'

export default async function DbImport(override: boolean, data: IExportModel) {
    if(override){
        await db.members.clear();    
    }
    
    data.members?.forEach(async (el: Member) => {
        await db.members.add(el);
    });
}