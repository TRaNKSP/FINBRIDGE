function renderCards(filter = 'all') {
  const grid = document.getElementById('strategies-grid');
  if (!grid) return;
  grid.innerHTML = '';
  STRATEGIES.forEach((s, i) => {
    const show = filter === 'all' || s.categories.includes(filter);
    const card = document.createElement('div');
    card.className = 'strat-card' + (show ? '' : ' hidden');
    card.style.animationDelay = (i * 0.04) + 's';
    card.innerHTML = `
      <div class="card-top">
        <span class="card-num">${s.num}</span>
        <div class="card-tags">${s.categories.map(c => `<span class="tag tag-${c}">${c}</span>`).join('')}</div>
      </div>
      <div class="card-name">${s.name}</div>
      <div class="card-desc">${s.desc}</div>
      <div class="card-metrics">
        <div class="metric"><div class="metric-l">CAGR 5yr</div><div class="metric-v ${s.cagrColor}">${s.cagr}</div></div>
        <div class="metric"><div class="metric-l">Market '30</div><div class="metric-v ${s.marketColor}">${s.marketCapture}</div></div>
        <div class="metric"><div class="metric-l">Breakeven</div><div class="metric-v ${s.breakevenColor}">${s.breakeven}</div></div>
      </div>
      <div class="card-footer">
        <span class="card-link">View analysis →</span>
        <span class="card-year">Launch ${s.year}</span>
      </div>`;
    card.addEventListener('click', () => openModal(s));
    grid.appendChild(card);
  });
}

function filterCards(cat) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  document.querySelectorAll('.strat-card').forEach(c => {
    const id = c.querySelector('.card-name').textContent.trim();
    const strat = STRATEGIES.find(s => s.name === id);
    if (!strat) return;
    c.classList.toggle('hidden', cat !== 'all' && !strat.categories.includes(cat));
  });
}

function openModal(s) {
  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');
  const maxBar = Math.max(...s.marketData);
  const colors = ['#3b82f6','#60a5fa','#93c5fd','#bfdbfe','#22c55e'];
  const bars = s.marketData.map((v, i) => {
    const h = Math.round((v / maxBar) * 90);
    return `<div class="chart-bar-wrap">
      <div class="chart-bar-val">$${v}B</div>
      <div class="chart-bar" style="height:${h}px;background:${colors[i]}"></div>
      <div class="chart-bar-label">${2026 + i}</div>
    </div>`;
  }).join('');

  const tagClass = s.categories[0];
  const tagColors = {
    micro:'tag-micro', savings:'tag-savings', bridge:'tag-bridge', ai:'tag-ai',
    gig:'tag-gig', energy:'tag-energy', farming:'tag-farming'
  };

  content.innerHTML = `
    <span class="modal-badge ${tagColors[tagClass] || 'tag-ai'}" style="margin-bottom:.75rem">${s.categories.join(' · ')}</span>
    <h2>${s.name}</h2>
    <p>Launch: <strong>${s.year}</strong></p>
    <div class="modal-metrics">
      <div class="modal-metric"><div class="ml">5yr CAGR</div><div class="mv" style="color:var(--green)">${s.cagr}</div></div>
      <div class="modal-metric"><div class="ml">2030 Market</div><div class="mv" style="color:var(--accent2)">${s.marketCapture}</div></div>
      <div class="modal-metric"><div class="ml">Breakeven</div><div class="mv" style="color:var(--amber)">${s.breakeven}</div></div>
      <div class="modal-metric"><div class="ml">2026 Entry</div><div class="mv" style="color:var(--text2)">$${s.marketData[0]}B</div></div>
    </div>
    <div class="modal-section">
      <h3>Business Use Case</h3>
      <p>${s.useCase}</p>
    </div>
    <div class="modal-section">
      <h3>Market Capture Projection (2026–2030)</h3>
      <div class="chart-wrap">
        <div class="chart-title">Market capture in $B · 5-year trajectory</div>
        <div class="chart-bars">${bars}</div>
      </div>
    </div>
    <div class="modal-section">
      <h3>Business Value &amp; Benefits</h3>
      <div class="benefits-list">${s.businessValue.map(b =>
        `<div class="benefit-item"><span class="benefit-icon">✓</span><span>${b}</span></div>`
      ).join('')}</div>
    </div>
    <div class="modal-section">
      <h3>AI Role</h3>
      <p style="background:var(--bg3);padding:12px 14px;border-radius:8px;font-family:var(--font-mono);font-size:12px;color:var(--accent2)">${s.aiRole}</p>
    </div>
    <div class="modal-footer">
      <a href="portal.html?strategy=${s.id}" class="btn-primary">Get API Key for this strategy →</a>
      <a href="api.html#${s.id}" class="btn-outline">View API Docs</a>
    </div>`;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
renderCards();
