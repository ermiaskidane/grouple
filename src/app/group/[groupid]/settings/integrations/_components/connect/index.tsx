"use client"

import { Loader } from "@/components/global/loader"
import { Button } from "@/components/ui/button"
import { useStripeConnect } from "@/hooks/payment"

type StripeConnectProps = {
  connected: boolean
  groupid: string
}
// WIP: set UP properly the stripe connect on the api/stripe/connect folder to process correctly 
export const StripeConnect = ({ connected, groupid }: StripeConnectProps) => {
  const { onStripeConnect, onStripeAccountPending } = useStripeConnect(groupid)
  return (
    <Button disabled={connected} onClick={onStripeConnect}>
      <Loader loading={onStripeAccountPending}>
        {connected ? "Connected" : "Connect to stripe"}
      </Loader>
    </Button>
  )
}
