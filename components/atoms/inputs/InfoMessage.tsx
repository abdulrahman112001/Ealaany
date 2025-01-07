import { Tooltip } from "@mantine/core"
import React from "react"

function InfoMessage({ infoMessage }: { infoMessage?: string }) {
  return (
    <div>
      <Tooltip label={infoMessage || "ttttttttttt"} position="left" withArrow>
        <span className="cursor-pointer">?</span>
      </Tooltip>
    </div>
  )
}

export default InfoMessage
