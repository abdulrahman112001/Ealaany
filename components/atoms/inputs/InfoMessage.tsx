import { Tooltip } from "@mantine/core"
import Image from "next/image"

function InfoMessage({ infoMessage }: { infoMessage?: string }) {
  return (
    <div>
      <Tooltip
        label={infoMessage || "Please enter data"}
        position="left"
        withArrow
        styles={{
          tooltip: {
            backgroundColor: "#00CCDC",
            color: "white",
          },

        }}
      >
        <Image
          src="/images/question-circle.png"
          width={16}
          height={16}
          alt="questions"
          className="cursor-pointer"
        />
      </Tooltip>
    </div>
  )
}

export default InfoMessage
