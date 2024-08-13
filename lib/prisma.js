import { PrismaClient } from "@prisma/client";
import { GOOGLE_FONT_PROVIDER } from "next/dist/shared/lib/constants";

let prisma;

if (process.env.NODE_ENV == 'production'){
    prisma = new PrismaClient();
} else {
    if (!global.prisma){
        global.prisma = new PrismaClient()
    }
    prisma = global.prisma;
}

export default prisma;