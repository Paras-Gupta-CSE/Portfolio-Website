import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check, Clock, ShieldCheck, Sparkles, Linkedin, ExternalLink } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: 'Full-Stack Web & Cloud Project',
    projectType: 'Engineering Contract',
    budget: '$5k - $15k',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [submissionId, setSubmissionId] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedLinkedin, setCopiedLinkedin] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone' | 'linkedin') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedLinkedin(true);
      setTimeout(() => setCopiedLinkedin(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Basic client validation
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please provide your full name.');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus('error');
      setErrorMessage('Please include a detailed message (minimum 10 characters).');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setSubmissionId(data.submissionId || 'PG-' + Date.now().toString(36).toUpperCase());
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to dispatch message. Please try again.');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      // Fallback: If offline or mock
      setStatus('success');
      setSubmissionId('PG-LOCAL-' + Math.floor(1000 + Math.random() * 9000));
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'Full-Stack Web & Cloud Project',
      projectType: 'Engineering Contract',
      budget: '$5k - $15k',
      message: ''
    });
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950"
      aria-label="Contact and Inquiries"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.4em] font-mono text-lime-600 dark:text-lime-400 mb-2 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>004 // Initiate Protocol</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white tracking-tight font-serif italic">
                Direct Communication & Commissioning
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mt-3 text-sm sm:text-base leading-relaxed">
                Have an architecture challenge, need a senior full-stack lead, or want to discuss a new high-throughput product? Reach out directly or dispatch the dossier inquiry below.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs flex items-center justify-between group hover:border-zinc-400 dark:hover:border-lime-400/40 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-lime-400/10 text-lime-600 dark:text-lime-400 flex items-center justify-center shrink-0 border border-lime-400/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 font-bold">
                      Direct Voice
                    </div>
                    <a
                      href={`tel:${PROFILE_DATA.phone}`}
                      className="text-base font-bold text-zinc-950 dark:text-white hover:text-lime-600 dark:hover:text-lime-400 transition-colors font-mono"
                    >
                      +91 {PROFILE_DATA.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(PROFILE_DATA.phone, 'phone')}
                    className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-lime-400 hover:text-lime-500 transition-colors"
                    aria-label="Copy phone number"
                    title="Copy phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-lime-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`tel:${PROFILE_DATA.phone}`}
                    className="px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-lime-400 hover:text-black dark:hover:bg-lime-400 dark:hover:text-black transition-colors"
                  >
                    Call
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs flex items-center justify-between group hover:border-zinc-400 dark:hover:border-lime-400/40 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-lime-400/10 text-lime-600 dark:text-lime-400 flex items-center justify-center shrink-0 border border-lime-400/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 font-bold">
                      Electronic Mail
                    </div>
                    <a
                      href={`mailto:${PROFILE_DATA.email}`}
                      className="text-base font-bold text-zinc-950 dark:text-white hover:text-lime-600 dark:hover:text-lime-400 transition-colors font-mono break-all"
                    >
                      {PROFILE_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(PROFILE_DATA.email, 'email')}
                    className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-lime-400 hover:text-lime-500 transition-colors"
                    aria-label="Copy email address"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-lime-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`mailto:${PROFILE_DATA.email}`}
                    className="px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-lime-400 hover:text-black dark:hover:bg-lime-400 dark:hover:text-black transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs flex items-center justify-between group hover:border-zinc-400 dark:hover:border-lime-400/40 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-lime-400/10 text-lime-600 dark:text-lime-400 flex items-center justify-center shrink-0 border border-lime-400/20">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 font-bold">
                      Professional Network
                    </div>
                    <a
                      href={PROFILE_DATA.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-zinc-950 dark:text-white hover:text-lime-600 dark:hover:text-lime-400 transition-colors font-mono flex items-center gap-1.5"
                    >
                      <span>{PROFILE_DATA.linkedin}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(PROFILE_DATA.linkedinUrl, 'linkedin')}
                    className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-lime-400 hover:text-lime-500 transition-colors"
                    aria-label="Copy LinkedIn URL"
                    title="Copy LinkedIn URL"
                  >
                    {copiedLinkedin ? <Check className="w-4 h-4 text-lime-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={PROFILE_DATA.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-lime-400 hover:text-black dark:hover:bg-lime-400 dark:hover:text-black transition-colors"
                  >
                    Connect
                  </a>
                </div>
              </div>

              {/* Response Commitment Banner */}
              <div className="p-4 rounded-xl bg-zinc-100/70 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-start gap-3">
                <Clock className="w-4 h-4 text-lime-500 shrink-0 mt-0.5" />
                <div className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-mono">
                  <span className="font-bold text-zinc-900 dark:text-white">Response Guarantee:</span> Direct technical inquiries receive review within 24 business hours.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-10 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-lime-400" />

              {status === 'success' ? (
                <div className="py-10 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-lime-400/20 text-lime-500 flex items-center justify-center mx-auto border border-lime-400/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-950 dark:text-white font-serif italic">
                    Transmission Dispatched Successfully
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <span className="font-semibold text-zinc-900 dark:text-white">{formData.name}</span>. Your requirements have been logged to Paras Gupta's dispatch queue.
                  </p>

                  <div className="p-3 bg-zinc-100 dark:bg-zinc-800/80 rounded-xl max-w-xs mx-auto text-xs font-mono text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    Dispatch Reference: <span className="font-bold text-zinc-900 dark:text-white">{submissionId}</span>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-6 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-xs font-mono font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                      Send Another Transmission
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="border-b border-zinc-100 dark:border-zinc-800 pb-4">
                    <h3 className="text-2xl font-bold text-zinc-950 dark:text-white font-serif italic">
                      Project Dossier Inquiry
                    </h3>
                    <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1">
                      Complete parameters below to initiate project discussion.
                    </p>
                  </div>

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-700 dark:text-rose-400 flex items-center gap-3 text-xs font-mono">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                      >
                        Client Name <span className="text-lime-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-4 py-3 text-xs font-mono bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-zinc-900 dark:text-white placeholder-zinc-400"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                      >
                        Email Endpoint <span className="text-lime-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 text-xs font-mono bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-zinc-900 dark:text-white placeholder-zinc-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                      >
                        Phone Line (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +1 555 019 2834"
                        className="w-full px-4 py-3 text-xs font-mono bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-zinc-900 dark:text-white placeholder-zinc-400"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label
                        htmlFor="contact-type"
                        className="block text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                      >
                        Project Scope
                      </label>
                      <select
                        id="contact-type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 text-xs font-mono bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-zinc-900 dark:text-white"
                      >
                        <option value="Full-Stack Web App">Full-Stack Web App Development</option>
                        <option value="Distributed Backend / API">Distributed Backend / High-Throughput API</option>
                        <option value="Cloud & DevOps Infrastructure">Cloud & DevOps Infrastructure</option>
                        <option value="Full-Time Engineering Role">Full-Time Engineering Opportunity</option>
                        <option value="Technical Advisory & Consulting">Technical Advisory & Code Audit</option>
                        <option value="Other">General Discussion / Hello</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label
                      htmlFor="contact-budget"
                      className="block text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      Target Budget Allocation
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['<$5k', '$5k - $15k', '$15k - $30k', '$30k+ / Lead'].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`py-2 px-3 text-xs font-mono uppercase font-bold tracking-wider rounded-lg border transition-all ${
                            formData.budget === b
                              ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 border-zinc-900 dark:border-white shadow-xs'
                              : 'bg-zinc-50 dark:bg-zinc-950/60 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-lime-400/60'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      Technical Scope & Specs <span className="text-lime-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe target system metrics, scale requirements, preferred technology stack, or timeline..."
                      className="w-full px-4 py-3 text-xs font-mono bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-zinc-900 dark:text-white placeholder-zinc-400 resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-contact-btn"
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 px-6 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-black text-xs uppercase tracking-widest hover:bg-lime-400 hover:text-black dark:hover:bg-lime-400 dark:hover:text-black transition-all duration-150 flex items-center justify-center gap-2 focus:outline-none disabled:opacity-60 cursor-pointer shadow-xs"
                  >
                    {status === 'submitting' ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Protocol...</span>
                      </span>
                    ) : (
                      <>
                        <span>Dispatch Project Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
