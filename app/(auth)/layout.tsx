const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="bg-zinc-700 h-[100vh] w-full flex justify-center items-center">
            {children}
        </div>
    )
}

export default AuthLayout