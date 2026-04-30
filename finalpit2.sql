CREATE DATABASE finalpit2;

CREATE TABLE patients(patient_id SERIAL PRIMARY KEY,first_name VARCHAR(50),last_name VARCHAR(50),address TEXT,phone VARCHAR(20),date_of_birth DATE,sex CHAR(1),marital_status VARCHAR(20),date_registered DATE);

CREATE TABLE next_of_kin(kin_id SERIAL PRIMARY KEY,patient_id INT REFERENCES patients(patient_id),full_name VARCHAR(100),relationship VARCHAR(50),address TEXT,phone VARCHAR(20));

CREATE TABLE local_doctors(doctor_id SERIAL PRIMARY KEY,full_name VARCHAR(100),clinic_number VARCHAR(50) UNIQUE,address TEXT,phone VARCHAR(20));

CREATE TABLE patient_referrals(referral_id SERIAL PRIMARY KEY,patient_id INT REFERENCES patients(patient_id),doctor_id INT REFERENCES local_doctors(doctor_id),referral_date DATE);

CREATE TABLE staff(staff_id SERIAL PRIMARY KEY,first_name VARCHAR(50),last_name VARCHAR(50),address TEXT,phone VARCHAR(20),date_of_birth DATE,sex CHAR(1),nin VARCHAR(20),position VARCHAR(50),salary DECIMAL(10,2),salary_scale VARCHAR(20));

CREATE TABLE staff_contracts(contract_id SERIAL PRIMARY KEY,staff_id INT REFERENCES staff(staff_id),hours_per_week DECIMAL(5,2),contract_type VARCHAR(20),payment_type VARCHAR(20));

CREATE TABLE qualifications(qualification_id SERIAL PRIMARY KEY,staff_id INT REFERENCES staff(staff_id),qualification_type VARCHAR(100),institution VARCHAR(100),date_obtained DATE);

CREATE TABLE work_experience(experience_id SERIAL PRIMARY KEY,staff_id INT REFERENCES staff(staff_id),position VARCHAR(50),organization VARCHAR(100),start_date DATE,end_date DATE);

CREATE TABLE wards(ward_id SERIAL PRIMARY KEY,ward_name VARCHAR(50),location VARCHAR(50),total_beds INT,tel_extension VARCHAR(10));

CREATE TABLE beds(bed_id SERIAL PRIMARY KEY,ward_id INT REFERENCES wards(ward_id),bed_number INT,status VARCHAR(20));

CREATE TABLE ward_staff(ward_staff_id SERIAL PRIMARY KEY,ward_id INT REFERENCES wards(ward_id),staff_id INT REFERENCES staff(staff_id),role VARCHAR(50),shift VARCHAR(20));

CREATE TABLE admissions(admission_id SERIAL PRIMARY KEY,patient_id INT REFERENCES patients(patient_id),ward_id INT REFERENCES wards(ward_id),bed_id INT REFERENCES beds(bed_id),date_placed_on_waiting_list DATE,expected_stay_days INT,date_admitted DATE,expected_leave_date DATE,actual_leave_date DATE);

CREATE TABLE appointments(appointment_id SERIAL PRIMARY KEY,patient_id INT REFERENCES patients(patient_id),consultant_id INT REFERENCES staff(staff_id),appointment_date DATE,appointment_time TIME,room VARCHAR(20));

CREATE TABLE outpatients(outpatient_id SERIAL PRIMARY KEY,patient_id INT REFERENCES patients(patient_id),appointment_id INT REFERENCES appointments(appointment_id));

CREATE TABLE drugs(drug_id SERIAL PRIMARY KEY,name VARCHAR(100),description TEXT,dosage VARCHAR(50),method_of_admin VARCHAR(50),quantity_in_stock INT,reorder_level INT,cost_per_unit DECIMAL(10,2));

CREATE TABLE patient_medication(medication_id SERIAL PRIMARY KEY,patient_id INT REFERENCES patients(patient_id),drug_id INT REFERENCES drugs(drug_id),units_per_day INT,start_date DATE,end_date DATE);

CREATE TABLE supplies(item_id SERIAL PRIMARY KEY,name VARCHAR(100),description TEXT,quantity_in_stock INT,reorder_level INT,cost_per_unit DECIMAL(10,2),type VARCHAR(50));

CREATE TABLE suppliers(supplier_id SERIAL PRIMARY KEY,name VARCHAR(100),address TEXT,phone VARCHAR(20),fax VARCHAR(20));

CREATE TABLE requisitions(requisition_id SERIAL PRIMARY KEY,ward_id INT REFERENCES wards(ward_id),staff_id INT REFERENCES staff(staff_id),requisition_date DATE,received_date DATE,signed_by VARCHAR(100));

CREATE TABLE requisition_items(req_item_id SERIAL PRIMARY KEY,requisition_id INT REFERENCES requisitions(requisition_id),item_id INT REFERENCES supplies(item_id),drug_id INT REFERENCES drugs(drug_id),quantity INT,cost_per_unit DECIMAL(10,2));

CREATE TABLE bills(bill_id SERIAL PRIMARY KEY,patient_id INT REFERENCES patients(patient_id),admission_id INT REFERENCES admissions(admission_id),total_amount DECIMAL(10,2),status VARCHAR(20));

CREATE TABLE payments(payment_id SERIAL PRIMARY KEY,bill_id INT REFERENCES bills(bill_id),amount_paid DECIMAL(10,2),payment_date DATE);



INSERT INTO wards(ward_name,location,total_beds,tel_extension)VALUES('Orthopaedic','Block E',20,'7711');

INSERT INTO staff(first_name,last_name,address,phone,date_of_birth,sex,nin,position,salary,salary_scale)VALUES('Moira','Samuel','49 School Road Broxburn','01506-45633','1961-05-30','F','WB123423D','Charge Nurse',18760.00,'1C');

INSERT INTO staff_contracts(staff_id,hours_per_week,contract_type,payment_type)VALUES(1,37.5,'Permanent','Monthly');

INSERT INTO patients(first_name,last_name,address,phone,date_of_birth,sex,marital_status,date_registered)VALUES('Anne','Phelps','44 North Bridges Edinburgh','0131-332-4111','1933-12-12','F','Single','1995-02-21');

INSERT INTO next_of_kin(patient_id,full_name,relationship,address,phone)VALUES(1,'James Phelps','Father','145 Rowlands Street Paisley','0141-848-2211');

INSERT INTO local_doctors(full_name,clinic_number,address,phone)VALUES('Dr. Helen Pearson','CL1001','22 Cannongate Way Edinburgh','0131-332-0012');

INSERT INTO patient_referrals(patient_id,doctor_id,referral_date)VALUES(1,1,'1995-02-20');

INSERT INTO beds(ward_id,bed_number,status)VALUES(1,84,'Occupied');

INSERT INTO admissions(patient_id,ward_id,bed_id,date_placed_on_waiting_list,expected_stay_days,date_admitted,expected_leave_date)VALUES(1,1,1,'1996-01-12',5,'1996-01-12','1996-01-17');

INSERT INTO appointments(patient_id,consultant_id,appointment_date,appointment_time,room)VALUES(1,1,'1995-02-21','10:00','E252');

INSERT INTO outpatients(patient_id,appointment_id)VALUES(1,1);

INSERT INTO drugs(name,description,dosage,method_of_admin,quantity_in_stock,reorder_level,cost_per_unit)VALUES('Morphine','Pain killer','10mg/ml','Oral',100,20,27.75);

INSERT INTO patient_medication(patient_id,drug_id,units_per_day,start_date,end_date)VALUES(1,1,50,'1996-03-24','1996-04-24');

INSERT INTO supplies(name,description,quantity_in_stock,reorder_level,cost_per_unit,type)VALUES('Syringe','Sterile syringe',200,50,5.00,'Surgical');

INSERT INTO suppliers(name,address,phone,fax)VALUES('MedSupply Ltd','Edinburgh','0131-555-1234','0131-555-5678');

INSERT INTO requisitions(ward_id,staff_id,requisition_date,received_date,signed_by)VALUES(1,1,'1996-02-15','1996-02-16','Moira Samuel');

INSERT INTO requisition_items(requisition_id,item_id,drug_id,quantity,cost_per_unit)VALUES(1,NULL,1,50,27.75);

INSERT INTO bills(patient_id,admission_id,total_amount,status)VALUES(1,1,5000.00,'Unpaid');

INSERT INTO payments(bill_id,amount_paid,payment_date)VALUES(1,2000.00,'1996-02-20');