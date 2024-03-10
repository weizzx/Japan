

function Header_main() {
    return (
        <header className="flex justify-start items-center w-full min-h-[25em] relative bg-[url('../../header_main.jpg')] before:bg-gradient-to-b before:from-accent-gradient before:to-accent-gradient before:absolute before:inset-0">
            <div className="wrapper sm:container flex justify-center">
                <h1 className="text-white z-10 font-primary font-black text-9xl">Japan</h1>
            </div>
        </header>
    );
}

export default Header_main