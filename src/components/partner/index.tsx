import { Fila, Nike, Addidas, Ritter } from "@/constants/assets/Icons";

export const Partner = () => {
    return (
        <div className="partners my-20 gap-7 md:gap-14">
            <span className="title">Partners</span>
            <div className="flex flex-wrap justify-center gap-8 items-center">
                <div className="flex flex-col gap-2 items-center md:max-w-[11.25rem] max-w-[8.25rem]">
                    <Fila className="w-[4.175rem] h-auto" />
                    <p className="info-text">Finalist SAN New Kids on the Block 2022</p>
                </div>
                <div className="flex flex-col gap-2 items-center md:max-w-[11.25rem] max-w-[8.25rem]">
                    <Nike className="w-[4.175rem] h-auto" />
                    <p className="info-text">Finalist SAN New Kids on the Block 2022</p>
                </div>
                <div className="flex flex-col gap-2 items-center md:max-w-[11.25rem] max-w-[8.25rem]">
                    <Addidas className="w-[4.175rem] h-auto" />
                    <p className="info-text">Finalist SAN New Kids on the Block 2022</p>
                </div>
                <div className="flex flex-col gap-2 items-center md:max-w-[11.25rem] max-w-[8.25rem]">
                    <Ritter className="w-[4.175rem] h-auto" />
                    <p className="info-text">Finalist SAN New Kids on the Block 2022</p>
                </div>
                <div className="flex flex-col gap-2 items-center md:max-w-[11.25rem] max-w-[8.25rem]">
                    <Fila className="w-[4.175rem] h-auto" />
                    <p className="info-text">Finalist SAN New Kids on the Block 2022</p>
                </div>
            </div>
        </div>
    );
};
