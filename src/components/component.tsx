import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface BusinessSpecFormInputs {
  businessName: string;
  description: string;
  websiteUrl?: string;
  contactEmail: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpecFormInputs>();

  const onSubmit: SubmitHandler<BusinessSpecFormInputs> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setError(null);
      reset();
    }, 1000)
      .catch((err) => {
        setError(err.message || 'An error occurred');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
        <input
          type="text"
          id="businessName"
          {...register('businessName', { required: 'Business name is required' })}
          className={twMerge("mt-1 block w-full rounded-md shadow-sm", errors.businessName && "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          {...register('description', { required: 'Description is required' })}
          className={twMerge("mt-1 block w-full rounded-md shadow-sm", errors.description && "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700">Website URL</label>
        <input
          type="url"
          id="websiteUrl"
          {...register('websiteUrl')}
          className={twMerge("mt-1 block w-full rounded-md shadow-sm", errors.websiteUrl && "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">Contact Email</label>
        <input
          type="email"
          id="contactEmail"
          {...register('contactEmail', { required: 'Contact email is required' })}
          className={twMerge("mt-1 block w-full rounded-md shadow-sm", errors.contactEmail && "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500")}
        />
      </div>
      {error && <p className="text-red-600">{error}</p>}
      <button type="submit" disabled={loading} className={twMerge("mt-4 inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50", loading && "cursor-not-allowed")}>
        {loading ? 'Creating...' : 'Create'}
      </button>
    </form>
  );
};

export default CreateBusinessSpecification;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface BusinessSpecFormInputs {
  businessName: string;
  description: string;
  websiteUrl?: string;
  contactEmail: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpecFormInputs>();

  const onSubmit: SubmitHandler<BusinessSpecFormInputs> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setError(null);
      reset();
    }, 1000)
      .catch((err) => {
        setError(err.message || 'An error occurred');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
        <input
          type="text"
          id="businessName"
          {...register('businessName', { required: 'Business name is required' })}
          className={twMerge("mt-1 block w-full rounded-md shadow-sm", errors.businessName && "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          {...register('description', { required: 'Description is required' })}
          className={twMerge("mt-1 block w-full rounded-md shadow-sm", errors.description && "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700">Website URL</label>
        <input
          type="url"
          id="websiteUrl"
          {...register('websiteUrl')}
          className={twMerge("mt-1 block w-full rounded-md shadow-sm", errors.websiteUrl && "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500")}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">Contact Email</label>
        <input
          type="email"
          id="contactEmail"
          {...register('contactEmail', { required: 'Contact email is required' })}
          className={twMerge("mt-1 block w-full rounded-md shadow-sm", errors.contactEmail && "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500")}
        />
      </div>
      {error && <p className="text-red-600">{error}</p>}
      <button type="submit" disabled={loading} className={twMerge("mt-4 inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50", loading && "cursor-not-allowed")}>
        {loading ? 'Creating...' : 'Create'}
      </button>
    </form>
  );
};

export default CreateBusinessSpecification;