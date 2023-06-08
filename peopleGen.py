import json
import random
import os

def generate_patients(num_patients, num_clinics):
    # List of patient genders
    genders = ["Male", "Female"]

    # Generate patients' data
    patients = []
    clinics = [f"clinic{i}" for i in range(1, num_clinics + 1)]
    for i in range(1, num_patients + 1):
        patient_id = f"patient{i}"
        first_name = random.choice(['Emily', 'Oliver', 'Sophia', 'Noah', 'Amelia'])
        last_name = random.choice(['Smith', 'Johnson', 'Brown', 'Taylor', 'Wilson'])
        gender = random.choice(genders)
        age = random.randint(18, 90)
        phone = f"+44 {random.randint(10000, 99999)} {random.randint(100000, 999999)}"
        email = f"{first_name.lower()}.{last_name.lower()}@example.com"
        address = f"{random.randint(100, 999)} {random.choice(['Main', 'Elm', 'Oak', 'Maple', 'Cedar'])} Road"
        city = random.choice(['London', 'Manchester', 'Birmingham', 'Glasgow', 'Edinburgh'])
        postcode = f"{random.choice(['AB', 'CD', 'EF', 'GH', 'IJ'])}{random.randint(1, 9)} {random.randint(1, 9)}{random.choice(['AA', 'BB', 'CC', 'DD', 'EE'])}"
        clinic_id = random.choice(clinics)
        
        patient = {
            "id": patient_id,
            "firstName": first_name,
            "lastName": last_name,
            "gender": gender,
            "age": age,
            "phone": phone,
            "email": email,
            "address": address,
            "city": city,
            "postcode": postcode,
            "clinicId": clinic_id
        }
        patients.append(patient)
    return patients

def generate_data(num_patients, num_clinics):
    data = {
        "patients": generate_patients(num_patients, num_clinics),
    }
    return data

def write_to_json(data, filename):
    directory = "C:/projects/UIsys/mockServer/"  # Replace with the desired directory path
    filepath = os.path.join(directory, filename)
    with open(filepath, "w") as f:
        json.dump(data, f, indent=2)

num_patients = 1000
num_clinics = 1000

data = generate_data(num_patients, num_clinics)
write_to_json(data, "patients.json")
