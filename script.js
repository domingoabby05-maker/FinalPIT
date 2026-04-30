const pageTitles = {
  dashboard:'Dashboard', patients:'Patient Registry', allergies:'Patient Allergies',
  staff:'Staff Management', rota:'Weekly Rota', wards:'Wards & Beds',
  inpatients:'Inpatients', outpatients:'Outpatients', appointments:'Appointments',
  medication:'Medication', supplies:'Supplies Inventory', billing:'Billing & Payments',
  reports:'Reports & Analytics',
};

function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');

  document.getElementById('page-title').textContent = pageTitles[page] || page;

  renderPage(page);
}

function renderPage(page) {
  const fn = {
    dashboard:renderDashboard,
    patients:renderPatients,
    allergies:renderAllergies,
    staff:renderStaff,
    rota:renderRota,
    wards:renderWards,
    inpatients:renderInpatients,
    outpatients:renderOutpatients,
    appointments:renderAppointments,
    medication:renderMedication,
    supplies:renderSupplies,
    billing:renderBilling
  }[page];

  if (fn) fn();
}


// ===============================
// DASHBOARD (SAFE VERSION)
// ===============================
function renderDashboard() {
  const wOcc = document.getElementById('ward-occ-list');
  if (!wOcc) return;

  wOcc.innerHTML = db.wards.map(w => {
    const pct = Math.round(w.occupied / w.total * 100);
    return `<tr>
      <td>${w.name}</td>
      <td>${w.loc}</td>
      <td>${w.occupied}/${w.total}</td>
      <td>${pct}%</td>
    </tr>`;
  }).join('');
}


// ===============================
// PATIENTS
// ===============================
function renderPatients() {
  const table = document.getElementById('patient-list');
  if (!table) return;

  table.innerHTML = db.patients.map(p => `
    <tr>
      <td>${p.no}</td>
      <td>${p.fname} ${p.lname}</td>
      <td>${p.dob}</td>
      <td>${p.sex}</td>
      <td>${p.tel}</td>
      <td>${p.doctor}</td>
      <td>${p.status}</td>
      <td><button>View</button></td>
    </tr>
  `).join('');
}


// ===============================
// BILLING (FIXED EVENT DUPLICATION)
// ===============================
function renderBilling() {
  const table = document.getElementById('bill-list');
  if (!table) return;

  table.innerHTML = db.bills.map(b => {
    const outstanding = b.total - b.paid;

    return `<tr>
      <td>#${b.id}</td>
      <td>${b.patient}</td>
      <td>${b.date}</td>
      <td>${b.due}</td>
      <td>£${b.total}</td>
      <td>£${b.paid}</td>
      <td>£${outstanding}</td>
      <td>${b.status}</td>
    </tr>`;
  }).join('');

  // ✅ FIXED: no duplicate listeners
  ['b-room','b-med','b-consult','b-supply'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.oninput = updateBillSummary;
  });
}


// ===============================
// BILL CALCULATION
// ===============================
function updateBillSummary() {
  const get = id => parseFloat(document.getElementById(id)?.value) || 0;

  const total = get('b-room') + get('b-med') + get('b-consult') + get('b-supply');

  document.getElementById('bs-total').textContent = `£${total.toFixed(2)}`;
}


// ===============================
// HELPERS
// ===============================
function addDays(dateStr, n) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + n);
  return d.toISOString().split('T')[0];
}

function populatePatientSelects(...ids) {
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    el.innerHTML = db.patients.map(p =>
      `<option value="${p.no}">${p.no} - ${p.fname} ${p.lname}</option>`
    ).join('');
  });
}


// ===============================
// MODALS
// ===============================
function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('open');
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
}


// ===============================
// TOAST
// ===============================
function toast(type, msg) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;

  container.appendChild(t);

  setTimeout(() => t.remove(), 3000);
}


// ===============================
// ✅ CRITICAL FIX: DOM READY
// ===============================
document.addEventListener('DOMContentLoaded', () => {

  // modal background click
  document.querySelectorAll('.modal-overlay').forEach(m => {
    m.addEventListener('click', e => {
      if (e.target === m) m.classList.remove('open');
    });
  });

  // initial render
  renderDashboard();

});
