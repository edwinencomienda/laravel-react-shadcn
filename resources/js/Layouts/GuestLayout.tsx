import ApplicationLogo from "@/Components/ApplicationLogo";
import { Card, CardContent } from "@/Components/ui/card";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900">
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                </Link>
            </div>

            <Card className="mt-6 w-full overflow-hidden sm:max-w-md  dark:bg-gray-800">
                <CardContent className="p-6">{children}</CardContent>
            </Card>
        </div>
    );
}
