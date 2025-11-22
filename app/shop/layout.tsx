import { FillterSection } from "@/components/sections/FillterSection.";

type Props = {
 children : React.ReactNode
}
export default function RootLayout({children}: Props) {
    return ( 
        <div className="grid grid-cols-6">
            <div className="col-span-6 md:col-span-2"> 
                <FillterSection/>
            </div>
            <div className="md:col-span-4">
                {children}
            </div>
        </div>
    );
}
