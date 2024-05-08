import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button";

export const Landing = () => {
    const navigate = useNavigate();

    return <div className="flex justify-center">
        <div className="pt-20 max-w-screen-xl">
            <div className="grid grid-cols-1 gap-16
            md:grid-cols-2">
                <div className="flex justify-center">
                    <img className="max-w-lg" src={"/chess.jpeg"} />
                </div>
                <div className="pt-20">
                    <div className="flex justify-center">
                        <h1 className="text-4xl
                        font-bold text-white justify-center text-center"> Play Chess Online on the #3 Site!
                        </h1>
                    </div>
                    <div className="mt-8 flex justify-center">
                        <Button onClick={
                            () => {navigate("/game")} 
                        }>
                            Play Online
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}