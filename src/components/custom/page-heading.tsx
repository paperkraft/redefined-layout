import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

type Props = {
    title: string
    description: string
}

export const TitlePageSkeleton = () => {
    return(
        <div className="space-y-0.5">
            <Skeleton className="h-6 md:w-[100px]"></Skeleton>
            <Skeleton className="h-4 md:w-[250px] mt-2"></Skeleton>
        </div>
    )
}

export default function TitlePage({ title, description }: Props) {
    return (
        <>
            <div className="space-y-0.5">
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="text-muted-foreground">{description}</p>
            </div>
            <Separator className="my-6" />
        </>
    )
}
