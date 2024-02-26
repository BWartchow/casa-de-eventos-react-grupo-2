import { z } from "zod";

export const modalSchema = z.lazy(() =>
  z
    .object({
      title: z.string().nonempty("Campo obrigatório"),
      status: z.string().nonempty("Selecione uma opção"),
    })
    .or(
      z.object({
        status: z.string().nonempty("Selecione uma opção"),
      })
    )
);
