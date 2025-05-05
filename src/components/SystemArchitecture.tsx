import React, { useRef } from 'react';
import { ArrowDown, Database, Layout, Users, Settings, MessageSquare, Brain, Globe, Download } from 'lucide-react';
import { toPng } from 'html-to-image';

const SystemArchitecture: React.FC = () => {
  const diagramRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (diagramRef.current) {
      try {
        const dataUrl = await toPng(diagramRef.current, {
          quality: 1.0,
          pixelRatio: 2,
          backgroundColor: '#ffffff'
        });
        
        const link = document.createElement('a');
        link.download = 'system-architecture.jpg';
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.error('Error generating image:', error);
      }
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleDownload}
        className="absolute top-4 right-4 p-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors duration-200 flex items-center gap-2"
      >
        <Download className="w-4 h-4" />
        Download Diagram
      </button>

      <div ref={diagramRef} className="w-full max-w-6xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
          System Architecture - Interview Preparation Platform
        </h2>
        
        <div className="relative space-y-8">
          {/* Client Layer */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100">Client Layer</h3>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-white dark:bg-gray-800 rounded shadow-sm">
                <p className="font-medium text-blue-800 dark:text-blue-200">Web Browser</p>
                <p className="text-sm text-blue-600 dark:text-blue-300">Desktop & Mobile</p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded shadow-sm">
                <p className="font-medium text-blue-800 dark:text-blue-200">PWA Support</p>
                <p className="text-sm text-blue-600 dark:text-blue-300">Offline Access</p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded shadow-sm">
                <p className="font-medium text-blue-800 dark:text-blue-200">Local Storage</p>
                <p className="text-sm text-blue-600 dark:text-blue-300">User Data Cache</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
          </div>

          {/* Frontend Layer */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
            <div className="flex items-center justify-center mb-4">
              <Layout className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-2" />
              <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100">Frontend Layer</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="p-3 bg-white dark:bg-gray-800 rounded shadow-sm">
                  <p className="font-medium text-purple-800 dark:text-purple-200">React Components</p>
                  <ul className="text-sm text-purple-600 dark:text-purple-300 mt-2 space-y-1">
                    <li>• Authentication Views</li>
                    <li>• Dashboard</li>
                    <li>• Company Profiles</li>
                    <li>• Practice Interface</li>
                  </ul>
                </div>
                <div className="p-3 bg-white dark:bg-gray-800 rounded shadow-sm">
                  <p className="font-medium text-purple-800 dark:text-purple-200">State Management</p>
                  <ul className="text-sm text-purple-600 dark:text-purple-300 mt-2 space-y-1">
                    <li>• React Context</li>
                    <li>• Local Storage</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-2">
                <div className="p-3 bg-white dark:bg-gray-800 rounded shadow-sm">
                  <p className="font-medium text-purple-800 dark:text-purple-200">UI/UX Layer</p>
                  <ul className="text-sm text-purple-600 dark:text-purple-300 mt-2 space-y-1">
                    <li>• Tailwind CSS</li>
                    <li>• Responsive Design</li>
                    <li>• Dark Mode</li>
                  </ul>
                </div>
                <div className="p-3 bg-white dark:bg-gray-800 rounded shadow-sm">
                  <p className="font-medium text-purple-800 dark:text-purple-200">Data Layer</p>
                  <ul className="text-sm text-purple-600 dark:text-purple-300 mt-2 space-y-1">
                    <li>• JSON Data Store</li>
                    <li>• TypeScript Types</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
          </div>

          {/* Integration Layer */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-lg border border-emerald-100 dark:border-emerald-800">
            <div className="flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mr-2" />
              <h3 className="text-xl font-semibold text-emerald-900 dark:text-emerald-100">Integration Layer</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-white dark:bg-gray-800 rounded shadow-sm">
                <p className="font-medium text-emerald-800 dark:text-emerald-200">AI Services</p>
                <ul className="text-sm text-emerald-600 dark:text-emerald-300 mt-2 space-y-1">
                  <li>• Question Generation</li>
                  <li>• Answer Analysis</li>
                  <li>• Feedback System</li>
                </ul>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded shadow-sm">
                <p className="font-medium text-emerald-800 dark:text-emerald-200">External APIs</p>
                <ul className="text-sm text-emerald-600 dark:text-emerald-300 mt-2 space-y-1">
                  <li>• Company Data</li>
                  <li>• Interview Questions</li>
                  <li>• Analytics</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
          </div>

          {/* Deployment Layer */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
            <div className="flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-amber-600 dark:text-amber-400 mr-2" />
              <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100">Deployment Layer</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-3 bg-white dark:bg-gray-800 rounded shadow-sm">
                <p className="font-medium text-amber-800 dark:text-amber-200">Netlify Hosting</p>
                <ul className="text-sm text-amber-600 dark:text-amber-300 mt-2 space-y-1">
                  <li>• Continuous Deployment</li>
                  <li>• SSL/TLS Security</li>
                  <li>• CDN Distribution</li>
                  <li>• Edge Functions (Optional)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemArchitecture;