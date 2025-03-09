import { Table } from '@/types';
import Link from 'next/link';

export const CommunityInfoList = ({
  communityInfo,
}: {
  communityInfo: Table<'community_info'>[];
}) => {
  return (
    <div className="space-y-8 py-8">
      <div className="flex justify-between items-baseline">
        <div className="space-y-2">
          <h1 className="mt-1 text-2xl font-thin tracking-tight sm:text-4xl lg:text-5xl">
            Communities
          </h1>
          <p className="text-gray-600 text-sm">
            These items can only be created by logged in users.
          </p>
        </div>
        {/* <div>
          <Link href="/dashboard">
            <Button>New Private Item</Button>
          </Link>
        </div> */}
      </div>
      {communityInfo.length ? (
        <div className="list-none m-0 divide-y divide-gray-200 bg-white shadow ring-1 ring-black ring-opacity-5">
          {communityInfo.map((community) => (
            <Link
              href={`/private-item/${community.id}`}
              className="px-3 block cursor-pointer pt-4 pb-3 text-left text-sm font-semibold text-gray-900 group hover:bg-blue-600 transition-all duration-200"
              key={community.id}
            >
              <div className="space-y-2">
                <p className="text-blue-600 font-normal text-lg group-hover:text-white">
                  {community.name}
                </p>
                <p className="text-gray-600 font-medium text-sm group-hover:text-white">
                  {community.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>No Private Items</p>
      )}
    </div>
  );
};
