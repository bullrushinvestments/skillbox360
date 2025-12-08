import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations';
import { GET_TESTS } from './graphql/queries';
import { Test } from './types/TestType';

interface WriteTestForm {
  title: string;
  content: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<WriteTestForm>();

  const [createTestMutation] = useMutation(CREATE_TEST, {
    onCompleted: (data) => {
      if (data.createTest) {
        fetchTests();
        reset();
      }
    },
    onError: (error) => setError(error.message),
    update(cache, { data }) {
      if (!data || !data.createTest) return;
      cache.writeQuery({
        query: GET_TESTS,
        data: { tests: [data.createTest, ...cache.readQuery({ query: GET_TESTS }).tests] },
      });
    },
  });

  const onSubmit = (formData: WriteTestForm) => {
    setLoading(true);
    createTestMutation({
      variables: {
        input: formData,
      },
    })
      .then(() => setLoading(false))
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Write a Test</h2>
      {error && <p role="alert" aria-live="assertive" className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
        Error: {error}
      </p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="title" className="block mb-1 font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            ref={register({ required: true })}
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            aria-required="true"
            aria-invalid={!!error}
          />
        </div>
        <div>
          <label htmlFor="content" className="block mb-1 font-medium">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            ref={register({ required: true })}
            rows={5}
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            aria-required="true"
            aria-invalid={!!error}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations';
import { GET_TESTS } from './graphql/queries';
import { Test } from './types/TestType';

interface WriteTestForm {
  title: string;
  content: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<WriteTestForm>();

  const [createTestMutation] = useMutation(CREATE_TEST, {
    onCompleted: (data) => {
      if (data.createTest) {
        fetchTests();
        reset();
      }
    },
    onError: (error) => setError(error.message),
    update(cache, { data }) {
      if (!data || !data.createTest) return;
      cache.writeQuery({
        query: GET_TESTS,
        data: { tests: [data.createTest, ...cache.readQuery({ query: GET_TESTS }).tests] },
      });
    },
  });

  const onSubmit = (formData: WriteTestForm) => {
    setLoading(true);
    createTestMutation({
      variables: {
        input: formData,
      },
    })
      .then(() => setLoading(false))
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Write a Test</h2>
      {error && <p role="alert" aria-live="assertive" className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
        Error: {error}
      </p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="title" className="block mb-1 font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            ref={register({ required: true })}
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            aria-required="true"
            aria-invalid={!!error}
          />
        </div>
        <div>
          <label htmlFor="content" className="block mb-1 font-medium">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            ref={register({ required: true })}
            rows={5}
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            aria-required="true"
            aria-invalid={!!error}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;