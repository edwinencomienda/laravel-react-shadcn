import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";
import { Checkbox } from "@/Components/ui/checkbox";
import { Input } from "@/Components/ui/input";
import { Label } from "@/components/ui/label";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div className="grid gap-2">
                    <Label>Email</Label>
                    <Input
                        type="email"
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4 grid gap-2">
                    <Label>Password</Label>

                    <Input
                        type="password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 block">
                    <label className="flex items-center" htmlFor="remember">
                        <Checkbox
                            id="remember"
                            checked={data.remember}
                            onCheckedChange={(e) =>
                                setData("remember", Boolean(e))
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="mt-4 flex items-center justify-end gap-4">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <Button disabled={processing}>Log in</Button>

                    {/* <PrimaryButton className="ms-4" disabled={processing}>
                        Log in
                    </PrimaryButton> */}
                </div>
            </form>
        </GuestLayout>
    );
}
