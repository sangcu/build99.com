import db, { Member } from '@/database/db'

export interface IExportModel{
    members: Member[],
    teamName?: string,
    teamNote?: string
}

export default async function DbExport() {
    const members = await db.members.toArray();
    const exportModel: IExportModel ={
        members
    }

    const blob = new Blob([JSON.stringify(exportModel)], {
        type: "application/json",
    });

    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "yleader.json";
    a.click();
}