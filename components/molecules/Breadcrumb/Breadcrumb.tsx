import { useRouter } from "next/router";

interface BreadcrumbProps {
  links: { name: string; main?: Boolean; href: string }[]
}

export default function Breadcrumb({ links }: BreadcrumbProps) {
  const router = useRouter()
  return (
    <div className="">
      <div className="text-base md:text-xl font-poppins ml-10">
        {links?.map((link, index) => (
          <span
            key={index}
            className={link?.main ? "text-[#008994] cursor-pointer" : "text-[#333333]"}
            onClick={() => router.push(link?.href)}
          >
            {link?.name}
            {index < links.length - 1 && " / "}
          </span>
        ))}
      </div>
    </div>
  )
}
