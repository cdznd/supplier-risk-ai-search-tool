import SupplierHelp from "./SupplierHelp"

const InitialMessage = () => {
    return (
        <div className="flex-1 flex flex-col justify-center items-center pb-24">
            <div className="w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">
                    Supplier Risk AI Search Tool
                </h1>
                <SupplierHelp />
            </div>
        </div>
    )
}

export default InitialMessage;