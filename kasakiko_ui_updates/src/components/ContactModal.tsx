import React, { useState } from 'react';
import { X, MessageSquare, CheckCircle2, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, initialTopic }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(initialTopic || 'General Inquiry');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Synchronize initialTopic if modal opens with a specific topic requested
  React.useEffect(() => {
    if (initialTopic) {
      setTopic(initialTopic);
    }
  }, [initialTopic, isOpen]);

  if (!isOpen) return null;

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setFullName('');
    setEmail('');
    setTopic(initialTopic || 'General Inquiry');
    setOrganization('');
    setMessage('');
    setErrorMessage('');
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setErrorMessage('Please provide a message with at least 10 characters.');
      return;
    }

    setIsSubmitting(true);
    // Simulate lightweight client dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#092345]/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={handleResetAndClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-card border border-[#98D6D6]/50 relative my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#293C54]/60 hover:text-[#092345] hover:bg-[#E8F5F4] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-[#E8F5F4] rounded-full flex items-center justify-center mx-auto mb-4 text-[#2EABBA]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3
              className="text-2xl font-bold text-[#092345] mb-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Message Sent!
            </h3>
            <p className="text-sm text-[#293C54] mb-6 max-w-sm mx-auto leading-relaxed">
              Thank you for reaching out. We have received your message and will follow up with you at{' '}
              <span className="font-semibold text-[#092345]">{email}</span> shortly.
            </p>
            <button
              type="button"
              onClick={handleResetAndClose}
              className="px-6 py-2.5 bg-[#092345] text-white font-semibold text-sm rounded-full hover:bg-[#18738B] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-[#18738B] uppercase tracking-wider">
              <MessageSquare className="w-4 h-4" />
              <span>Contact Team</span>
            </div>

            <h2
              className="text-2xl font-bold text-[#092345] mb-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Get in Touch with Kasakiko
            </h2>
            <p className="text-sm text-[#293C54]/80 mb-6 leading-relaxed">
              Have a question, feedback, or need help with a verified review? Send our team a message below.
            </p>

            {errorMessage && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#092345] uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Alex Miller"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#2EABBA] text-sm text-[#092345] bg-[#FAF8F5]/50"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#092345] uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#2EABBA] text-sm text-[#092345] bg-[#FAF8F5]/50"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#092345] uppercase tracking-wider mb-1.5">
                  Inquiry Topic
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#2EABBA] text-sm text-[#092345] bg-[#FAF8F5]/50 cursor-pointer"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Press & Media">Press & Media</option>
                  <option value="Community or Tenant Organization">Community or Tenant Organization</option>
                  <option value="Review Verification Question">Review Verification Question</option>
                  <option value="Landlord Profile & Claiming">Landlord Profile & Claiming</option>
                  <option value="Report an Issue / Feedback">Report an Issue / Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#092345] uppercase tracking-wider mb-1.5">
                  Organization or Outlet (Title / Name)
                </label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="e.g. SF Chronicle, Housing Rights Committee, or Independent"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#2EABBA] text-sm text-[#092345] bg-[#FAF8F5]/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#092345] uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what's on your mind..."
                  rows={4}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#2EABBA] text-sm text-[#092345] bg-[#FAF8F5]/50 resize-none"
                  required
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2 text-sm text-[#293C54] hover:text-[#092345] font-medium transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#092345] text-white text-sm font-semibold rounded-full hover:bg-[#18738B] transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
