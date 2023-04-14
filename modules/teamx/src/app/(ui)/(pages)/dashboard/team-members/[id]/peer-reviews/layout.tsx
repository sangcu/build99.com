"use client";

import { useParams } from "next/navigation";
import { dw_team_member_peer_review_groups } from "../../exampleData";
import classNames from "classnames";
import Link from "next/link";

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { id, reviewId, groupId } = useParams() || {};

  return (
    <div className="flex flex-col">
      <div className="flex flex-1 pb-8">
        <div className="overflow-y-auto w-[380px] border-r member-detail-content-area divide-y">
          {dw_team_member_peer_review_groups.map((group) => (
            <div key={group.id}>
              <Link
                href={`/dashboard/team-members/${id}/peer-reviews/group/${group.id}`}
              >
                <div
                  className={classNames(
                    "w-full flex justify-between items-center space-x-4 hover:bg-sky-50",
                    Number(groupId) === group.id && "bg-sky-100"
                  )}
                >
                  <div className="flex items-center space-x-2 text-lg font-semibold pl-4 py-3 flex-1">
                    {group.title}
                  </div>
                </div>
              </Link>
              <ul role="list" className="border-t divide-gray-200 divide-y">
                {group.items.map((item) => (
                  <div
                    key={item.id}
                    className={classNames(
                      "w-full flex justify-between items-center space-x-4 hover:bg-sky-50",
                      Number(reviewId) === item.id && "bg-sky-100"
                    )}
                  >
                    <Link
                      href={`/dashboard/team-members/${id}/peer-reviews/${item.id}`}
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
          ))}
        </div>
        <div className="flex-1 pl-4 overflow-y-auto member-detail-content-area">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
