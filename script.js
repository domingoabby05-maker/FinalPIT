const db = {
  patients: [
    { no:'P10234', fname:'Anne',   lname:'Phelps',    dob:'1933-12-12', sex:'F', marital:'Single',  tel:'0131-332-4111', addr:'44 North Bridges, Edinburgh EH1 5GH', doctor:'Dr. Helen Pearson',  status:'Outpatient' },
    { no:'P10034', fname:'Ronald', lname:'MacDonald', dob:'1940-05-03', sex:'M', marital:'Married', tel:'0131-225-8800', addr:'12 Rose Street, Edinburgh EH2 2PR',    doctor:'Dr. Helen Pearson',  status:'Inpatient'  },
    { no:'P10451', fname:'Robert', lname:'Drumtree',  dob:'1938-11-21', sex:'M', marital:'Widowed', tel:'0131-334-1122', addr:'8 Castle Road, Edinburgh EH1 2AB',     doctor:'Dr. James Whitmore', status:'Discharged' },
    { no:'P10480', fname:'Steven', lname:'Parks',     dob:'1942-03-14', sex:'M', marital:'Married', tel:'0131-334-5566', addr:'6 High Street, Edinburgh EH1 1TB',     doctor:'Dr. James Whitmore', status:'Waiting'    },
    { no:'P10563', fname:'David',  lname:'Black',     dob:'1935-07-22', sex:'M', marital:'Single',  tel:'0131-339-1234', addr:'34 Princes Street, Edinburgh EH2 2AB', doctor:'Dr. Helen Pearson',  status:'Inpatient'  },
    { no:'P10604', fname:'Ian',    lname:'Thompson',  dob:'1930-02-11', sex:'M', marital:'Widowed', tel:'0131-344-5678', addr:'1 Royal Mile, Edinburgh EH1 1SR',      doctor:'Dr. James Whitmore', status:'Inpatient'  },
  ],
  allergies: [
    { id:1, patient_no:'P10234', patient:'Anne Phelps',   allergen:'Penicillin', reaction:'Rash',        severity:'Moderate', date:'1995-02-21', by:'Moira Samuel' },
    { id:2, patient_no:'P10034', patient:'Ronald MacDonald', allergen:'Latex',  reaction:'Anaphylaxis', severity:'Severe',   date:'1996-01-10', by:'Moira Samuel' },
  ],
  staff: [
    { no:'S011', fname:'Moira',   lname:'Samuel',   position:'Charge Nurse', ward:11, nin:'WB123423D', salary:18760, hours:37.5, contract:'P', pay:'M' },
    { no:'S098', fname:'Carol',   lname:'Cummings', position:'Staff Nurse',  ward:11, nin:'AB234512C', salary:16500, hours:37.5, contract:'P', pay:'M' },
    { no:'S123', fname:'Morgan',  lname:'Russell',  position:'Nurse',        ward:11, nin:'CD345623E', salary:14200, hours:37.5, contract:'P', pay:'M' },
    { no:'S167', fname:'Robin',   lname:'Plevin',   position:'Staff Nurse',  ward:11, nin:'EF456734F', salary:16500, hours:37.5, contract:'P', pay:'M' },
    { no:'S234', fname:'Amy',     lname:"O'Donnell",position:'Nurse',        ward:11, nin:'GH234567H', salary:14200, hours:37.5, contract:'T', pay:'W' },
    { no:'S344', fname:'Laurence',lname:'Burns',    position:'Consultant',   ward:11, nin:'GH567845G', salary:45000, hours:40.0, contract:'P', pay:'M' },
  ],
  rota: [
    { id:1, staff_no:'S098', name:'Carol Cummings',   position:'Staff Nurse', shift:'Late',  week:'1996-01-09' },
    { id:2, staff_no:'S123', name:'Morgan Russell',   position:'Nurse',       shift:'Late',  week:'1996-01-09' },
    { id:3, staff_no:'S167', name:'Robin Plevin',     position:'Staff Nurse', shift:'Early', week:'1996-01-09' },
    { id:4, staff_no:'S234', name:"Amy O'Donnell",    position:'Nurse',       shift:'Night', week:'1996-01-09' },
    { id:5, staff_no:'S344', name:'Laurence Burns',   position:'Consultant',  shift:'Early', week:'1996-01-09' },
  ],
  wards: [
    { no:11, name:'Orthopaedic', loc:'Block E', total:20, extn:'7711', nurse:'Moira Samuel', occupied:16 },
    { no:12, name:'Geriatric',   loc:'Block A', total:15, extn:'7712', nurse:'Carol Cummings', occupied:12 },
    { no:13, name:'Cardiology',  loc:'Block B', total:18, extn:'7713', nurse:'Robin Plevin',  occupied:15 },
    { no:14, name:'Neurology',   loc:'Block C', total:12, extn:'7714', nurse:'—',             occupied: 7 },
    { no:15, name:'Oncology',    loc:'Block D', total:16, extn:'7715', nurse:'—',             occupied:14 },
  ],
  inpatients: [
    { id:1, patient_no:'P10034', name:'Ronald MacDonald', ward:'Ward 11 Orthopaedic', bed:84, waiting:'1996-01-10', placed:'1996-01-10', expected_leave:'1996-02-09', actual_leave:null    },
    { id:2, patient_no:'P10451', name:'Robert Drumtree',  ward:'Ward 11 Orthopaedic', bed:84, waiting:'1996-01-12', placed:'1996-01-12', expected_leave:'1996-01-17', actual_leave:'1996-01-17' },
    { id:3, patient_no:'P10480', name:'Steven Parks',     ward:'Ward 11 Orthopaedic', bed:79, waiting:'1996-01-12', placed:'1996-01-14', expected_leave:'1996-01-18', actual_leave:'1996-01-18' },
    { id:4, patient_no:'P10480', name:'Steven Parks',     ward:'Ward 11 Orthopaedic', bed:null, waiting:'1996-01-15', placed:null, expected_leave:null, actual_leave:null },
    { id:5, patient_no:'P10563', name:'David Black',      ward:'Ward 11 Orthopaedic', bed:80, waiting:'1996-01-13', placed:'1996-01-13', expected_leave:'1996-01-27', actual_leave:null },
    { id:6, patient_no:'P10604', name:'Ian Thompson',     ward:'Ward 11 Orthopaedic', bed:87, waiting:'1996-01-14', placed:'1996-01-15', expected_leave:'1996-01-25', actual_leave:null },
  ],
  outpatients: [
    { id:1, patient_no:'P10234', name:'Anne Phelps',   date:'1995-02-21', time:'10:00' },
    { id:2, patient_no:'P10451', name:'Robert Drumtree',date:'1996-01-20',time:'14:30' },
  ],
  appointments: [
    { no:1, patient:'Anne Phelps',    consultant:'Laurence Burns', date:'1995-02-20', time:'09:00', room:'Room E252', outcome:'Outpatient' },
    { no:2, patient:'Ronald MacDonald',consultant:'Laurence Burns',date:'1994-06-09', time:'10:30', room:'Room E253', outcome:'Inpatient'  },
    { no:3, patient:'Robert Drumtree', consultant:'Laurence Burns',date:'1996-01-10', time:'11:00', room:'Room E252', outcome:'Inpatient'  },
    { no:4, patient:'Ian Thompson',    consultant:'Laurence Burns',date:'1996-01-14', time:'14:00', room:'Room E252', outcome:'Inpatient'  },
  ],
  medication: [
    { id:1, patient:'Ronald MacDonald', drug:'Morphine',     dosage:'10mg/ml', method:'Oral', units:50, start:'1996-03-24', end:'1996-04-24' },
    { id:2, patient:'Ronald MacDonald', drug:'Tetracycline', dosage:'0.5mg/ml',method:'IV',   units:10, start:'1996-03-24', end:'1996-04-17' },
    { id:3, patient:'Ronald MacDonald', drug:'Morphine',     dosage:'10mg/ml', method:'Oral', units:10, start:'1996-04-25', end:'1996-05-02' },
    { id:4, patient:'David Black',      drug:'Paracetamol',  dosage:'500mg',   method:'Oral', units:4,  start:'1996-01-13', end:'1996-01-27' },
  ],
  supplies: [
    { no:'10223', name:'Morphine',        type:'Pharmaceutical', stock:500,  reorder:50,  cost:27.75 },
    { no:'10334', name:'Tetracycline',    type:'Pharmaceutical', stock:300,  reorder:100, cost:12.50 },
    { no:'10445', name:'Paracetamol',     type:'Pharmaceutical', stock:1000, reorder:200, cost:2.30  },
    { no:'IT0001',name:'Syringes',        type:'Surgical',       stock:80,   reorder:500, cost:0.15  },
    { no:'IT0002',name:'Sterile Dressing',type:'Surgical',       stock:800,  reorder:200, cost:0.85  },
    { no:'IT0003',name:'Plastic Bags',    type:'Non-surgical',   stock:1500, reorder:300, cost:0.05  },
  ],
  bills: [
    { id:1, patient:'Ronald MacDonald', patient_no:'P10034', date:'1996-05-02', due:'1996-05-30', total:5200.00, paid:2000.00, status:'Partial' },
    { id:2, patient:'Robert Drumtree',  patient_no:'P10451', date:'1996-01-18', due:'1996-02-18', total:750.00,  paid:750.00,  status:'Paid'    },
    { id:3, patient:'Anne Phelps',      patient_no:'P10234', date:'1995-02-21', due:'1995-03-21', total:150.00,  paid:0.00,    status:'Unpaid'  },
  ],
  nextPatientNo: 10605,
  nextBillId: 4,
};

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