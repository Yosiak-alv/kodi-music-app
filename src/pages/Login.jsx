import { useNavigate, Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { Head } from "../components/Head";

import { PrimaryButton } from "../components/form/PrimaryButton";
import { InputText } from "../components/form/InputText";
import { InputError } from "../components/form/InputError";
import { InputLabel } from "../components/form/InputLabel";

import { useFormik } from "formik";
import * as Yup from "yup";

export const Login = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email("Invalid email address").required().matches(/@example.com$/, "Email must be from example.com domain"),
            password: Yup.string().required().min(8, "Password must be at least 8 characters"),
        }),
        onSubmit: (values) => {
            if (values.email === "johndoe@example.com" && values.password === "password") {
                navigate("/");
            }else{
                alert("Invalid credentials, hint email: johndoe@example, password: password");
            }
        },
    });


    return (
        <>
            <Head title={'Login'}/>
            <div className="min-h-screen flex flex-col items-stretch font-body bg-black md:bg-gradient-to-b md:from-zinc-900 md:to-black">
                <header className="py-12 md:py-8 px-8 md:px-12 md:mb-8 bg-black">
                    <nav>
                        <img src={assets.spotify_logo} className="w-20 md:w-28" />
                    </nav>
                </header>

                <div className="self-center w-full max-w-[46rem] flex flex-col items-stretch gap-8 px-8 md:px-28 md:py-20 pb-20 md:rounded-lg bg-black">
                    <h1 className="text-3xl md:text-[2.9rem] md:text-center md:mb-7 font-extrabold">
                        Log in to Spotify
                    </h1>
                    <hr className="border-t-[1px] border-zinc-800" />

                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 md:px-[5.5rem]">
                        <div className="flex flex-col gap-2">
                            <InputLabel value={"Email address or username"} />
                            <InputText
                                id="email"
                                type="text"
                                placeholder="Email address or username"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <InputError touched={formik.touched.email} error={formik.errors.email} />
                        </div>

                        <div className="flex flex-col gap-2">
                            <InputLabel value={"Password"} />
                            <InputText
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <InputError touched={formik.touched.password} error={formik.errors.password} />
                        </div>
                        <PrimaryButton type={'submit'}>Log in</PrimaryButton>
                    </form>

                    <div className="flex flex-col gap-5 items-center text-center">
                        <p className="text-zinc-400">Forgot your password?</p>
                        <hr className="hidden md:block w-full border-t-[1px] mb-6 border-zinc-800" />
                        <div className="flex flex-col gap-1 md:gap-2 md:flex-row">
                            <p className="text-zinc-400">Don&apos;t have an account?</p>
                            <p className="text-zinc-400">Sign up for Spotify</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}