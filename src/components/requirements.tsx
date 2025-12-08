import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IRequirement {
  title: string;
  description?: string;
  type: string;
}

interface IGatherRequirementsForm {
  requirements: IRequirement[];
}

const GatherRequirements: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IGatherRequirementsForm>();
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: IGatherRequirementsForm) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      router.push('/confirmation');
      reset();
    } catch (err) {
      setError('An error occurred while submitting your requirements.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Gather Requirements Form">
      {data.requirements.map((requirement, index) => (
        <div key={`req-${index}`} className="mb-4">
          <label htmlFor={`title-${index}`} className="block mb-2 text-sm font-medium">Title</label>
          <input
            id={`title-${index}`}
            type="text"
            {...register(`requirements.${index}.title`, { required: 'Title is required' })}
            aria-label="Requirement Title"
            className="w-full p-2 border rounded-md focus:border-blue-500"
          />
          {errors[`requirements.${index}.title`] && <p role="alert" className="mt-1 text-red-600">{errors[`requirements.${index}.title`].message}</p>}
          
          <label htmlFor={`description-${index}`} className="block mt-2 mb-2 text-sm font-medium">Description</label>
          <textarea
            id={`description-${index}`}
            {...register(`requirements.${index}.description`, { required: false })}
            aria-label="Requirement Description"
            rows={4}
            className="w-full p-2 border rounded-md focus:border-blue-500"
          />
        </div>
      ))}
      
      <button type="submit" disabled={loading} className="mt-6 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
        {loading ? 'Submitting...' : 'Submit Requirements'}
      </button>

      {error && (
        <p role="alert" className="mt-3 text-red-600">{error}</p>
      )}
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IRequirement {
  title: string;
  description?: string;
  type: string;
}

interface IGatherRequirementsForm {
  requirements: IRequirement[];
}

const GatherRequirements: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IGatherRequirementsForm>();
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: IGatherRequirementsForm) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      router.push('/confirmation');
      reset();
    } catch (err) {
      setError('An error occurred while submitting your requirements.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Gather Requirements Form">
      {data.requirements.map((requirement, index) => (
        <div key={`req-${index}`} className="mb-4">
          <label htmlFor={`title-${index}`} className="block mb-2 text-sm font-medium">Title</label>
          <input
            id={`title-${index}`}
            type="text"
            {...register(`requirements.${index}.title`, { required: 'Title is required' })}
            aria-label="Requirement Title"
            className="w-full p-2 border rounded-md focus:border-blue-500"
          />
          {errors[`requirements.${index}.title`] && <p role="alert" className="mt-1 text-red-600">{errors[`requirements.${index}.title`].message}</p>}
          
          <label htmlFor={`description-${index}`} className="block mt-2 mb-2 text-sm font-medium">Description</label>
          <textarea
            id={`description-${index}`}
            {...register(`requirements.${index}.description`, { required: false })}
            aria-label="Requirement Description"
            rows={4}
            className="w-full p-2 border rounded-md focus:border-blue-500"
          />
        </div>
      ))}
      
      <button type="submit" disabled={loading} className="mt-6 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
        {loading ? 'Submitting...' : 'Submit Requirements'}
      </button>

      {error && (
        <p role="alert" className="mt-3 text-red-600">{error}</p>
      )}
    </form>
  );
};

export default GatherRequirements;