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


// 'use client';
// import { useEffect, useState } from 'react';

// export default function Home() {
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/message')
//       .then((res) => res.json())
//       .then((data) => {
//         setMessage(data.message);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6">
//       {/* Header */}
//       <header className="w-full max-w-4xl mt-12 text-center">
//         <h1 className="text-4xl font-bold tracking-tight">
//           🚀 Naveen CI/CD Dashboard
//         </h1>
//         <p className="text-gray-400 mt-2 text-lg">
//           Full-stack Deployment Pipeline (Next.js + Node.js)
//         </p>
//       </header>

//       {/* Pipeline Section */}
//       <section className="w-full max-w-4xl mt-12">
//         <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700">
//           <h2 className="text-2xl font-semibold mb-4">CI/CD Pipeline Status</h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {/* Stage Card */}
//             <div className="bg-gray-700 p-4 rounded-xl">
//               <div className="text-lg font-semibold mb-1">Source</div>
//               <p className="text-sm text-gray-300">GitHub Repository</p>
//               <div className="mt-3 h-2 w-full bg-gray-600 rounded">
//                 <div className="h-full w-full bg-green-500 rounded"></div>
//               </div>
//             </div>

//             <div className="bg-gray-700 p-4 rounded-xl">
//               <div className="text-lg font-semibold mb-1">Build</div>
//               <p className="text-sm text-gray-300">CodeBuild</p>
//               <div className="mt-3 h-2 w-full bg-gray-600 rounded">
//                 <div className="h-full w-3/4 bg-yellow-400 rounded"></div>
//               </div>
//             </div>

//             <div className="bg-gray-700 p-4 rounded-xl">
//               <div className="text-lg font-semibold mb-1">Deploy</div>
//               <p className="text-sm text-gray-300">CodeDeploy → EC2</p>
//               <div className="mt-3 h-2 w-full bg-gray-600 rounded">
//                 <div className="h-full w-1/2 bg-blue-400 rounded"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* API Section */}
//       <section className="w-full max-w-4xl mt-12 mb-20">
//         <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-xl">
//           <h2 className="text-2xl font-semibold mb-4">Backend Response</h2>

//           {loading ? (
//             <div className="animate-pulse text-gray-400">Loading API response...</div>
//           ) : (
//             <div className="bg-gray-700 p-4 rounded-xl text-lg font-medium text-green-300">
//               {message}
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }


// Real website

'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Scroll effect for navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Fetch from backend API
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

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold text-white">NaveenDev</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
              <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
            </div>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full hover:scale-105 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
              <span className="text-purple-300 text-sm font-semibold">🚀 Powered by Modern CI/CD Pipeline</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Build Amazing
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Applications</span>
              <br />Faster Than Ever
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Full-stack development with Next.js and Node.js. Automated deployment with AWS CodePipeline, CodeBuild, and Elastic Beanstalk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition shadow-lg hover:shadow-purple-500/50">
                Start Building
              </button>
              <button className="bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition border border-white/20">
                View Demo
              </button>
            </div>
          </div>

          {/* Backend Status Card */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">Backend API Status</h3>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${loading ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`}></div>
                  <span className="text-gray-300 text-sm">{loading ? 'Connecting...' : 'Connected'}</span>
                </div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-6 border border-purple-500/30">
                {loading ? (
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-gray-300">Loading from API...</span>
                  </div>
                ) : (
                  <div>
                    <p className="text-purple-300 font-mono text-lg mb-2">{message}</p>
                    <p className="text-gray-400 text-sm">✓ Deployed via CI/CD Pipeline</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300">Everything you need to build modern applications</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Built with Next.js for optimal performance and speed'
              },
              {
                icon: '🔄',
                title: 'Auto Deploy',
                description: 'Push to GitHub and watch your changes go live automatically'
              },
              {
                icon: '🛡️',
                title: 'Secure & Scalable',
                description: 'AWS infrastructure ensures security and handles any scale'
              },
              {
                icon: '🎨',
                title: 'Modern Design',
                description: 'Beautiful UI with Tailwind CSS and smooth animations'
              },
              {
                icon: '📊',
                title: 'Real-time API',
                description: 'Node.js backend with Express for fast API responses'
              },
              {
                icon: '🚀',
                title: 'Production Ready',
                description: 'CloudFront CDN and Elastic Beanstalk for reliability'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition group hover:scale-105">
                <div className="text-5xl mb-4 group-hover:scale-110 transition">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Built With Modern Tech</h2>
            <p className="text-xl text-gray-300">Industry-leading tools and frameworks</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Next.js', color: 'from-black to-gray-800' },
              { name: 'Node.js', color: 'from-green-600 to-green-800' },
              { name: 'AWS', color: 'from-orange-500 to-yellow-600' },
              { name: 'Tailwind', color: 'from-cyan-500 to-blue-600' }
            ].map((tech, index) => (
              <div key={index} className={`bg-gradient-to-br ${tech.color} rounded-xl p-6 text-center hover:scale-105 transition shadow-lg`}>
                <span className="text-white font-bold text-xl">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-purple-100 mb-8">Join thousands of developers building amazing applications</p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition shadow-lg">
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2025 NaveenDev. Built with Next.js + Node.js on AWS</p>
          <p className="text-gray-500 text-sm mt-2">Deployed via CI/CD Pipeline</p>
        </div>
      </footer>
    </div>
  );
}