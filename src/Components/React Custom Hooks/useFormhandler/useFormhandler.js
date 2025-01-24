import { useForm } from "react-hook-form";

const useFormhandler = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  const isDeliveryForMe = watch("isDeliveryForMe", true);

  return {
    register,
    handleSubmit,
    watch,
    reset,
    errors,
    setValue,
    isDeliveryForMe,
  };
};

export default useFormhandler;
