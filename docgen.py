import json
import random
import os

def generate_doctors(num_doctors, num_clinics):
    # List of doctor specialties
    specialties = [
        "General Practitioner",
        "Dentist",
        "Ophthalmologist",
        "Cardiologist",
        "Dermatologist",
        "Gastroenterologist",
        "Orthopedic Surgeon",
        "Psychiatrist",
        "Neurologist",
        "ENT Specialist",
        "Urologist",
        "Pediatrician",
        "Gynecologist",
        "Rheumatologist",
        "Allergist",
        "Endocrinologist",
        "Nephrologist",
        "Oncologist",
        "Radiologist",
        "Surgeon",
    ]

    # Generate doctors' data
    doctors = []
    clinics = [f"clinic{i}" for i in range(1, num_clinics + 1)]
    for i in range(1, num_doctors + 1):
        doctor_id = f"doctor{i}"
        first_name = f"Dr. {random.choice(['Mia', 'Emma', 'Oliver', 'Noah', 'Sophia'])}"
        last_name = random.choice(['Anderson', 'Brown', 'Davis', 'Garcia', 'Hall'])
        gender = random.choice(['Male', 'Female'])
        specialty = random.choice(specialties)
        phone = f"+44 {random.randint(100000, 999999)} {random.randint(100000, 999999)}"
        email = f"{first_name.lower()}.{last_name.lower()}@example.com"
        clinic_id = random.choice(clinics)
        
        doctor = {
            "id": doctor_id,
            "firstName": first_name,
            "lastName": last_name,
            "gender": gender,
            "specialty": specialty,
            "phone": phone,
            "email": email,
            "clinicId": clinic_id
        }
        doctors.append(doctor)
    return doctors

def generate_data(num_doctors, num_clinics):
    data = {
        "doctors": generate_doctors(num_doctors, num_clinics),
    }
    return data

def write_to_json(data, filename):
    directory = "C:/projects/UIsys/mockServer/"  # Replace with the desired directory path
    filepath = os.path.join(directory, filename)
    with open(filepath, "w") as f:
        json.dump(data, f, indent=2)

num_doctors = 1000
num_clinics = 1000

data = generate_data(num_doctors, num_clinics)
write_to_json(data, "doctors.json")
