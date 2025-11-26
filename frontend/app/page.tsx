'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/message')
      .then(res => res.json())
      .then(data => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Next.js + Node.js
        </h1>
        <p className="text-gray-600 mb-4">
          Full-stack app with CI/CD Pipeline
        </p>
        <div className="bg-blue-50 p-4 rounded border border-blue-200">
          {loading ? (
            <p className="text-blue-600">Loading from API...</p>
          ) : (
            <p className="text-blue-800 font-semibold">{message}</p>
          )}
        </div>
      </div>
    </main>
  );
}
