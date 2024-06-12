import TechStackList from "./TechStackList";


export default function TechStackScrollComponent() {
    return(
        <div className="flex flex-col gap-4 ml-auto">
            <div className="flex ml-auto px-5">
                <TechStackList />
            </div>

            <div className="flex ml-auto px-5" aria-hidden="true">
                <TechStackList />
            </div>
        </div>
);
}