import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const Form = ({
  customers,
  setCustomers,
  isEdit,
  person,
  indexNo,
  setIsEdit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    if (isEdit) {
      setCustomers(
        customers.map((item, index) => {
          return index === indexNo ? data : item;
        })
      );
      setIsEdit(false);
    } else {
      setCustomers([...customers, data]);
      reset();
    }
  };
  useEffect(() => {
    isEdit === true
      ? reset({
          address1: person.address1,
          address2: person.address2,
          name: person.name,
          customerCode: person.customerCode,
          industry: person.industry,
          zip: person.zip,
          email: person.email,
          notes: person.notes,
          phone: person.phone,
          fax: person.fax,
          website: person.webSiteS,
          city: person.city,
          street: person.street,
          country: person.country,
        })
      : reset({
          address1: "",
          address2: "",
          name: "",
          customerCode: "",
          industry: "",
          zip: "",
          email: "",
          notes: "",
          phone: "",
          fax: "",
          webSite: "",
          city: "",
          country: "",
          street: "",
        });
  }, [isEdit]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-3 gap-8">
        <div>
          <p>Customer Code</p>
          <input {...register("customerCode")} />
        </div>
        <div>
          <p>Industry </p>
          <select {...register("industry", { required: true })}>
            <option value="IT">Information Technology</option>
            <option value="Medical">Medical</option>
            <option value="business">business</option>
            <option value="manifacturing">manifacturing</option>
          </select>
        </div>
        <div>
          <p>
            Name <span className="text-red-600">*</span>
          </p>
          <input
            {...register("name", { required: true })}
            className={`${errors.name && "border-red-600"}`}
          />
          {errors.name && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div>
          <p>Address1</p>
          <input {...register("address1")} />
        </div>
        <div>
          <p>Address2</p>
          <input {...register("address2")} />
        </div>
        <div>
          <p>Street</p>
          <input {...register("street")} />
        </div>
        <div>
          <p>Country</p>
          <input {...register("country")} />
        </div>
        <div>
          <p>Zip</p>
          <input type="number" {...register("zip")} />
        </div>
        <div>
          <p>city</p>
          <input {...register("city")} />
        </div>
        <div>
          <p>Phone</p>
          <input {...register("phone")} />
        </div>
        <div>
          <p>Fax</p>
          <input {...register("fax")} />
        </div>
        <div>
          <p>Website</p>
          <input {...register("webSite")} />
        </div>
        <div>
          <p>Email</p>
          <input {...register("email")} type="email" />
        </div>
        <div>
          <p>Notes</p>
          <textarea
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
            {...register("notes")}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-green-600 rounded-lg text-white font-bold py-2 px-2"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;
