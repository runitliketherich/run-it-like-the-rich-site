import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, CheckCircle2, Download, ExternalLink, Sparkles } from 'lucide-react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetTitle?: string;
  presetDesc?: string;
}

export default function NewsletterModal({ 
  isOpen, 
  onClose, 
  presetTitle = 'Join the Weekly Reset',
  presetDesc = 'Weekly owner ideas, money routines, clean books, and back-office guidelines delivered direct.'
}: NewsletterModalProps) {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [downloaded, setDownloaded] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="newsletter-modal-overlay">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          id="newsletter-modal-backdrop"
        />

        {/* Modal content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative bg-white border border-ink/15 rounded-sm shadow-xl max-w-md w-full overflow-hidden z-10 p-6 md:p-8"
          id="newsletter-modal-card"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-ink/60 hover:text-ink hover:bg-black/5 rounded-full transition-all"
            id="btn-close-newsletter-modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div className="text-left space-y-5" id="newsletter-form-container">
              <div className="w-12 h-12 rounded-full bg-accent-light border border-accent/20 flex items-center justify-center" id="newsletter-logo-badge">
                <Sparkles className="w-5 h-5 text-accent-dark" />
              </div>

              <div>
                <h3 className="text-xl font-serif-display text-ink font-bold tracking-tight" id="newsletter-title">
                  {presetTitle}
                </h3>
                <p className="text-xs text-ink/60 mt-2 leading-relaxed" id="newsletter-description">
                  {presetDesc}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" id="newsletter-form">
                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-widest text-ink/50 font-bold mb-1">First Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah"
                    className="w-full px-3.5 py-2.5 bg-white border border-ink/15 rounded-sm text-sm text-ink focus:outline-none focus:border-accent placeholder-ink/30"
                    id="input-newsletter-name"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-widest text-ink/50 font-bold mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. sarah@domain.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-ink/15 rounded-sm text-sm text-ink focus:outline-none focus:border-accent placeholder-ink/30"
                    id="input-newsletter-email"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || !name || !email}
                  className="w-full py-3 bg-ink hover:bg-accent text-paper hover:text-white font-semibold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center space-x-2"
                  id="btn-submit-newsletter"
                >
                  <Mail className="w-4 h-4" />
                  <span>{loading ? 'Subscribing...' : 'Get Instant Access'}</span>
                </button>
              </form>

              <div className="text-center" id="newsletter-meta-disclaimer">
                <p className="text-[10px] text-ink/40 leading-normal font-mono">
                  Zero spam. Substack-hosted. Unsubscribe in one click anytime.
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-6 space-y-5" id="newsletter-success-container">
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-500/20 flex items-center justify-center mx-auto" id="success-icon-badge">
                <CheckCircle2 className="w-7 h-7 text-emerald-600" />
              </div>

              <div>
                <h3 className="text-2xl font-serif-display text-ink font-bold">You are on the list!</h3>
                <p className="text-xs text-ink/60 mt-2 max-w-sm mx-auto leading-relaxed">
                  Thanks for subscribing, {name}. You are now set up to receive the weekly back-office resets!
                </p>
              </div>

              <div className="bg-paper border border-ink/8 p-4 rounded-sm space-y-3 text-left w-full max-w-sm mx-auto" id="success-newsletter-downloads">
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent-dark font-bold block">Bonus Material Unlocked</span>
                
                <div className="flex items-center justify-between" id="unlocked-asset-1">
                  <div className="flex items-center space-x-2">
                    <Download className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span className="text-xs font-semibold text-ink">ABC Owner Scorecard PDF</span>
                  </div>
                  <button 
                    onClick={() => {
                      setDownloaded(true);
                    }}
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider transition-all ${
                      downloaded ? 'text-emerald-600 cursor-default' : 'text-accent-dark hover:text-accent hover:underline'
                    }`}
                    id="lnk-download-scorecard-pdf"
                  >
                    {downloaded ? '✓ Downloaded' : 'Download'}
                  </button>
                </div>

                <div className="flex items-center justify-between" id="unlocked-asset-2">
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="w-4 h-4 text-accent-dark flex-shrink-0" />
                    <span className="text-xs font-semibold text-ink">Read first edition on Substack</span>
                  </div>
                  <a 
                    href="https://runitliketherich.substack.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[10px] text-accent-dark hover:text-accent hover:underline font-mono font-bold uppercase tracking-wider"
                    id="lnk-read-first-edition"
                  >
                    Open
                  </a>
                </div>
              </div>

              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-ink text-paper hover:bg-accent font-semibold text-[10px] uppercase tracking-widest rounded-sm hover:text-white transition-all w-full max-w-xs mx-auto block"
                id="btn-close-newsletter-success"
              >
                Done
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
