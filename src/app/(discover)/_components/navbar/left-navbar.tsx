import { UserWidget } from '@/components/global/user-widget';
import { Button } from '@/components/ui/button';
import { CheckBadge, Logout } from "@/icons"
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'

type LeftNavbarProps = {
  user:  {
    status: number;
    id?: undefined;
    image?: undefined;
    username?: undefined;
} | {
    status: number;
    id: string;
    image: string;
    username: string;
}
mobile?: boolean
}

const LeftNavbar = ({ user, mobile}: LeftNavbarProps) => {
  return (
    <div className={cn("flex-1 justify-end gap-3", mobile ? "flex flex-col lg:hidden" : "lg:flex hidden")}>
        <Link href={user.status === 200 ? `/group/create` : "/sign-in"}>
          <Button
            variant="outline"
            className="bg-themeBlack rounded-2xl flex gap-2 border-themeGray hover:bg-themeGray"
          >
            <CheckBadge />
            Create Group
          </Button>
        </Link>
        {user.status === 200 ? (
          <UserWidget image={user.image!} />
        ) : (
          <Link href="/sign-in">
            <Button
              variant="outline"
              className="bg-themeBlack rounded-2xl flex gap-2 border-themeGray hover:bg-themeGray"
            >
              <Logout />
              Login
            </Button>
          </Link>
        )}
      </div>
  )
}

export default LeftNavbar