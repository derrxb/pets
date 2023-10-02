import { z } from "zod";
import { petsData } from "~/data/petsData";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const petsRouter = createTRPCRouter({
  getPets: publicProcedure.query(({ input }) => {
    return {
      pets: petsData,
    };
  }),
});
