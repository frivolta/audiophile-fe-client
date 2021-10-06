import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
import { TextSubtitle } from "../../../components/Elements/typography";

type BillingDetailInputs = {
  Name: string;
  Email: string;
  Phone: string;
  Address: string;
  "ZIP Code": string;
  City: string;
  Country: string;
};

type InputProps = {
  label: Path<BillingDetailInputs>;
  register: UseFormRegister<BillingDetailInputs>;
  required: boolean;
  validation?: any;
  errors?: any;
};

const Input = ({
  label,
  register,
  required,
  validation,
  errors,
}: InputProps) => (
  <div className="w-full flex flex-col">
    <TextSubtitle className="text-black opacity-100 mb-2">{label}</TextSubtitle>
    <input
      className="border rounded-md px-4 py-3 focus:border-primary outline-none"
      {...register(label, { required, ...validation })}
    />
    {errors && errors}
  </div>
);

//
interface FormColProps {
  children: React.ReactChild;
}
const FormCol = ({ children }: FormColProps) => (
  <div className="w-1/2 mt-4 px-2">{children}</div>
);
interface FormRowProps {
  children: React.ReactChild;
}
const FormRow = ({ children }: FormRowProps) => (
  <div className="w-full px-2 mt-4">{children}</div>
);
//

export const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BillingDetailInputs>();

  const onSubmit: SubmitHandler<BillingDetailInputs> = (data) =>
    console.log(data, errors);

  return (
    <div className="section-title flex flex-col">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-wrap">
        <FormRow>
          <TextSubtitle className="text-primary opacity-100 mb-4">
            BILLING DETAILS
          </TextSubtitle>
        </FormRow>
        <FormCol>
          <Input
            label="Name"
            register={register}
            required
            validation={{
              required: "Required",
              maxLength: { value: 255, message: "Name is too long" },
            }}
            errors={errors.Name?.message}
          />
        </FormCol>
        <FormCol>
          <Input
            label="Phone"
            register={register}
            required
            validation={{
              required: "Required",
              maxLength: { value: 20, message: "Phone is too long" },
            }}
            errors={errors.Phone?.message}
          />
        </FormCol>
        <FormCol>
          <Input
            label="Email"
            register={register}
            required
            validation={{
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            errors={errors.Email?.message}
          />
        </FormCol>
        <FormRow>
          <TextSubtitle className="text-primary opacity-100 mt-4">
            SHIPPING INFO
          </TextSubtitle>
        </FormRow>
        <FormRow>
          <Input
            label="Address"
            register={register}
            required
            validation={{
              required: "Required",
            }}
            errors={errors.Address?.message}
          />
        </FormRow>
        <FormCol>
          <Input
            label="ZIP Code"
            register={register}
            required
            validation={{
              required: "Required",
            }}
            errors={errors["ZIP Code"]?.message}
          />
        </FormCol>
        <FormCol>
          <Input
            label="City"
            register={register}
            required
            validation={{
              required: "Required",
            }}
            errors={errors.City?.message}
          />
        </FormCol>
        <FormCol>
          <Input
            label="Country"
            register={register}
            required
            validation={{
              required: "Required",
            }}
            errors={errors.Country?.message}
          />
        </FormCol>
      </form>
    </div>
  );
};
