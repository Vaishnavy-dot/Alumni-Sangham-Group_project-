import React, { useEffect } from 'react';
import FileEdit from 'lucide-react/dist/esm/icons/file-edit.js';
import X from 'lucide-react/dist/esm/icons/x.js';
import { Button } from '@/components/ui/button';

export function ComposeDialog({ open, onOpenChange, role }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onOpenChange(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onOpenChange, open]);

  if (!open) return null;

  const title = role === 'student' ? 'Write Article' : 'Create Post';
  const description =
    role === 'student'
      ? 'Draft an article, mentorship note, or job insight for the community.'
      : 'Start a new alumni update, opportunity drop, or community story.';

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center px-4">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close compose modal"
        className="absolute inset-0 backdrop-blur-sm"
        style={{ background: 'rgba(200,200,210,0.45)' }}
        onClick={() => onOpenChange(false)}
      />

      {/* Modal card — light glassmorphism matching the dashboard */}
      <div
        className="relative z-10 w-full max-w-xl rounded-2xl p-7"
        style={{
          background: 'rgba(245,245,248,0.92)',
          boxShadow: '0 8px 40px rgba(180,180,200,0.25), 0 1.5px 0 rgba(255,255,255,0.9) inset',
          border: '1px solid rgba(220,220,230,0.7)',
          backdropFilter: 'blur(18px)',
          fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
        }}
      >
        {/* Header row */}
        <div className="flex items-start justify-between gap-4">
          <div>
            {/* Pill badge — lime green accent like "PAID" badge in image */}
            <div
              className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-bold uppercase tracking-widest"
              style={{ background: '#CCFF00', color: '#1a1a1a', letterSpacing: '0.12em' }}
            >
              <FileEdit style={{ width: 11, height: 11 }} />
              Compose
            </div>

            {/* Bold black title — matches dashboard's heavy typography */}
            <h2
              className="mt-4 font-black uppercase leading-none tracking-tight"
              style={{ fontSize: '2rem', color: '#111114', letterSpacing: '-0.02em' }}
            >
              {title}
            </h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed" style={{ color: '#888899' }}>
              {description}
            </p>
          </div>

          {/* Close button — soft grey pill */}
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl transition"
            style={{
              background: 'rgba(210,210,220,0.5)',
              border: '1px solid rgba(200,200,215,0.6)',
              color: '#8888a0',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(190,190,205,0.7)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(210,210,220,0.5)')}
            onClick={() => onOpenChange(false)}
          >
            <X style={{ width: 15, height: 15 }} />
          </button>
        </div>

        {/* Input area — inset card like the order cards in the dashboard */}
        <div
          className="mt-6 rounded-xl p-4"
          style={{
            background: 'rgba(232,232,238,0.55)',
            border: '1px solid rgba(215,215,225,0.6)',
          }}
        >
          <div
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: '#aaaabc', letterSpacing: '0.18em' }}
          >
            Preview
          </div>
          <div className="mt-4 space-y-3">
            <input
              type="text"
              placeholder="Write a title"
              className="w-full rounded-xl px-4 py-3 text-sm outline-none transition"
              style={{
                background: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(210,210,222,0.7)',
                color: '#111114',
                fontFamily: 'inherit',
              }}
              onFocus={e => (e.target.style.border = '1px solid rgba(255,120,80,0.5)')}
              onBlur={e => (e.target.style.border = '1px solid rgba(210,210,222,0.7)')}
            />
            <textarea
              rows={5}
              placeholder="Share something meaningful with the network..."
              className="w-full resize-none rounded-xl px-4 py-3 text-sm outline-none transition"
              style={{
                background: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(210,210,222,0.7)',
                color: '#111114',
                fontFamily: 'inherit',
                minHeight: 120,
              }}
              onFocus={e => (e.target.style.border = '1px solid rgba(255,120,80,0.5)')}
              onBlur={e => (e.target.style.border = '1px solid rgba(210,210,222,0.7)')}
            />
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-5 flex items-center justify-end gap-3">
          {/* Cancel — ghost pill matching "VIEW DETAILS" buttons */}
          <button
            type="button"
            className="rounded-full px-5 py-2.5 text-sm font-semibold transition"
            style={{
              background: 'rgba(220,220,230,0.55)',
              border: '1px solid rgba(205,205,218,0.6)',
              color: '#666677',
              fontFamily: 'inherit',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(205,205,218,0.8)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(220,220,230,0.55)')}
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </button>

          {/* Primary CTA — coral/salmon gradient matching "CREATE AN ORDER" button */}
          <button
            type="button"
            className="rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-widest transition"
            style={{
              background: 'linear-gradient(135deg, #FF7A5A 0%, #FF5733 100%)',
              color: '#fff',
              border: 'none',
              fontFamily: 'inherit',
              letterSpacing: '0.1em',
              boxShadow: '0 4px 18px rgba(255,87,51,0.28)',
            }}
            onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1.07)')}
            onMouseLeave={e => (e.currentTarget.style.filter = 'none')}
          >
            Save Draft
          </button>
        </div>
      </div>
    </div>
  );
}