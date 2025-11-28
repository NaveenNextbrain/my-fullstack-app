// 'use client';
// import { useState, useEffect } from 'react';

// export default function Home() {
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/message')
//       .then(res => res.json())
//       .then(data => {
//         setMessage(data.message);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
//       <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md">
//         <h1 className="text-4xl font-bold mb-4 text-gray-800">
//           Naveen + VIP
//         </h1>
//         <p className="text-gray-600 mb-4">
//           Full-stack Naveen with CI/CD Pipeline
//         </p>
//         <div className="bg-blue-50 p-4 rounded border border-blue-200">
//           {loading ? (
//             <p className="text-blue-600">Loading from API...</p>
//           ) : (
//             <p className="text-blue-800 font-semibold">{message}</p>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// }


'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/message')
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6">
      {/* Header */}
      <header className="w-full max-w-4xl mt-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          🚀 Naveen CI/CD Dashboard
        </h1>
        <p className="text-gray-400 mt-2 text-lg">
          Full-stack Deployment Pipeline (Next.js + Node.js)
        </p>
      </header>

      {/* Pipeline Section */}
      <section className="w-full max-w-4xl mt-12">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">CI/CD Pipeline Status</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Stage Card */}
            <div className="bg-gray-700 p-4 rounded-xl">
              <div className="text-lg font-semibold mb-1">Source</div>
              <p className="text-sm text-gray-300">GitHub Repository</p>
              <div className="mt-3 h-2 w-full bg-gray-600 rounded">
                <div className="h-full w-full bg-green-500 rounded"></div>
              </div>
            </div>

            <div className="bg-gray-700 p-4 rounded-xl">
              <div className="text-lg font-semibold mb-1">Build</div>
              <p className="text-sm text-gray-300">CodeBuild</p>
              <div className="mt-3 h-2 w-full bg-gray-600 rounded">
                <div className="h-full w-3/4 bg-yellow-400 rounded"></div>
              </div>
            </div>

            <div className="bg-gray-700 p-4 rounded-xl">
              <div className="text-lg font-semibold mb-1">Deploy</div>
              <p className="text-sm text-gray-300">CodeDeploy → EC2</p>
              <div className="mt-3 h-2 w-full bg-gray-600 rounded">
                <div className="h-full w-1/2 bg-blue-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="w-full max-w-4xl mt-12 mb-20">
        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Backend Response</h2>

          {loading ? (
            <div className="animate-pulse text-gray-400">Loading API response...</div>
          ) : (
            <div className="bg-gray-700 p-4 rounded-xl text-lg font-medium text-green-300">
              {message}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

