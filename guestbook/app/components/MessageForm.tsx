'use client';

import { useState } from 'react';
import { addMessage } from './actions';

export default function MessageForm() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const result = await addMessage(formData);

    if (result.error) {
      setError(result.error);
      setIsLoading(false);
    } else {
      e.currentTarget.reset();
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-6">Sign the Guestbook</h2>

      <div className="space-y-4">
        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
            Name (optional)
          </label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Your name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="content"
            name="content"
            placeholder="What's on your mind?"
            rows={4}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isLoading ? 'Posting...' : 'Post Message'}
        </button>
      </div>
    </form>
  );
}
