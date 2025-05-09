import React from 'react';
import { MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-black/90 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-gradient">Contact Us</h2>
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-purple-400" />
                <p className="text-gray-300">MaxVoyager Studios is located in Washington State</p>
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src="https://ik.imagekit.io/a7tech/Testarossaaudio/emailaisupercharged.jpg?updatedAt=1746804122277"
                  alt="Contact Email"
                  className="max-w-full h-auto"
                />
              </div>
              <p className="text-gray-300 mt-4">
                If you wish to learn more about our work, please don't hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}