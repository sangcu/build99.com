'use client'

import Link from "next/link"
import db from '@/database/db'
export default function Home() {
  const saveMember = async () => {
    const id = await db.members.add({
      name: "Sang",
      job_title: "Software Engineer",
      profile_photo: "",
      notes: "Test data"
    });
  }

  return (
    <div className="mt-8 flex items-center justify-center w-full">
      <form>
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-medium leading-6 text-gray-900">
              Create New Member
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              By default, personal data information is only saved in your machine.
            </p>
          </div>
          <div>
            <label
              htmlFor="project-name"
              className="block text-sm font-medium text-gray-700"
            >
              Profile photo
            </label>
            <div className="mt-1 border-l-green-500">
              <input
                type="file"
                name="project-name"
                id="project-name"
                className="block w-full rounded-md border border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-3 py-2"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="project-name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <div className="mt-1 border-l-green-500">
              <input
                type="text"
                name="project-name"
                id="project-name"
                className="block w-full rounded-md border border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-3 py-2"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="project-name"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <div className="mt-1 border-l-green-500">
              <input
                type="text"
                name="project-name"
                id="project-name"
                className="block w-full rounded-md border border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm px-3 py-2"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Documents
            </label>
            <div className="mt-1">
              <textarea
                id="description"
                name="description"
                rows={6}
                className="block w-full border rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                defaultValue={''}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Link href="/">
              <button
                type="button"
                className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              onClick={() => saveMember()}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
