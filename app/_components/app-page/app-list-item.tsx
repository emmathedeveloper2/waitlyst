import { ArrowRightIcon } from "lucide-react"
import { apps } from "../../_lib/db/schemas"
import Link from "next/link"

type AppListItemProps = {
  app: typeof apps.$inferSelect
}

export const AppListItem = ({ app }: AppListItemProps) => {

  return (
    <Link href={`/dashboard/${app.id}`} className="w-full flex items-center justify-between px-[16px] py-[16px] border-t-2 border-t-foreground cursor-pointer group hover:bg-primary hover:text-primary-foreground transition-colors duration-500">
      <h1>{app.name}</h1>

      <ArrowRightIcon className="md:size-[40px] -translate-x-[50px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 text-primary-foreground" />
    </Link>
  )
}