import db from '@/database/db'
export default async function DbExport() {
    const members = await db.members.toArray();
    const blob = new Blob([JSON.stringify(members)], {
        type: "application/json",
    });

    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "yleader-data.json";
    a.click();
    URL.revokeObjectURL(a.href);
}