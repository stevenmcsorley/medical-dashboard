import json
from faker import Faker
from faker.providers import address
from faker import Factory
import os



class UKAddressProvider(address.Provider):
    def country(self):
        return "United Kingdom"

    def city(self):
        return self.random_element(self.cities())

    def cities(self):
        return ["London", "Manchester", "Birmingham", "Glasgow", "Edinburgh"]
    

def generate_clinics(num_clinics):
    fake = Faker()
    fake.add_provider(UKAddressProvider)
    fakeUK = Factory.create('en_GB')

    clinics = []
    for i in range(1, num_clinics + 1):
        clinic_id = f"clinic{i}"
        name = fakeUK.company() + " Clinic"
        address = fake.building_number() + " " + fake.street_name()
        city = fakeUK.city()
        postcode = fakeUK.postcode()
        phone = fakeUK.phone_number()

        clinic = {
            "id": clinic_id,
            "name": name,
            "address": address,
            "city": city,
            "postcode": postcode,
            "phone": phone
        }
        clinics.append(clinic)
    return clinics

def generate_data(num_clinics):
    data = {
        "clinics": generate_clinics(num_clinics),
    }
    return data

def write_to_json(data, filename):
    directory = "C:/projects/UIsys/mockServer/"  # Replace with the desired directory path
    filepath = os.path.join(directory, filename)
    with open(filepath, "w") as f:
        json.dump(data, f, indent=2)

num_clinics = 1000

data = generate_data(num_clinics)
write_to_json(data, "clinics.json")
