"use client";

import { Button } from "@/components/atoms";
import FileUpload from "@/components/atoms/FileUpload";
import { Member } from "@/database/db";
import DbImport from "@/database/import";
import { DexieError } from "dexie";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function ImportData() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false)
    const [isOverride, setIsOverride] = useState(false)
    const [members, setMembers] = useState<Member[]>([])
    const [errorMessage, setErrorMessage] = useState('');
    const onFileChanged = (content: string) => {
        setErrorMessage('')
        if (!content) {
            return
        }

        const contentSplited = content.split(',');
        if (contentSplited.length != 2) {
            return
        }

        const jsonString = contentSplited[1];

        try {
            const data = JSON.parse(window.atob(jsonString));

            if (data.members?.length > 0) {
                setMembers(data.members)
            } else {
                setErrorMessage('Not found any team member in your file.')
            }

        } catch (e) {
            setErrorMessage("Cannot read data from your file.");
        }
    }

    const onOverrideChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setIsOverride(event.target.checked)
    }

    const onConfirm = async () => {
        if (members?.length == 0) {
            return
        }
        setIsLoading(true)
        await DbImport(isOverride, { members: members })
        router.push("/")
    }

    return (
        <div className="mt-8 flex flex-col items-center justify-center w-full px-4 lg:px-0">
            <h1 className="py-8 text-4xl font-medium leading-6 text-gray-900">
                Import
            </h1>
            <div className="space-y-6">
                <div>
                    <FileUpload onChanged={onFileChanged} />
                </div>
                <span className="leading-10 text-red-600">{errorMessage ? errorMessage : <></>}</span>
                <div>
                    {members?.length > 0 ? <>
                        <span>Total Members: </span><span>{members.length}</span>
                    </> : null}

                </div>
                <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                        <input
                            onChange={onOverrideChanged}
                            id="overrideCheck"
                            aria-describedby="override-check"
                            name="override"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="overrideCheck" className="font-medium text-gray-700">
                            Override only
                        </label>
                        <span id="override-check" className="text-gray-500">
                            <span className="sr-only">Override only </span> this remove your current members and load all new members from your file.
                        </span>
                    </div>
                </div>
                <div>
                    {members?.length > 0 ? <>
                        <Button loading={isLoading} onClick={onConfirm} className="inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">Confirm</Button>
                    </> : null}
                </div>
            </div>
        </div >
    )
}