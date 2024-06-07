export default function Experience() {
    return(
        <section className="max-container relative">
            <h1 className="mb-24 main-text text-[3.8rem] text-center">My fields of <span className="text-purple-clr">experience</span></h1>
            <div className="flex justify-center flex-col gap-10">

                <div className="flex space-x-10">
                    <div className="window p-10 w-[50%] h-40">
                        <h1>FrontEnd Development</h1>
                    </div>

                    <div className="window p-10 w-[50%] h-40">
                        <h1>PostgreSQL Database</h1>
                    </div>
                </div>

                <div className="flex space-x-10">
                    <div className="window p-10 w-[50%] h-40">
                        <h1>Freelance Frontend Projects</h1>
                    </div>

                    <div className="window p-10 w-[50%] h-40">
                        <h1>Django REST API</h1>
                    </div>
                    </div>
            </div>
        </section>
    );
}