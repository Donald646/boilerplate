'use client';

import { Skeleton } from "@/components/ui/skeleton";

export default function StudySetChatSkeleton() {
  return (
    <div className="flex flex-col h-full w-full relative">
      <div className="flex-1 overflow-y-auto mb-20 py-4 px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {/* Assistant message skeleton */}
          <div className="flex items-start space-x-2">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>

          {/* User message skeleton */}
          <div className="flex items-end justify-end space-x-2">
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px] ml-auto" />
              <Skeleton className="h-4 w-[150px] ml-auto" />
            </div>
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>

          {/* Assistant message skeleton */}
          <div className="flex items-start space-x-2">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[300px]" />
              <Skeleton className="h-4 w-[270px]" />
              <Skeleton className="h-4 w-[220px]" />
            </div>
          </div>

          {/* User message skeleton */}
          <div className="flex items-end justify-end space-x-2">
            <div className="space-y-2">
              <Skeleton className="h-4 w-[180px] ml-auto" />
              <Skeleton className="h-4 w-[220px] ml-auto" />
            </div>
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>

          {/* Loading indicator skeleton */}
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 w-4 rounded-full" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-3xl">
            <div className="relative w-full">
              <Skeleton className="w-full h-10 rounded-lg" />
              <div className="absolute right-2 bottom-1">
                <Skeleton className="h-8 w-8 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}