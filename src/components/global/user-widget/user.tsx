"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { About, Buisness, Courses, Dashboard, Explore, GlobeDuoToneBlack, Home, HomeDuoToneWhite, Logout, Settings } from "@/icons"
import { supabaseClient } from "@/lib/utils"
import { onOffline } from "@/redux/slices/online-member-slice"
import { AppDispatch } from "@/redux/store"
import { useClerk } from "@clerk/nextjs"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { DropDown } from "../drop-down"
import { useQuery } from "@tanstack/react-query"
import { onGetGroupInfo } from "@/actions/groups"

type UserWidgetProps = {
  image: string
  groupid?: string
  userid?: string
}

export const UserAvatar = ({ image, groupid, userid }: UserWidgetProps) => {
  const { signOut } = useClerk()

  // make user offline  when log out
  const untrackPresence = async () => {
    await supabaseClient.channel("tracking").untrack()
  }

  const { data } = useQuery({
    queryKey: ["group-info"],
    queryFn: () => onGetGroupInfo(groupid!),
  })

  // console.log("FFFSSSS",groupid, userid, data)

  const dispatch: AppDispatch = useDispatch()

  const onLogout = async () => {
    untrackPresence()
    dispatch(onOffline({ members: [{ id: userid! }] }))
    signOut({ redirectUrl: "/" })
  }

  return (
    <DropDown
      title="Account"
      trigger={
        <Avatar className="cursor-pointer">
          <AvatarImage src={image} alt="user" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      }
    >
      <Link href={`/explore`} className="flex gap-x-2 px-2">
        <Home /> Explore
      </Link>

      {/* Only Admin get Access */}
      {userid === data?.group?.userId && (
        <Link href={`/group/${groupid}/settings`} className="flex gap-x-2 px-2 pt-2">
          <Settings /> Settings
        </Link>
      )}

      <Button
        onClick={onLogout}
        variant="ghost"
        className="flex gap-x-3 px-2 justify-start w-full"
      >
        <Logout />
        Logout
      </Button>
    </DropDown>
  )
}
