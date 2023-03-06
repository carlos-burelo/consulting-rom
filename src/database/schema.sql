-- Crea la base de datos 'consulting-room' si no existe

CREATE DATABASE IF NOT EXISTS `consulting-room`;

use `consulting-room`;

-- Crea la tabla doctors si no existe con los siguientes campos:
-- - doctorId: identificador del doctor
-- - firtsName: nombre del doctor
-- - lastName: apellido del doctor
-- - license: cedula profesional del doctor
-- - email: correo electronico del doctor
-- - password: contraseña del doctor (encriptada)
-- - createdAt: fecha de creacion del doctor
-- - updatedAt: fecha de actualizacion del doctor
-- - speciality: especialidad del doctor (FK) (tabla specialities)

CREATE TABLE IF NOT EXISTS 'doctors' (
  doctorId: INT NOT NULL AUTO_INCREMENT,
  firstName: VARCHAR(50) NOT NULL,
  lastName: VARCHAR(50) NOT NULL,
  license: VARCHAR(50) NOT NULL UNIQUE,
  email: VARCHAR(50) NOT NULL UNIQUE,
  password: VARCHAR(255) NOT NULL,
  createdAt: DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt: DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  speciality: INT NOT NULL,
  PRIMARY KEY (doctorId),
  FOREIGN KEY (speciality) REFERENCES specialities(specialityId)
)

-- Crea la tabla patients si no existe con los siguientes campos:
-- - patientId: identificador del paciente
-- - firtsName: nombre del paciente
-- - lastName: apellido del paciente
-- - email: correo electronico del paciente
-- - password: contraseña del paciente (encriptada)
-- - createdAt: fecha de creacion del paciente

CREATE TABLE IF NOT EXISTS 'patients' (
  patientId: INT NOT NULL AUTO_INCREMENT,
  firstName: VARCHAR(50) NOT NULL,
  lastName: VARCHAR(50) NOT NULL,
  email: VARCHAR(50) NOT NULL UNIQUE,
  password: VARCHAR(255) NOT NULL,
  createdAt: DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (patientId)
)

-- Crea la tabla specialities si no existe con los siguientes campos:
-- - specialityId: identificador de la especialidad
-- - speciality: nombre de la especialidad

CREATE TABLE IF NOT EXISTS 'specialities' (
  specialityId: INT NOT NULL AUTO_INCREMENT,
  speciality: VARCHAR(50) NOT NULL UNIQUE,
  PRIMARY KEY (specialityId)
)

-- Crea la tabla appointments si no existe con los siguientes campos:
-- - appointmentId: identificador de la cita
-- - doctor: doctor que atiende la cita (FK) (tabla doctors)
-- - patient: paciente que tiene la cita (FK) (tabla patients)
-- - date: fecha de la cita
-- - createdAt: fecha de creacion de la cita
-- - updatedAt: fecha de actualizacion de la cita
-- - status: estado de la cita (0: pendiente, 1: confirmada, 2: cancelada, 3: finalizada)
-- - reason: razon de la cita
-- - observations: observaciones de la cita
-- - startTime: hora de inicio de la cita
-- - endTime: hora de fin de la cita
-- - day: dia de la semana de la cita (0: domingo, 1: lunes, 2: martes, 3: miercoles, 4: jueves, 5: viernes, 6: sabado)

CREATE TABLE IF NOT EXISTS 'appointments' (
  appointmentId: INT NOT NULL AUTO_INCREMENT,
  doctor: INT NOT NULL,
  patient: INT NOT NULL,
  date: DATE NOT NULL,
  createdAt: DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt: DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status: INT NOT NULL DEFAULT 0,
  reason: VARCHAR(255) NOT NULL,
  observations: VARCHAR(255) NOT NULL,
  startTime: TIME NOT NULL,
  endTime: TIME NOT NULL,
  day: INT NOT NULL, 
  PRIMARY KEY (appointmentId),
  FOREIGN KEY (doctor) REFERENCES doctors(doctorId),
  FOREIGN KEY (patient) REFERENCES patients(patientId)
)

-- Crea la tabla history si no existe con los siguientes campos:
-- - historyId: identificador del log
-- - doctor: doctor que realiza la accion (FK) (tabla doctors)
-- - patient: paciente que realiza la accion (FK) (tabla patients)
-- - action: accion realizada
-- - createdAt: fecha de creacion del log

CREATE TABLE IF NOT EXISTS 'history' (
  historyId: INT NOT NULL AUTO_INCREMENT,
  doctor: INT NOT NULL,
  patient: INT NOT NULL,
  action: VARCHAR(255) NOT NULL,
  createdAt: DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (historyId),
  FOREIGN KEY (doctor) REFERENCES doctors(doctorId),
  FOREIGN KEY (patient) REFERENCES patients(patientId)
)

