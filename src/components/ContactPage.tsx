import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const contactBannerUrl = "https://ik.imagekit.io/d2kpqgzni/a23e80d6-c6e1-4009-a8b9-c4f37face85d.png";
  const contactBannerFallback = "/src/assets/images/contact_banner_new.png";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Open WhatsApp with form message or show success state
    const text = `Hello Ramana Xerox!%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Message:* ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/916381726369?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-slate-50 flex flex-col pb-16">
      
      {/* Top Full-Width Edge-to-Edge Contact Banner Image */}
      <div className="w-full bg-white shadow-sm border-b border-slate-200 overflow-hidden mb-10">
        <img
          src={contactBannerUrl}
          alt="Contact Us - Ramana Xerox"
          className="w-full h-auto object-cover block"
          loading="eager"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== contactBannerFallback) {
              target.src = contactBannerFallback;
            }
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout matching user's reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Send Us a Message Form (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl border-2 border-slate-200/80 p-6 sm:p-8 shadow-sm">
            <h3 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight mb-6">
              Send Us a Message
            </h3>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-900">Message Sent Successfully!</h4>
                <p className="text-xs text-emerald-700">
                  Thank you for reaching out. We have opened WhatsApp with your message details to our counter.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-yellow-400 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-yellow-400 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="6381726369"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-yellow-400 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your printing requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-yellow-400 focus:bg-white transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Send Message Button in Yellow */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-black text-sm rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 text-blue-950" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Information Cards (6 cols) with Yellow Icons */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight mb-6">
              Contact Information
            </h3>

            {/* Phone Card */}
            <div className="bg-white rounded-3xl border-2 border-slate-200/80 p-5 sm:p-6 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-yellow-400 text-blue-950 flex items-center justify-center shrink-0 shadow-xs font-black">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-1">
                  Phone
                </h4>
                <div className="space-y-0.5 text-sm font-bold text-blue-950 font-mono">
                  <p>+91 63817 26369</p>
                  <p>04144 357456</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-3xl border-2 border-slate-200/80 p-5 sm:p-6 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-yellow-400 text-blue-950 flex items-center justify-center shrink-0 shadow-xs font-black">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-1">
                  Email
                </h4>
                <p className="text-sm font-bold text-blue-950 break-all">
                  ramanaxerox20@gmail.com
                </p>
              </div>
            </div>

            {/* Our Addresses Card */}
            <div className="bg-white rounded-3xl border-2 border-slate-200/80 p-5 sm:p-6 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-yellow-400 text-blue-950 flex items-center justify-center shrink-0 shadow-xs font-black">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-3">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider">
                  Our Branches
                </h4>
                
                <div>
                  <p className="text-xs font-black text-blue-950">BRANCH 1 (CHIDAMBARAM)</p>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    No 1, Villangiamman Kovil Street, Chidambaram
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <p className="text-xs font-black text-blue-950">BRANCH 2 (CHIDAMBARAM)</p>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    Shop no 3, Periya Gajiyar Street, Chidambaram
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <p className="text-xs font-black text-blue-950">BRANCH 3 (BHUVANAGIRI)</p>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    AMH Complex, Shop no 2, Cuddalore Main Road, Bhuvanagiri (Near Apollo Pharmacy)
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-3xl border-2 border-slate-200/80 p-5 sm:p-6 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-yellow-400 text-blue-950 flex items-center justify-center shrink-0 shadow-xs font-black">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-1">
                  Hours
                </h4>
                <p className="text-sm font-bold text-blue-950">
                  Open • Closes 9:00 PM
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Monday – Sunday: 9:00 AM – 9:00 PM
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
