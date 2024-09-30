import React from "react";
import { Button } from "@/components/ui/button";
function Navbar(){
    
    return <div className="inline mx-auto my-auto">
        <Button size="lg" className="text-base bg-transparent rounded-full mr-5 text-[1f2f41] font-bold hover:text-white">Home</Button>
        <Button size="lg" className="text-base bg-transparent rounded-full mr-5 text-[1f2f41] font-bold hover:text-white">About</Button>
        <Button size="lg" className="text-base bg-transparent rounded-full mr-5 text-[1f2f41] font-bold hover:text-white">Features</Button>
        <Button size="lg" className="text-base bg-transparent rounded-full mr-5 text-[1f2f41] font-bold hover:text-white">Contact</Button>
    </div>
}

export default Navbar;