import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectTech } from "../SelectTech";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import { StyledModalTech } from "./style";
import { Input } from "../Input";
import { modalSchema } from "./modalSchema";
import { Toaster } from "react-hot-toast";

export const ModalTech = () => {
  const { object, techAdd, techDelete, techEdit, closeModal } =
    useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(modalSchema),
  });

  return (
    <>
      <Toaster />
      <StyledModalTech role="dialog">
        <Toaster />
        <div className="modalAddTech">
          <div className="modal__header">
            <h3 className="modal__title">
              {object ? "Detalhes da Tecnologia" : "Cadastrar Tecnologia"}
            </h3>
            <button className="btn__close" onClick={() => closeModal()}>
              X
            </button>
          </div>
          <form
            onSubmit={object ? handleSubmit(techEdit) : handleSubmit(techAdd)}
          >
            {object ? (
              <div className="input__container">
                <Input
                  type="text"
                  label="Tecnologia"
                  placeholder={object.title}
                  disabled
                />
              </div>
            ) : (
              <Input
                className="input__container"
                type="text"
                id="title"
                label="Nome"
                placeholder="Digite a Tecnologia"
                {...register("title")}
                error={errors.title?.message}
              />
            )}

            <SelectTech
              id="status"
              label="Selecione o status"
              {...register("status")}
              error={errors.status?.message}
            />
            {object ? (
              <div className="btns__editContainer">
                <button
                  className="save__edit"
                  type="submit"
                  disabled={isSubmitting ? true : false}
                >
                  Salvar alterações
                </button>
                <button
                  className="btn__delete"
                  type="submit"
                  onClick={() => techDelete(object?.id)}
                >
                  Excluir
                </button>
              </div>
            ) : (
              <button
                className="add__tech"
                disabled={isSubmitting ? true : false}
              >
                Cadastrar tecnologia
              </button>
            )}
          </form>
        </div>
      </StyledModalTech>
    </>
  );
};
