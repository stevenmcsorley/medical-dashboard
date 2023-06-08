import json
import random
from datetime import datetime, timedelta
import os

# Generate a random datetime within a given range


def generate_random_datetime(date):
    start_time = datetime.strptime(date + "T06:00:00Z", "%Y-%m-%dT%H:%M:%SZ")
    end_time = datetime.strptime(date + "T20:00:00Z", "%Y-%m-%dT%H:%M:%SZ")
    total_seconds = int((end_time - start_time).total_seconds())
    random_seconds = random.randrange(total_seconds)
    random_datetime = start_time + timedelta(seconds=random_seconds)
    return random_datetime

# Generate appointments data


def generate_appointments(num_patients, num_doctors, num_appointments):
    # List of doctor and patient IDs
    doctors = [f"doctor{i}" for i in range(1, num_doctors + 1)]
    patients = [f"patient{i}" for i in range(1, num_patients + 1)]

    # List of appointment types
    appointment_types = [
        "General Check-up",
        "Dental Cleaning",
        "Eye Examination",
        "Physical Therapy",
        "Allergy Testing",
        "Cardiology Consultation",
        "Dermatology Check-up",
        "Gastroenterology Check-up",
        "Orthopedic Evaluation",
        "Psychiatry Session",
        "Neurology Consultation",
        "ENT Check-up",
        "Urology Consultation",
        "Pediatric Check-up",
        "Ophthalmology Consultation",
        "Gynecology Consultation",
        "Dental Check-up",
        "Internal Medicine Consultation",
        "Rheumatology Consultation",
    ]

    # List of clinic IDs
    clinics = [f"clinic{i}" for i in range(1, num_clinics + 1)]

    # Generate appointments data
    appointments = []
    start_date = datetime.strptime(
        "2023-06-02T07:00:00Z", "%Y-%m-%dT%H:%M:%SZ")
    date = "2023-06-02"
    for i in range(1, num_appointments + 1):
        appointment_id = f"appointment{i}"
        patient_id = random.choice(patients)
        doctor_id = random.choice(doctors)
        clinic_id = random.choice(clinics)
        appointment_type = random.choice(appointment_types)
        start_time = generate_random_datetime(date)
        end_time = start_time + timedelta(hours=1)

        start_time_str = start_time.strftime("%Y-%m-%dT%H:%M:%SZ")
        end_time_str = end_time.strftime("%Y-%m-%dT%H:%M:%SZ")

        location = random.choice(
            [
                "London",
                "Manchester",
                "Birmingham",
                "Glasgow",
                "Edinburgh",
                "Liverpool",
                "Leeds",
                "Sheffield",
                "Oxford",
                "Bristol",
                "Cardiff",
                "Newcastle",
                "Nottingham",
                "Southampton",
                "Plymouth",
                "Brighton",
                "Cambridge",
                "York",
            ]
        )
        percentage = 80  # Define the percentage threshold
        threshold = num_appointments * (percentage / 100)
        status = "completed" if i <= threshold else "notCompleted"
        reason = (
            random.choice(["Patient did not show up",
                          "Doctor unavailable", "Patient rescheduled"])
            if status == "notCompleted"
            else None
        )
        appointment = {
            "id": appointment_id,
            "patientId": patient_id,
            "doctorId": doctor_id,
            "clinicId": clinic_id,
            "type": appointment_type,
            "startTime": start_time_str,
            "endTime": end_time_str,
            "location": location,
            "status": status
        }
        if reason:
            appointment["reason"] = reason
        appointments.append(appointment)
        start_date += timedelta(minutes=30)
    return appointments


def generate_data(num_patients, num_doctors, num_appointments):
    data = {
        "appointments": generate_appointments(num_patients, num_doctors, num_appointments)
    }
    return data


def write_to_json(data, filename):
    directory = "C:/projects/UIsys/mockServer/"  # Replace with the desired directory path
    filepath = os.path.join(directory, filename)
    with open(filepath, "w") as f:
        json.dump(data, f, indent=2)

num_patients = 1000
num_doctors = 1000
num_appointments = 1000
num_clinics = 1000
data = generate_data(num_patients, num_doctors, num_appointments)
write_to_json(data, "appointments.json")
