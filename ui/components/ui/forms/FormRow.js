import { useFormContext } from "react-hook-form";

const patterns = {
  email: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: "Invalid email",
  },

  password: {
    value: /^.{3,}$/,
    message: "Must be at least 3 characters",
  },
};

const FormRowError = ({ error }) => {
  if (error) return <div className="text-red-600 text-sm">{error.message}</div>;
  return null;
};

export default ({
  email,
  password,
  required,
  label,
  name,
  placeholder,
  ...rest
}) => {
  const { register, errors } = useFormContext();

  const getPattern = () => {
    if (email) return patterns.email;
    if (password) return patterns.password;
  };

  return (
    <div className="mb-4">
      <label className="block">
        {label && (
          <span className="block text-gray-600 font-bold">{label}</span>
        )}

        <input
          className="form-input block w-full"
          name={name}
          placeholder={placeholder}
          ref={register({
            ...(required && { required: "Required" }),
            pattern: getPattern(),
          })}
          {...(password && { type: "password" })}
          {...{ rest }}
        />
      </label>

      <FormRowError error={errors[name]} />
    </div>
  );
};
