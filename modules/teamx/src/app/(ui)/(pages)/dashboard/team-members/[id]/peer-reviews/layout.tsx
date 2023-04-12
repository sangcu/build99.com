"use client";

import { useParams } from "next/navigation";
import { dw_team_member_peer_review_items } from "../../exampleData";
import classNames from "classnames";
import Link from "next/link";

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { id, reviewId } = useParams() || {};

  return (
    <div className="flex flex-col">
      <div className="flex flex-1 pb-8">
        <div className="overflow-y-auto w-[380px] border-r member-detail-content-area">
          <ul role="list" className="divide-gray-200 divide-y">
            <div className="w-full flex justify-between items-center space-x-4">
              <div className="flex items-center space-x-2 text-lg font-semibold pl-4 py-3 flex-1">
                Key Points
              </div>
            </div>
            {dw_team_member_peer_review_items.map((item) => (
              <div
                key={item.id}
                className={classNames(
                  "w-full flex justify-between items-center space-x-4",
                  Number(reviewId) === item.id && "bg-sky-100"
                )}
              >
                <Link
                  href={
                    Number(reviewId) === item.id
                      ? `/dashboard/team-members/${id}/peer-reviews`
                      : `/dashboard/team-members/${id}/peer-reviews/${item.id}`
                  }
                  className={classNames(
                    "flex items-center space-x-2 text-base pl-4 py-3 flex-1"
                  )}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </ul>
        </div>
        <div className="flex-1 pl-4 overflow-y-auto member-detail-content-area">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
