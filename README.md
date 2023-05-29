# Medical Dashboard

A medical dashboard for tracking patients, doctors, clinics, and appointments. This dashboard provides an overview of key metrics and visualizations to monitor the medical operations.

## Features

- **Total Patients**: Displays the total number of patients in the system.
- **Total Doctors**: Shows the total count of doctors available.
- **Appointments**: Displays the total number of appointments scheduled.
- **Medical Status**: Provides an overview of the medical status.

## Installation

1. Clone the repository:

    ```shell
    git clone https://github.com/your-username/medical-dashboard.git
    ```

2. Navigate to the project directory:

    ```shell
    cd medical-dashboard
    ```

3. Install the dependencies:

    ```shell
    npm install
    ```

4. Start the development server:

    ```shell
    npm start
    ```

Open your browser and visit http://localhost:3000 to see the medical dashboard.

## Usage

The medical dashboard provides a comprehensive view of the medical operations. It includes various components and visualizations to track key metrics. Here's an overview of the components:

- **Dashboard Section**: The dashboard section provides an overview of the total number of patients, doctors, appointments, and medical status. It displays these metrics in small cards.
  
- **Patients by City Chart**: The Patients by City chart visualizes the distribution of patients across different cities. It shows the number of patients in each city in the form of an area chart.

- **Sorting**: You can sort the data in ascending or descending order based on the selected sort type. Use the provided sort dropdown to change the sorting order.

### Data Generation

To generate sample data for the medical dashboard, you can use the provided data generation scripts. Follow these steps to generate the data:

1. **Patients Generation**:
    - Make sure you have Python installed on your system.
    - Open a terminal and navigate to the root directory of the project.
    - Run the following command to generate patient data:

    ```shell
    python peopleGen.py
    ```

    - The script will generate a JSON file named `patients.json` in the project's directory.
    - Copy the generated JSON file to the appropriate location for the backend to use.

2. **Clinics Generation**:
    - Make sure you have Python installed on your system.
    - Open a terminal and navigate to the root directory of the project.
    - Run the following command to generate clinic data:

    ```shell
    python klinGen.py
    ```

    - The script will generate a JSON file named `clinics.json` in the project's directory.
    - Copy the generated JSON file to the appropriate location for the backend to use.

3. **Appointments Generation**:
    - Make sure you have Python installed on your system.
    - Open a terminal and navigate to the root directory of the project.
    - Run the following command to generate appointment data:

    ```shell
    python gen.py
    ```

    - The script will generate a JSON file named `appointments.json` in the project's directory.
    - Copy the generated JSON file to the appropriate location for the backend to use.

4. **Doctors Generation**:
    - Make sure you have Python installed on your system.
    - Open a terminal and navigate to the root directory of the project.
    - Run the following command to generate doctor data:

    ```shell
    python docGen.py
    ```

    - The script will generate a JSON file named `doctors.json` in the project's directory.
    - Copy the generated JSON file to the appropriate location for the backend to use.

Make sure to update the generated JSON files for patients, clinics, doctors, and appointments to match the desired data for your medical dashboard.
