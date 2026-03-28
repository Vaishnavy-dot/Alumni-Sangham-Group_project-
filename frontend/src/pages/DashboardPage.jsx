import React from 'react';
import { MoreVertical, Play, Pause, ChevronDown, ChevronUp, Settings } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export function DashboardPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const topNavLinks = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Networking', href: '/directory' },
    { label: 'Posts & Jobs', href: '/blog' },
    { label: 'Hall of Fame', href: '/#hall-of-fame' },
    { label: 'Write Article', href: '/compose' },
    { label: 'My Requests', href: '/profile/me?tab=referrals' },
  ];

  const isActive = (href) => {
    if (href === '/#hall-of-fame') {
      return location.hash === '#hall-of-fame' || location.pathname === '/';
    }
    return location.pathname === href || (href.includes('?') && location.pathname + location.search === href);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#F5F5F5] via-[#F0E8DC] to-[#FFF0CA] font-sans">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(255,230,148,0.45),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(255,210,90,0.28),transparent_42%)]" />
      <div className="relative z-10">
        {/* Top Navigation */}
        <nav className="z-50 bg-white/40 backdrop-blur-md border-b border-white/30 sticky top-0">
          <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between gap-6">
            {/* Logo + Brand */}
            <div className="rounded-full border border-[#2D2D2D] bg-white px-3 py-1.5 text-sm font-semibold text-[#2D2D2D] min-w-fit flex-shrink-0">
              Alumni Sangham
            </div>

            {/* Center Navigation Menu */}
            <div className="hidden flex-1 items-center justify-center px-4 md:flex">
              <div className="flex w-full max-w-4xl items-center justify-center gap-2 overflow-x-auto rounded-full border border-white/70 bg-white px-2 py-1 shadow-sm scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-white">
                {topNavLinks.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => navigate(item.href)}
                    className={`min-w-max rounded-full px-3 py-1 text-xs font-semibold transition ${isActive(item.href)
                      ? 'bg-[#2D2D2D] text-white'
                      : 'text-[#2D2D2D] hover:bg-white/30'
                      }`}>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button onClick={() => navigate('/profile/me')} className="p-2 text-[#2D2D2D] hover:bg-white/30 rounded-lg transition-colors">
                <Settings size={20} />
              </button>
              <button onClick={() => navigate('/notifications')} className="p-2 text-[#2D2D2D] hover:bg-white/30 rounded-lg transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </button>
              <button onClick={() => navigate('/profile/me')} className="p-2 text-[#2D2D2D] hover:bg-white/30 rounded-lg transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" opacity="0.3" />
                  <circle cx="12" cy="12" r="5" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-8 py-8">
          {/* Header Section */}
          <div className="mb-6">
            <h1 className="text-6xl font-semibold tracking-tight text-[#2D2D2D]">Welcome in, Nixtio</h1>
            <p className="mt-1 text-sm tracking-wide text-[#6A6A6A]">Your workspace overview at a glance</p>
          </div>

          {/* Top Section: Progress Bars + Stats */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {[
              { label: 'Interviews', value: '15%' },
              { label: 'Hired', value: '15%' },
              { label: 'Project time', value: '60%' },
              { label: 'Output', value: '10%' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <span className="text-xs font-medium uppercase tracking-wider text-[#6A6A6A]">{item.label}</span>
                <div className="min-w-[75px] rounded-full bg-white/80 px-4 py-1 text-sm font-semibold text-[#2D2D2D] shadow-sm border border-white/60 backdrop-blur-md">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-8 space-y-3">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-[#2D2D2D]">Interviews</span>
                  <div className="w-24 h-8 bg-white/35 backdrop-blur rounded-full flex items-center justify-center border border-white/40">
                    <span className="text-sm font-bold text-[#2D2D2D]">15%</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-[#2D2D2D]">Hired</span>
                  <div className="w-24 h-8 bg-[#F5D645]/30 rounded-full flex items-center justify-center border border-[#F5D645]/50">
                    <span className="text-sm font-bold text-[#2D2D2D]">15%</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-[#2D2D2D]">Project time</span>
                  <div className="w-24 h-8 bg-white/35 backdrop-blur rounded-full flex items-center justify-center border border-white/40 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2D2D2D]/20 to-transparent" style={{ width: '60%' }} />
                    <span className="text-sm font-bold text-[#2D2D2D] relative">60%</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-[#2D2D2D]">Output</span>
                  <div className="w-16 h-8 bg-white/35 backdrop-blur rounded-full flex items-center justify-center border border-white/40">
                    <span className="text-sm font-bold text-[#2D2D2D]">10%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3" />

            {/* Stats Column */}
            <div className="space-y-4">
              <div className="bg-white/35 rounded-2xl p-4 shadow-sm border border-white/40 text-center">
                <div className="text-4xl font-bold text-[#2D2D2D]">78</div>
                <p className="text-xs font-semibold text-[#6A6A6A] mt-1">Employees</p>
              </div>
              <div className="bg-white/35 rounded-2xl p-4 shadow-sm border border-white/40 text-center">
                <div className="text-4xl font-bold text-[#2D2D2D]">56</div>
                <p className="text-xs font-semibold text-[#6A6A6A] mt-1">Hirings</p>
              </div>
              <div className="bg-white/35 rounded-2xl p-4 shadow-sm border border-white/40 text-center">
                <div className="text-4xl font-bold text-[#2D2D2D]">203</div>
                <p className="text-xs font-semibold text-[#6A6A6A] mt-1">Projects</p>
              </div>
            </div>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-4 gap-2">
            {/* Left Sidebar replaced with Referral Velocity */}
            <div className="col-span-1 space-y-2">
              <div className="max-w-full bg-[rgba(255,255,255,0.35)] rounded-2xl p-6 shadow-sm border border-white/30">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-[#2D2D2D] text-xl">Referral Velocity</h3>
                  <p className="text-3xl font-thin text-[#2D2D2D]">31.3986</p>
                </div>
                <p className="text-sm text-[#6B7280] mb-5">Average response window, hours</p>

                <div className="bg-white/80 rounded-2xl p-3 mb-4 border border-[#E8E8E8]">
                  <p className="text-2xl font-normal text-[#2D2D2D]">Investment Period</p>
                  <div className="h-4 mt-3 w-full rounded-full bg-[#E8E8E8] overflow-hidden">
                    <div className="h-full w-[30%] float-left bg-gradient-to-r from-[#FFB4B4] via-[#FFD54F] to-[#FFBA45]" />
                    <div className="h-full w-[25%] float-left bg-[#2D2D2D]" />
                    <div className="h-full w-[45%] float-left bg-[#9B9B9B]" />
                  </div>
                  <div className="flex justify-between text-xs font-semibold text-[#2D2D2D] mt-3">
                    <span>Momentum</span>
                    <span>General</span>
                    <span>Risk</span>
                    <span>Reward</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  {[
                    { label: 'Directory Growth', value: '+18.4%', note: 'past 30 days' },
                    { label: 'Jobs Shared', value: '412', note: 'curated opportunities' },
                    { label: 'Reply Rate', value: '60.6%', note: 'avg. alumni response' },
                    { label: 'Referral Wins', value: '148', note: 'students placed' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/60 text-[#2D2D2D] rounded-xl p-3 flex justify-between items-start backdrop-blur-sm border border-white/40">
                      <div>
                        <p className="text-sm text-[#2D2D2D] font-semibold">{item.label}</p>
                        <p className="text-xs text-[#6B7280] mt-1">{item.note}</p>
                      </div>
                      <p className="text-3xl font-thin">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Center Content */}
            <div className="col-span-2 space-y-2">
              {/* Progress Panel */}
              <div className="bg-[rgba(255,255,255,0.35)] rounded-2xl p-5 shadow-sm border border-white/30">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-semibold text-[#2D2D2D]">Progress</span>
                </div>
                {/* 6.1h + Work Time label inline */}
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-semibold text-[#2D2D2D]">6.1 h</span>
                  <div className="text-xs text-[#9B9B9B] font-medium leading-tight">
                    <div>Work Time</div>
                    <div>this week</div>
                  </div>
                </div>
                {/* Bar chart with 5h23m pill above active bar */}
                <div className="relative flex items-end justify-between gap-0 pt-8" style={{ height: '120px' }}>
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => {
                    const heights = [38, 55, 65, 72, 80, 90, 30];
                    const isActive = i === 5;
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center justify-end gap-1 relative">
                        {/* 5h 23m pill above active bar */}
                        {isActive && (
                          <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#F5D645] text-[#2D2D2D] text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow">
                            5h 23m
                          </div>
                        )}
                        {/* Thin vertical bar */}
                        <div
                          className="rounded-full"
                          style={{
                            width: isActive ? '5px' : '4px',
                            height: heights[i],
                            background: isActive ? '#F5D645' : 'rgba(160,160,170,0.45)',
                          }}
                        />
                        {/* Dot at bottom */}
                        <div
                          className="w-1 h-1 rounded-full"
                          style={{ background: isActive ? '#F5D645' : '#BCBCC8' }}
                        />
                        <span className="text-[10px] font-semibold text-[#9B9B9B]">{day}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Time Tracker */}
              <div className="bg-[rgba(255,255,255,0.35)] rounded-2xl p-5 shadow-sm border border-white/30 flex flex-col items-center justify-center" style={{ minHeight: '340px', maxWidth: '300px' }}>
                <div className="flex items-center justify-between w-full mb-3">
                  <span className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-[#F5D645] bg-[#fffce5] rounded-full">Featured</span>
                  <MoreVertical size={20} className="text-[#9B9B9B]" />
                </div>
                <div className="w-full mb-3">
                  <h3 className="text-2xl font-light text-[#2D2D2D] leading-tight">Career Orbit Panel</h3>
                </div>
                <div className="relative w-40 h-40 mb-5">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    {/* Tick marks only on the non-yellow left/bottom arc (from ~200deg to ~340deg, i.e. left side) */}
                    {[...Array(48)].map((_, i) => {
                      // Full circle: 0..47 ticks. Yellow arc covers roughly -90deg to +90deg (top to bottom on right side)
                      // = angle 270 to 90 going clockwise => in standard math: from -90 (top) clockwise to 90 (bottom)
                      // We skip ticks that fall within the yellow semi-circle arc region (right side: -80deg to +80deg from top)
                      const angleDeg = (i / 48) * 360 - 90; // offset so 0 = top
                      // Yellow arc: from -80deg to +100deg (clockwise from near-top to near-bottom on right side)
                      const inYellow = angleDeg >= -80 && angleDeg <= 100;
                      if (inYellow) return null;
                      const angleRad = ((angleDeg + 90) * Math.PI) / 180;
                      const isMajor = i % 6 === 0;
                      const r1 = isMajor ? 84 : 87;
                      const r2 = 93;
                      const x1 = 100 + Math.cos(angleRad) * r1;
                      const y1 = 100 + Math.sin(angleRad) * r1;
                      const x2 = 100 + Math.cos(angleRad) * r2;
                      const y2 = 100 + Math.sin(angleRad) * r2;
                      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#AAAAAA" strokeWidth={isMajor ? 2 : 1} />;
                    })}
                    {/* Yellow semi-circle arc: right side, from top (270deg) clockwise to bottom (90deg) */}
                    {/* SVG arc: start at top-right area (100,5) sweep clockwise 180deg to bottom-right (100,195) */}
                    <path
                      d="M100,14 A86,86 0 0,1 186,100 A86,86 0 0,1 100,186"
                      fill="none"
                      stroke="#F5D645"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3" style={{ background: 'transparent' }}>
                    <p className="text-lg font-normal text-[#2D2D2D]">Surface faster</p>
                    <p className="text-xs text-[#4A4A4A] leading-4">with the alumni network</p>
                    <p className="text-xs text-[#4A4A4A] leading-4">by your side</p>
                  </div>
                </div>
                <div className="w-full flex gap-3 justify-center">
                  <button className="flex-1 max-w-[45%] py-2 rounded-lg bg-white text-[#2D2D2D] font-semibold text-sm shadow-sm">Connect</button>
                  <button className="flex-1 max-w-[50%] py-2 rounded-lg bg-[#E5E7EB] text-[#2D2D2D] font-semibold text-sm shadow-sm">Add Opportunity</button>
                </div>
              </div>
            </div>

            {/* Right Sidebar — Community Signal Cards */}
            <div className="col-span-1 space-y-2">
              {/* Section Label */}
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9B9B9B] px-1 mb-1">Live Dashboard Cards</p>

              {/* Card 1 — Alumni Directory */}
              <div className="bg-[rgba(255,255,255,0.45)] rounded-2xl p-4 shadow-sm border border-white/40 backdrop-blur-sm">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-xl bg-[#7C6FF7]/20 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C6FF7" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-[#9B9B9B]">Verified Profiles</p>
                      <p className="text-sm font-bold text-[#2D2D2D] leading-tight">Alumni Directory</p>
                    </div>
                  </div>
                  <span className="text-[#AAAAAA] text-xs">↗</span>
                </div>
                <p className="text-3xl font-bold text-[#2D2D2D] mb-0.5">1,248</p>
                <p className="text-[10px] text-[#9B9B9B] leading-tight mb-2">reachable mentors<br />this week</p>
                <span className="inline-flex items-center gap-1 bg-[#22C55E]/15 text-[#16A34A] text-[10px] font-bold px-2 py-0.5 rounded-full">↗ +12.8%</span>
                <p className="text-[9px] font-bold uppercase tracking-widest text-[#BBBBBB] mt-3 mb-1">Signal Directory</p>
                <svg viewBox="0 0 100 28" className="w-full" fill="none">
                  <polyline points="0,22 15,20 28,18 40,14 55,16 70,10 85,8 100,5" stroke="#7C6FF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.7"/>
                  <polyline points="0,26 15,25 28,22 40,19 55,21 70,17 85,14 100,11" stroke="#7C6FF7" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.25"/>
                </svg>
              </div>

              {/* Card 2 — Referral Requests */}
              <div className="bg-[rgba(255,255,255,0.45)] rounded-2xl p-4 shadow-sm border border-white/40 backdrop-blur-sm">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-xl bg-[#F5A623]/20 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-[#9B9B9B]">Career Momentum</p>
                      <p className="text-sm font-bold text-[#2D2D2D] leading-tight">Referral Requests</p>
                    </div>
                  </div>
                  <span className="text-[#AAAAAA] text-xs">↗</span>
                </div>
                <p className="text-3xl font-bold text-[#2D2D2D] mb-0.5">86</p>
                <p className="text-[10px] text-[#9B9B9B] leading-tight mb-2">open asks waiting<br />for alumni support</p>
                <span className="inline-flex items-center gap-1 bg-[#22C55E]/15 text-[#16A34A] text-[10px] font-bold px-2 py-0.5 rounded-full">↗ +5.6%</span>
                <p className="text-[9px] font-bold uppercase tracking-widest text-[#BBBBBB] mt-3 mb-1">Signal Referrals</p>
                <svg viewBox="0 0 100 28" className="w-full" fill="none">
                  <polyline points="0,24 18,22 35,20 50,16 65,18 80,11 100,8" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.8"/>
                  <polyline points="0,26 18,25 35,23 50,20 65,22 80,15 100,12" stroke="#F5A623" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.25"/>
                </svg>
              </div>

              {/* Card 3 — Hall of Fame */}
              <div className="bg-[rgba(255,255,255,0.45)] rounded-2xl p-4 shadow-sm border border-white/40 backdrop-blur-sm">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-xl bg-[#9B59B6]/20 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9B59B6" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-[#9B9B9B]">Featured Legends</p>
                      <p className="text-sm font-bold text-[#2D2D2D] leading-tight">Hall of Fame</p>
                    </div>
                  </div>
                  <span className="text-[#AAAAAA] text-xs">↗</span>
                </div>
                <p className="text-3xl font-bold text-[#2D2D2D] mb-0.5">32</p>
                <p className="text-[10px] text-[#9B9B9B] leading-tight mb-2">alumni stories drawing<br />the most attention</p>
                <span className="inline-flex items-center gap-1 bg-[#EF4444]/15 text-[#DC2626] text-[10px] font-bold px-2 py-0.5 rounded-full">↘ -1.9%</span>
                <p className="text-[9px] font-bold uppercase tracking-widest text-[#BBBBBB] mt-3 mb-1">Signal Spotlight</p>
                <svg viewBox="0 0 100 28" className="w-full" fill="none">
                  <polyline points="0,10 20,14 38,12 55,16 70,13 85,18 100,22" stroke="#9B59B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.7"/>
                  <circle cx="85" cy="18" r="2" fill="#9B59B6" opacity="0.6"/>
                </svg>
              </div>
            </div>

            {/* Make a post panel (full-width row below grid) */}
            <div className="col-span-4 bg-white/80 rounded-2xl p-6 border border-white/50 backdrop-blur-md text-[#1C1C1C]">
              <p className="text-xs tracking-wide uppercase text-[#6B6B6B] mb-2">Community Prompt</p>
              <h2 className="text-3xl font-semibold mb-2 text-[#2D2D2D]">Make a post</h2>
              <p className="text-sm text-[#4F4F4F] mb-5">Start something high-signal for the network. This opens the posts feed so you can publish from there.</p>

              <div className="bg-white/90 rounded-2xl border border-[#E9E9E9] p-4 space-y-3">
                <div className="flex items-center gap-3 text-xs uppercase tracking-wider font-bold text-[#6B6B6B]">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#F3F3F3] text-[#9B9B9B]">✎</span>
                  What do you want to say?
                </div>
                <textarea
                  rows={3}
                  className="w-full rounded-xl bg-white border border-[#E3E3E3] p-3 text-sm text-[#2D2D2D] placeholder-[#A8A8A8] focus:border-[#C6C6C6] focus:outline-none"
                  placeholder="Share a placement lesson your juniors should know before interview season."
                />
                <p className="text-xs text-[#8B8B8B]">Type here, then send to continue in the posts tab.</p>
                <div className="flex justify-end">
                  <button className="px-4 py-2 rounded-xl bg-[#f44336] text-white font-semibold hover:opacity-90 transition">Send to posts →</button>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
