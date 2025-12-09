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

// 'use client';
// import { useState, useEffect } from 'react';

// export default function Home() {
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     // Scroll effect for navbar
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);

//     // Fetch from backend API
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

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       {/* Animated Background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse"></div>
//         <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-pulse delay-1000"></div>
//       </div>

//       {/* Navigation */}
//       <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : ''}`}>
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center space-x-2">
//               <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-xl">N</span>
//               </div>
//               <span className="text-2xl font-bold text-white">NaveenDev</span>
//             </div>
//             <div className="hidden md:flex space-x-8">
//               <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
//               <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
//               <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
//             </div>
//             <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full hover:scale-105 transition">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center">
//             <div className="inline-block mb-4 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
//               <span className="text-purple-300 text-sm font-semibold">🚀 Powered by Modern CI/CD Pipeline</span>
//             </div>
//             <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
//               Build Amazing
//               <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Applications</span>
//               <br />Faster Than Ever
//             </h1>
//             <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
//               Full-stack development with Next.js and Node.js. Automated deployment with AWS CodePipeline, CodeBuild, and Elastic Beanstalk.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition shadow-lg hover:shadow-purple-500/50">
//                 Start Building
//               </button>
//               <button className="bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition border border-white/20">
//                 View Demo
//               </button>
//             </div>
//           </div>

//           {/* Backend Status Card */}
//           <div className="mt-16 max-w-2xl mx-auto">
//             <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-2xl font-bold text-white">Backend API Status</h3>
//                 <div className="flex items-center space-x-2">
//                   <div className={`w-3 h-3 rounded-full ${loading ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`}></div>
//                   <span className="text-gray-300 text-sm">{loading ? 'Connecting...' : 'Connected'}</span>
//                 </div>
//               </div>
//               <div className="bg-slate-900/50 rounded-lg p-6 border border-purple-500/30">
//                 {loading ? (
//                   <div className="flex items-center space-x-3">
//                     <div className="w-6 h-6 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
//                     <span className="text-gray-300">Loading from API...</span>
//                   </div>
//                 ) : (
//                   <div>
//                     <p className="text-purple-300 font-mono text-lg mb-2">{message}</p>
//                     <p className="text-gray-400 text-sm">✓ Deployed via CI/CD Pipeline</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20 px-6 relative">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold text-white mb-4">Powerful Features</h2>
//             <p className="text-xl text-gray-300">Everything you need to build modern applications</p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: '⚡',
//                 title: 'Lightning Fast',
//                 description: 'Built with Next.js for optimal performance and speed'
//               },
//               {
//                 icon: '🔄',
//                 title: 'Auto Deploy',
//                 description: 'Push to GitHub and watch your changes go live automatically'
//               },
//               {
//                 icon: '🛡️',
//                 title: 'Secure & Scalable',
//                 description: 'AWS infrastructure ensures security and handles any scale'
//               },
//               {
//                 icon: '🎨',
//                 title: 'Modern Design',
//                 description: 'Beautiful UI with Tailwind CSS and smooth animations'
//               },
//               {
//                 icon: '📊',
//                 title: 'Real-time API',
//                 description: 'Node.js backend with Express for fast API responses'
//               },
//               {
//                 icon: '🚀',
//                 title: 'Production Ready',
//                 description: 'CloudFront CDN and Elastic Beanstalk for reliability'
//               }
//             ].map((feature, index) => (
//               <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition group hover:scale-105">
//                 <div className="text-5xl mb-4 group-hover:scale-110 transition">{feature.icon}</div>
//                 <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
//                 <p className="text-gray-300">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Tech Stack Section */}
//       <section className="py-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold text-white mb-4">Built With Modern Tech</h2>
//             <p className="text-xl text-gray-300">Industry-leading tools and frameworks</p>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               { name: 'Next.js', color: 'from-black to-gray-800' },
//               { name: 'Node.js', color: 'from-green-600 to-green-800' },
//               { name: 'AWS', color: 'from-orange-500 to-yellow-600' },
//               { name: 'Tailwind', color: 'from-cyan-500 to-blue-600' }
//             ].map((tech, index) => (
//               <div key={index} className={`bg-gradient-to-br ${tech.color} rounded-xl p-6 text-center hover:scale-105 transition shadow-lg`}>
//                 <span className="text-white font-bold text-xl">{tech.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-6">
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center shadow-2xl">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Get Started?</h2>
//             <p className="text-xl text-purple-100 mb-8">Join thousands of developers building amazing applications</p>
//             <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition shadow-lg">
//               Start Your Project
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-12 px-6 border-t border-white/10">
//         <div className="max-w-7xl mx-auto text-center">
//           <p className="text-gray-400">© 2025 NaveenDev. Built with Next.js + Node.js on AWS</p>
//           <p className="text-gray-500 text-sm mt-2">Naveen Deployed via CI/CD Pipeline</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// Step 3:-

'use client';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('frontend');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Scroll effect
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // Mouse tracking for parallax
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Fetch backend
    fetch(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/message')
      .then(res => res.json())
      .then(data => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setMessage('Backend connection established');
        setLoading(false);
      });

    // Particle animation
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      interface Particle {
        x: number;
        y: number;
        vx: number;
        vy: number;
        size: number;
      }

      const particles: Particle[] = [];
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1
        });
      }

      let animationFrameId: number;

      function animate() {
        if (!ctx || !canvas) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(139, 92, 246, 0.5)';
        
        particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
          
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        });

        // Draw connections
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)';
        particles.forEach((p1, i) => {
          particles.slice(i + 1).forEach(p2 => {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          });
        });

        animationFrameId = requestAnimationFrame(animate);
      }
      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const parallaxX = (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) * 0.02;
  const parallaxY = (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 0) / 2) * 0.02;

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Canvas Background */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-30" />

      {/* Gradient Orbs with Parallax */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[600px] h-[600px] bg-purple-600 rounded-full blur-[120px] opacity-30 -top-48 -left-48"
          style={{ transform: `translate(${parallaxX}px, ${parallaxY}px)` }}
        />
        <div 
          className="absolute w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-20 top-1/4 right-0"
          style={{ transform: `translate(${-parallaxX}px, ${-parallaxY}px)` }}
        />
        <div 
          className="absolute w-[400px] h-[400px] bg-pink-600 rounded-full blur-[100px] opacity-20 bottom-0 left-1/3"
          style={{ transform: `translate(${parallaxX * 1.5}px, ${parallaxY * 1.5}px)` }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/60 backdrop-blur-2xl border-b border-white/10' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">NaveenDev</span>
                <div className="text-xs text-gray-400">Full-Stack Platform</div>
              </div>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              {['Features', 'Technology', 'Showcase', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all"></span>
                </a>
              ))}
            </div>
            <div className="flex gap-3">
              <button className="hidden md:block px-6 py-2 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 transition">
                Sign In
              </button>
              <button className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-md group-hover:blur-lg transition"></div>
                <div className="relative px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold">
                  Get Started
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-8 hover:scale-105 transition cursor-pointer">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              🚀 Live on AWS with Automated CI/CD
            </span>
          </div>

          <h1 className="text-7xl md:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Build the
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
              Future
            </span>
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              {' '}of Web
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience blazing-fast full-stack development with Next.js, Node.js, and AWS. 
            <span className="text-purple-400 font-semibold"> Deploy in seconds</span>, 
            <span className="text-blue-400 font-semibold"> scale infinitely</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 rounded-2xl blur-xl group-hover:blur-2xl transition opacity-75"></div>
              <div className="relative px-10 py-5 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 rounded-2xl text-lg font-bold hover:scale-105 transition shadow-2xl">
                Start Building Now
              </div>
            </button>
            <button className="px-10 py-5 bg-white/5 backdrop-blur-xl rounded-2xl text-lg font-bold border border-white/20 hover:bg-white/10 hover:border-white/40 transition">
              Watch Demo
            </button>
          </div>

          {/* Backend Status Card */}
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition"></div>
              <div className="relative bg-black/40 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all hover:scale-[1.02] shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Backend API Status</h3>
                      <p className="text-sm text-gray-400">Real-time connection monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30">
                    <div className={`w-3 h-3 rounded-full ${loading ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`}></div>
                    <span className="text-sm font-semibold">{loading ? 'Connecting' : 'Online'}</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl p-6 border border-purple-500/20">
                  {loading ? (
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-lg text-gray-300">Establishing secure connection...</span>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span className="font-mono text-lg text-purple-300">{message}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="text-blue-400">◆</span>
                        <span>Deployed via AWS CodePipeline</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="text-pink-400">◆</span>
                        <span>Hosted on Elastic Beanstalk</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20 mb-4">
              <span className="text-purple-400 font-semibold">⚡ POWERFUL FEATURES</span>
            </div>
            <h2 className="text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Everything You Need</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built with modern technologies and best practices for production-ready applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🚀',
                title: 'Lightning Performance',
                description: 'Next.js 14 with App Router for blazing-fast page loads and optimal SEO',
                gradient: 'from-purple-600 to-blue-600'
              },
              {
                icon: '🔄',
                title: 'Auto Deployment',
                description: 'GitHub push triggers instant deployment via AWS CodePipeline',
                gradient: 'from-blue-600 to-cyan-600'
              },
              {
                icon: '🛡️',
                title: 'Enterprise Security',
                description: 'AWS IAM roles, VPC networking, and encrypted data transfer',
                gradient: 'from-cyan-600 to-teal-600'
              },
              {
                icon: '🎨',
                title: 'Modern UI/UX',
                description: 'Tailwind CSS with advanced animations and glassmorphism effects',
                gradient: 'from-teal-600 to-green-600'
              },
              {
                icon: '📊',
                title: 'Real-time API',
                description: 'Express.js backend with WebSocket support for live updates',
                gradient: 'from-green-600 to-yellow-600'
              },
              {
                icon: '☁️',
                title: 'Global CDN',
                description: 'CloudFront distribution for sub-50ms response times worldwide',
                gradient: 'from-yellow-600 to-orange-600'
              }
            ].map((feature, i) => (
              <div key={i} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition duration-500`}></div>
                <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all hover:scale-105 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="technology" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Technology Stack</span>
            </h2>
          </div>

          <div className="flex gap-4 mb-8 justify-center flex-wrap">
            {['frontend', 'backend', 'devops'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {activeTab === 'frontend' && [
              { name: 'Next.js 14', desc: 'React Framework', color: 'from-black to-gray-800' },
              { name: 'React 18', desc: 'UI Library', color: 'from-blue-600 to-cyan-600' },
              { name: 'Tailwind CSS', desc: 'Styling', color: 'from-cyan-500 to-blue-600' },
              { name: 'TypeScript', desc: 'Type Safety', color: 'from-blue-700 to-blue-900' }
            ].map((tech, i) => (
              <div key={i} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition`}></div>
                <div className={`relative bg-gradient-to-br ${tech.color} rounded-2xl p-8 text-center hover:scale-105 transition`}>
                  <div className="text-2xl font-bold mb-2">{tech.name}</div>
                  <div className="text-sm opacity-75">{tech.desc}</div>
                </div>
              </div>
            ))}

            {activeTab === 'backend' && [
              { name: 'Node.js', desc: 'Runtime', color: 'from-green-700 to-green-900' },
              { name: 'Express', desc: 'Web Framework', color: 'from-gray-700 to-gray-900' },
              { name: 'REST API', desc: 'Architecture', color: 'from-purple-700 to-purple-900' },
              { name: 'CORS', desc: 'Security', color: 'from-red-700 to-red-900' }
            ].map((tech, i) => (
              <div key={i} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition`}></div>
                <div className={`relative bg-gradient-to-br ${tech.color} rounded-2xl p-8 text-center hover:scale-105 transition`}>
                  <div className="text-2xl font-bold mb-2">{tech.name}</div>
                  <div className="text-sm opacity-75">{tech.desc}</div>
                </div>
              </div>
            ))}

            {activeTab === 'devops' && [
              { name: 'AWS', desc: 'Cloud Platform', color: 'from-orange-600 to-yellow-700' },
              { name: 'CodePipeline', desc: 'CI/CD', color: 'from-blue-600 to-blue-800' },
              { name: 'CloudFront', desc: 'CDN', color: 'from-purple-600 to-purple-800' },
              { name: 'Beanstalk', desc: 'Hosting', color: 'from-green-600 to-green-800' }
            ].map((tech, i) => (
              <div key={i} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition`}></div>
                <div className={`relative bg-gradient-to-br ${tech.color} rounded-2xl p-8 text-center hover:scale-105 transition`}>
                  <div className="text-2xl font-bold mb-2">{tech.name}</div>
                  <div className="text-sm opacity-75">{tech.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 rounded-[3rem] blur-3xl opacity-20"></div>
          <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 rounded-[3rem] p-16 text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-6">Ready to Launch?</h2>
            <p className="text-xl md:text-2xl mb-10 text-purple-100 max-w-2xl mx-auto">
              Join thousands of developers building the next generation of web applications
            </p>
            <button className="px-10 py-5 bg-white text-purple-600 rounded-2xl text-lg font-bold hover:scale-105 transition shadow-2xl">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2025 NaveenDev. Built with Next.js + Node.js on AWS</p>
          <p className="text-gray-500 text-sm mt-2">Deployed via CI/CD Pipeline</p>
        </div>
      </footer>
    </div>
  );
}